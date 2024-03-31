"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import styles from './create-book.module.css'

const CreateBook = () => {
  const [ book, setBook ] = useState<any>({
    title: '',
    author: '',
    review: '',
    image: ''
  })
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBook({ ...book, [name]: value })
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // post request
    const resp = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    console.log(resp)
    setBook({
      title: '',
      author: '',
      review: '',
      image: ''
    })
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <div className={styles.input}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={handleInputChange} value={book['title']} />
      </div>
      <div className={styles.input}>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" onChange={handleInputChange} value={book['author']} />
      </div>
      <div className={styles.input}>
        <label htmlFor="review">Review</label>
        <input type="text" name="review" onChange={handleInputChange} value={book['review']} />
      </div>
      <div className={styles.input}>
        <label htmlFor="image">image</label>
        <input type="text" name="image" onChange={handleInputChange} value={book['image']} />
      </div>
      <button className={styles.submit} type="submit">Submit</button>
    </form>
  </div>
}

export default CreateBook