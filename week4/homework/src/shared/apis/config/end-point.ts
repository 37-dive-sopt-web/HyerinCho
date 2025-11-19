export const END_POINT = {
  POST_JOIN: "users",
  POST_LOGIN: "auth/login",
  GET_USERS: (userId: number) => `users/${userId}`,
};
