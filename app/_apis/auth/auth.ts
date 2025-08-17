import axiosInstance from '@/app/_libs/axiosInstance'
import { SignupData, SignupResponse } from './auth.type'

// ! 회원가입
export const signup = async (data: SignupData): Promise<SignupResponse> => {
  const response = await axiosInstance.post('/auth/signup', data)
  return response.data
}
