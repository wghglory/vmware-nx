export const ACCESS_TOKEN = 'x-vmware-vcloud-access-token';

export enum RoutePath {
  root = '/',
  public = '/public',
  signIn = '/sign-in',
  noAccess = '/no-access',
  notFound = '*',
  operator = '/operator',
  provider = '/provider',
  tenant = '/tenant',
}
