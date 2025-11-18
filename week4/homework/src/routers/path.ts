export const routePath = {
  LAYOUT: "/",
  LOGIN: "/auth/login",
  JOIN: "/auth/sign",
  MY: "/mypages",
  MEMBERS: "/mypages/members",
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
