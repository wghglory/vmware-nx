import { Express } from 'express';

import { ACCESS_TOKEN } from '@vmware/constants';
import { User } from '@vmware/api-interfaces';
import users from '../data/users.data';

let loginUser = null;

export const handleAuth = (app: Express) => {
  app.post(`/api/v1/gc/session`, (req, res) => {
    console.log(req.body);

    const { username } = req.body as User;

    const foundUser = users.find((u) => u.username === username);
    if (foundUser) {
      delete foundUser.password;

      loginUser = foundUser;

      return res.setHeader(ACCESS_TOKEN, 'MOCK_ACCESS_TOKEN').send({
        id: 'sessionId',
        user: foundUser,
      });
    } else {
      return res.status(401).send({
        message: 'No user found',
      });
    }
  });

  app.get(`/api/v1/gc/current-user`, (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
      // If not authenticated, respond with a 403 error
      return res.status(403).send({
        message: 'Not authorized',
      });
    }

    // If authenticated, return a mocked user details
    return res.send(loginUser);
  });

  app.delete(`/api/v1/gc/session`, (req, res) => {
    loginUser = null;

    return res.send({
      message: 'log out successfully',
    });
  });
};
