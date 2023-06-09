import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
// TODO: Use radial-gradient() for the background

export default function Home() {
  const [num, setNum] = useState("1");

  return (
    <>
      <Head>
        <title>TV-guiden score</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="p-2">
            <input
              type="number"
              defaultValue={num}
              onChange={(e) => setNum(e.target.value)}
              className="border-red-500 border w-9"
            />
            <Link href={`/desk/${num}`}>
              <button className="p-2 bg-slate-300 rounded-full">
                Assign ID
              </button>
            </Link>
          </div>
          <Link href="/admin">
            <button className="p-2 bg-slate-300 rounded-full">
              Admin Page
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
