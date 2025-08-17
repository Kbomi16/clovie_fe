export type SignupData = {
  email: string
  nickname: string
  password: string
  grade?: '새싹' | '한잎' | '두잎' | '세잎' | '네잎' | '황금네잎' | '관리자'
}

export type SignupResponse = {
  message: string
  user: {
    id: string
    email: string
    nickname: string
    grade: string
    points: number
    createdAt: string
    updatedAt: string
  }
}
