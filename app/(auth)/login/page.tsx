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
import Magnet from '@/app/_components/Magnet'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { login } from '@/app/_apis/auth/auth'
import { notify } from '@/app/_components/Toast'
import axios from 'axios'

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      notify(
        'success',
        <>
          로그인 성공! <br /> clovie를 즐겨주세요.
        </>,
      )
      router.push('/')
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        notify('error', error.response?.data?.message || '로그인 실패')
      } else if (error instanceof Error) {
        notify('error', error.message)
      } else {
        notify('error', '로그인에 실패했습니다. 다시 시도해주세요.')
      }
    },
  })

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
    mutate(data)
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
          <h1 className="text-center text-2xl font-bold">로그인</h1>
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
            className="focus:border-primary w-full rounded-md border border-gray-300 p-2 text-gray-500 transition-colors duration-500 focus:backdrop-blur-md focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* 비밀번호 */}
        <div>
          <label className="mb-1 block">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            {...register('password')}
            className="focus:border-primary w-full rounded-md border border-gray-300 bg-white/10 p-2 text-gray-500 transition-colors duration-500 focus:backdrop-blur-md focus:outline-none"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="primary" className="w-full">
          로그인하기
        </Button>

        <div className="text-md mt-10 flex items-center justify-center gap-4">
          <p>회원이 아니신가요?</p>
          <Link
            href="/signup"
            className="text-primary decoration-primary-40 underline underline-offset-2"
          >
            회원가입하기
          </Link>
        </div>
      </form>
    </PageContainer>
  )
}
