import { User } from '@vmware/api-interfaces';

const users: User[] = [
  {
    id: 'pa',
    name: 'Provider Admin',
    username: 'pa',
    password: 'vmware',
    role: 'PROVIDER_ADMIN',
    email: 'pa@vmware.com',
  },
  {
    id: 'ta',
    name: 'Tenant Admin',
    username: 'ta',
    password: 'vmware',
    role: 'TENANT_ADMIN',
    email: 'ta@vmware.com',
  },
  {
    id: 'tu',
    name: 'Tenant User',
    username: 'tu',
    password: 'vmware',
    role: 'TENANT_USER',
    email: 'tu@vmware.com',
  },
];

export default users;
