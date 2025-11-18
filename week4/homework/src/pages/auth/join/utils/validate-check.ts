export const validatePassword = (value: string): string => {
  if (!value) return "";

  if (value.length < 8 || value.length > 64) {
    return "비밀번호는 8자 이상 64자 이하여야 합니다.";
  }

  if (/\s/.test(value)) {
    return "비밀번호에는 공백을 사용할 수 없습니다.";
  }

  if (!/[A-Z]/.test(value)) {
    return "비밀번호에 대문자를 최소 1자 이상 포함해야 합니다.";
  }

  if (!/[a-z]/.test(value)) {
    return "비밀번호에 소문자를 최소 1자 이상 포함해야 합니다.";
  }

  if (!/[0-9]/.test(value)) {
    return "비밀번호에 숫자를 최소 1자 이상 포함해야 합니다.";
  }

  if (!/[!@#$%^&*()[\]{}\\\-_=+|;:'",.<>?`~]/.test(value)) {
    return "비밀번호에 특수문자를 최소 1자 이상 포함해야 합니다.";
  }

  return "";
};

export const validateId = (value: string): string => {
  if (value.length > 50) {
    return "아이디는 50자를 초과할 수 없습니다.";
  }
  return "";
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string,
): string => {
  if (confirmPassword && password !== confirmPassword) {
    return "비밀번호가 서로 일치하지 않습니다.";
  }
  return "";
};
