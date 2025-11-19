import axios from "axios";

import { END_POINT } from "@shared/apis/config/end-point";
import { instance } from "@shared/apis/instance";
import type { ApiResponse } from "@shared/apis/types/api-response-type";

import type {
  JoinRequest,
  JoinResponse,
  LoginRequest,
  LoginResponse,
} from "../types/auth";

/**
 * 회원가입 (POST)
 * username, password, name, email, age를 받아 회원 정보를 저장합니다.
 * @param body
 * @returns
 */
export const postJoin = async (body: JoinRequest): Promise<JoinResponse> => {
  try {
    const response = await instance.post<ApiResponse<JoinResponse>>(
      END_POINT.POST_JOIN,
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
 * 로그인 (POST)
 * username과 password로 로그인합니다. 토큰 발급 없음.
 * @param body
 * @returns
 */
export const postLogin = async (body: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await instance.post<ApiResponse<LoginResponse>>(
      END_POINT.POST_LOGIN,
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
