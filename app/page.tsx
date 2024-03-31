import { fetchFromGoogleBooks } from "../data/fetchFromGoogleBooks";
import styles from './page.module.css'

// dynamic page
export default async function Home() {
  const getRandomSubArray = (arr: any[], size: number) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  }
  // get random sub array from array
  const books = await fetchFromGoogleBooks()
  return (
    <main className={styles.main}>
      {
        getRandomSubArray(books, 3).map((book, index) => (
          <div key={index}>hey</div>
      ))
      }
      <div>
        {/* <Navigate /> */}
      </div>
    </main>
  );
}
