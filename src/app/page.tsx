"use client";
import { useState, useEffect } from "react";
import LoadingCard from "./ReusableComponents/LoadingCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);



  return (
    <div className="flex justify-center items-center font-medium">
      {isLoading && <LoadingCard message="Testing the load"/>}
      Dev Link International
    </div>
  )
}
