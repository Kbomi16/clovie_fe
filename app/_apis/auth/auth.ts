import axiosInstance from '@/app/_libs/axiosInstance'
import {
  LoginData,
  LoginResponse,
  SignupData,
  SignupResponse,
} from './auth.type'

// ! 회원가입
export const signup = async (data: SignupData): Promise<SignupResponse> => {
  const response = await axiosInstance.post('/auth/signup', data)
  return response.data
}

// ! 로그인
export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/auth/login', data)
  return response.data
}
