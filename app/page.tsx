'use client'

import Link from 'next/link'
import Button from './_components/Button'
import { notify } from './_components/Toast'

export default function home() {
  return (
    <div>
      HOME
      <div className="relative inline-block overflow-hidden rounded">
        <Button
          onClick={() =>
            notify(
              'info',
              <div className="flex flex-col">
                <span>홈페이지입니다.</span>
                <span>하하하하</span>
              </div>,
            )
          }
        >
          토스트 확인
        </Button>

        <Button type="primary">버튼</Button>
        <Button type="dashed">버튼</Button>
        <Button type="text">버튼</Button>
        <Button disabled>버튼</Button>
        <Button disabled type="primary">
          버튼
        </Button>
        <Button disabled type="dashed">
          버튼
        </Button>
        <Button disabled type="text">
          버튼
        </Button>
      </div>
      <div>
        <Link href="/login">로그인페이지</Link>
      </div>
    </div>
  )
}
