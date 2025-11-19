export const routePath = {
  LAYOUT: "/",
  LOGIN: "/auth/login",
  JOIN: "/auth/sign",
  MY: "/mypage",
  MEMBERS: "/mypage/members",
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
