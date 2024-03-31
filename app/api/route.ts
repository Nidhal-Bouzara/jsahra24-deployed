import { fetchFromGoogleBooks } from "../../data/fetchFromGoogleBooks"

export const GET = async (req: Request) => {
  // const books = await fetchFromGoogleBooks()
  const books = await fetchFromGoogleBooks()
  const book = books[generateRandomNumberInRange(0, books.length - 1)]
  return (Response as any).json(book)
}

interface CREATE_BOOK_BODY {
  title: string
  author: string
  review: string
  image: string
}

const generateRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const POST = async (req: Request) => {
  // extract body
  const body = await req.json() as CREATE_BOOK_BODY
  // create book
  return (Response as any).json({ msg: 'done' })
}

interface UPDATE_BOOK_BODY {
  id: number
  title?: string
  author?: string
  review?: string
  image?: string
}

export const PUT = async (req: Request) => {
  const { id, ...book }: UPDATE_BOOK_BODY = await req.json()
  return (Response as any).json({ msg: 'done' })
}

interface DELETE_BOOK_BODY {
  id: number
}

export const DELETE = async (req: Request) => {
  const { id } = await req.json() as DELETE_BOOK_BODY
  return (Response as any).json({ msg: 'done' })
}