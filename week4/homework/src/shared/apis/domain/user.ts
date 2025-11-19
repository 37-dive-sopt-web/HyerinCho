import axios from "axios";

import { END_POINT } from "../config/end-point";
import { instance } from "../instance";
import type { ApiResponse } from "../types/api-response-type";
import type {
  userDeletePayload,
  UserRequest,
  UserResponse,
} from "../types/user";

/**
 * 개인정보 조회 (GET)
 *  회원 식별자(id)로 개인정보를 조회합니다.
 * @param userId
 * @returns
 */
export const getUser = async (userId: number): Promise<UserResponse> => {
  try {
    const response = await instance.get<ApiResponse<UserResponse>>(
      END_POINT.GET_USERS(userId),
    );

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const serverMessage = error.response.data.message;
      throw new Error(serverMessage);
    }
    throw error;
  }
};

/**
 * 개인정보 수정 (PATCH)
 * name, email, age를 부분 업데이트합니다. 빈 값은 무시합니다.
 * @param body
 * @param userId
 * @returns
 */
export const patchUser = async (
  body: UserRequest,
  userId: number,
): Promise<UserResponse> => {
  try {
    const response = await instance.patch<ApiResponse<UserResponse>>(
      END_POINT.GET_USERS(userId),
      body,
    );

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const serverMessage = error.response.data.message;
      throw new Error(serverMessage);
    }
    throw error;
  }
};

/**
 * 회원 탈퇴 (DELETE)
 * 회원 데이터를 영구 삭제합니다(HARD DELETE).
 * @param userId
 * @returns
 */
export const deleteUser = async (
  userId: number,
): Promise<userDeletePayload> => {
  try {
    const response = await instance.delete<ApiResponse<userDeletePayload>>(
      END_POINT.GET_USERS(userId),
    );

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const serverMessage = error.response.data.message;
      throw new Error(serverMessage);
    }
    throw error;
  }
};
