export const ROUTES = {
  notFound: '*',
  main: '/',
  aboutMe: '/about',
  admin: '/admin',
  project: '/project/:id',
  dynamic: {
    projectId: (id: number) => `/project/${id}`,
  },
}
