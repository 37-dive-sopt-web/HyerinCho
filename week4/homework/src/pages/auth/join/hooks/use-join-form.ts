import { type ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import { routePath } from "src/routers/path";

import { postJoin } from "@shared/apis/domain/auth";

import {
  validateId,
  validatePassword,
  validatePasswordMatch,
} from "../utils/validate-check";

interface useJoinFormProps {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: string;
}
/**
 * 회원가입 폼의 상태 관리 및 실시간 유효성 검사를 담당하는 훅입니다.
 *
 * 사용자의 입력(`handleChange`)에 따라 ID와 비밀번호 정책을 검사하고,
 * 비밀번호 일치 여부(`isMatch`)를 자동으로 계산하여 제공합니다.
 *
 * @returns
 * - `formState`: 입력된 폼 데이터 객체
 * - `errorMessage`: 유효성 검사 실패 메시지
 * - `isMatch`: 비밀번호와 확인 비밀번호의 일치 여부 (boolean)
 * - `handleChange`: 입력 상태 업데이트 및 검사 핸들러
 * - `handleSubmit`: 폼 제출 핸들러
 */
export const useJoinForm = () => {
  const [formState, setFormState] = useState<useJoinFormProps>({
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
    age: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const isMatch =
    formState.password !== "" &&
    formState.password === formState.passwordConfirm;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState((prev) => ({ ...prev, [name]: value }));

    switch (name) {
      case "id": {
        const error = validateId(value);
        setErrorMessage(error);
        break;
      }

      case "password": {
        const ruleError = validatePassword(value);
        if (ruleError) {
          setErrorMessage(ruleError);
          return;
        }
        const matchError = validatePasswordMatch(
          value,
          formState.passwordConfirm,
        );
        setErrorMessage(matchError);
        break;
      }

      case "passwordConfirm": {
        const ruleError = validatePassword(formState.password);
        if (ruleError) {
          setErrorMessage(ruleError);
          return;
        }
        const matchError = validatePasswordMatch(formState.password, value);
        setErrorMessage(matchError);
        break;
      }

      default:
        break;
    }
  };

  const handleSubmit = async () => {
    try {
      await postJoin({
        username: formState.id,
        password: formState.password,
        name: formState.name,
        email: formState.email,
        age: Number(formState.age),
      });

      alert("회원가입 성공!");
      navigate(routePath.LOGIN);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    formState,
    errorMessage,
    handleChange,
    handleSubmit,
    isMatch,
  };
};
