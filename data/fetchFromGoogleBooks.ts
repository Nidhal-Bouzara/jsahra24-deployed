import 'server-only'

type GoogleBook = {
  items: [
    {
      volumeInfo: {
        title: string,
        authors: string[],
        description: string,
        imageLinks: {
          thumbnail: string
        }
      }
    }
  ]
}

export const fetchFromGoogleBooks = async (): Promise<> => {
  const data = await (await fetch('https://www.googleapis.com/books/v1/volumes?q=nextjs', { next: { revalidate: 3600, tags: ['book-fetching'] } })).json() as GoogleBook
  const books: Book[] = data.items.map((book) => ({
    title: book.volumeInfo.title ?? 'No Title',
    author: book.volumeInfo.authors.map((author) => author).join(', '),
    review: book.volumeInfo.description,
    image: book.volumeInfo.imageLinks?.thumbnail ?? 'https://via.placeholder.com/150'
  }))
  return books
}