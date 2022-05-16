import { Express } from 'express';

import tenants from '../data/tenants.data';

export const handleTenant = (app: Express) => [
  app.get(`/api/v1/gc/core/tenants`, (req, res) => {
    const token = req.headers.authorization;
    const limit = Number(req.query.limit) || 1000;
    const offset = Number(req.query.offset) || 0;
    const filter = req.query.filter; // (status==OPEN)
    const filterObj = {} as any;

    const items = tenants;

    if (!token) {
      // If not authenticated, respond with a 403 error
      return res.status(403).json({
        message: 'Not authorized',
      });
    }

    // If authenticated, return a mocked user details
    return res.json({
      items: items.slice(offset, limit + offset),
      page_info: {
        limit,
        offset,
        total: items.length,
      },
    });
  }),
];
