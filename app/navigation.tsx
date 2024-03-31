"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Navigate = () => {
  const [count, setCount] = useState(0);
  const router = useRouter()
  const nextjsRefresh = () => {
    setCount(count + 1)
    router.refresh()
  }
  return (
    <button onClick={nextjsRefresh}>Refresh All Books {count}</button>
  )
}

export default Navigate