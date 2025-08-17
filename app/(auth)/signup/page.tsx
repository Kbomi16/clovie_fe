'use client'

import Button from '@/app/_components/Button'
import PageContainer from '@/app/_components/PageContainer'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/app/_utils/loginSchema'
import { z } from 'zod'
import Image from 'next/image'
import logo from '@/public/clovie_logo.png'
import { signupSchema } from '@/app/_utils/signupSchema'
import Magnet from '@/app/_components/Magnet'
import { signup } from '@/app/_apis/auth/auth'
import { useMutation } from '@tanstack/react-query'
import { notify } from '@/app/_components/Toast'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type SignupFormData = z.infer<typeof signupSchema>

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  })

  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      notify('success', '회원가입이 완료되었습니다. 로그인해주세요.')
      router.push('/login')
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        notify('error', error.response?.data?.message || '회원가입 실패')
      } else if (error instanceof Error) {
        notify('error', error.message)
      } else {
        notify('error', '회원가입에 실패했습니다. 다시 시도해주세요.')
      }
    },
  })

  const onSubmit = (data: SignupFormData) => {
    const { confirmPassword, ...signupData } = data
    console.log(signupData)
    mutate(signupData)
  }

  return (
    <PageContainer className="flex min-h-screen flex-col items-center justify-center">
      <Magnet padding={50} disabled={false} magnetStrength={50}>
        <div className="my-10 flex items-center justify-center gap-4">
          <Link href={'/'}>
            <Image
              src={logo}
              alt="로고"
              width={400}
              height={300}
              priority
              className="size-12"
            />
          </Link>
          <h1 className="text-center text-2xl font-bold">회원가입</h1>
        </div>
      </Magnet>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur-lg transition-colors duration-500"
      >
        {/* 이메일 */}
        <div>
          <label className="mb-1 block">이메일</label>
          <input
            type="email"
            placeholder="example@email.com"
            {...register('email')}
            className="focus:border-primary w-full rounded-md border border-gray-300 p-2 text-gray-500 placeholder-gray-500 transition-colors duration-500 focus:backdrop-blur-md focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* 닉네임 */}
        <div>
          <label className="mb-1 block">닉네임</label>
          <input
            type="text"
            placeholder="닉네임"
            {...register('nickname')}
            className="focus:border-primary w-full rounded-md border border-gray-300 p-2 text-gray-500 placeholder-gray-500 transition-colors duration-500 focus:backdrop-blur-md focus:outline-none"
          />
          {errors.nickname && (
            <p className="mt-1 text-sm text-red-400">
              {errors.nickname.message}
            </p>
          )}
        </div>

        {/* 비밀번호 */}
        <div>
          <label className="mb-1 block">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            {...register('password')}
            className="focus:border-primary w-full rounded-md border border-gray-300 p-2 text-gray-500 placeholder-gray-500 transition-colors duration-500 focus:backdrop-blur-md focus:outline-none"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* 비밀번호 확인 */}
        <div>
          <label className="mb-1 block">비밀번호 확인</label>
          <input
            type="password"
            placeholder="비밀번호 확인"
            {...register('confirmPassword')}
            className="focus:border-primary w-full rounded-md border border-gray-300 p-2 text-gray-500 placeholder-gray-500 transition-colors duration-500 focus:backdrop-blur-md focus:outline-none"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-400">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button type="primary" className="w-full">
          회원가입하기
        </Button>

        <div className="text-md mt-10 flex items-center justify-center gap-4">
          <p>이미 계정이 있으신가요?</p>
          <Link
            href="/login"
            className="text-primary decoration-primary-40 underline underline-offset-2"
          >
            로그인하기
          </Link>
        </div>
      </form>
    </PageContainer>
  )
}
