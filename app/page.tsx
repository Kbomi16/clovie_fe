import Link from 'next/link'
import Button from './_components/Button'

export default function home() {
  return (
    <div>
      HOME
      <div className="relative inline-block overflow-hidden rounded">
        <Button>버튼</Button>
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
