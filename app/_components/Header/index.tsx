'use client'

import React, { useState, useEffect } from 'react' // React 훅 임포트
import Link from 'next/link'
import Magnet from '../Magnet' // Magnet 컴포넌트 사용 여부는 확인 필요해요! (예시 코드에선 사용되지 않음)
import Image from 'next/image'
import logo from '@/public/clovie_logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex h-14 w-full items-center justify-between px-4 transition-all duration-300 ease-in-out ${
        scrolled && 'bg-white/10 backdrop-blur-sm'
      } `}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <Magnet magnetStrength={10}>
          <Link href={'/'} className="flex items-center justify-center gap-1">
            <Image
              src={logo}
              alt="로고"
              width={400}
              height={300}
              priority
              className="size-8"
            />
            <h1 className="font-bold">Clovie</h1>
          </Link>
        </Magnet>
        <Magnet magnetStrength={10}>
          <nav className="border-primary/50 bg-primary/5 flex items-center gap-6 rounded-full border px-4 py-2">
            <Link
              href="/login"
              className="hover:text-primary text-primary/50 transition-all duration-500"
            >
              로그인/회원가입
            </Link>
          </nav>
        </Magnet>
      </div>
    </header>
  )
}
