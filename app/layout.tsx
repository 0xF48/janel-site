import React from "react"
import './globals.css'
import { getData } from "./getData"
import ScrollToTop from "./ScrollToTop"
import { NavButtonWrapper } from "./NavButtonWrapper"
import { Footer } from "./Footer"
import Link from "next/link"


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { globals } = await getData()


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title >{globals.header_name}</title>
        <meta name="description" content={globals.header_description} />
      </head>

      <body className="bg-main-700 text-white w-full h-fit min-h-screen justify-between flex flex-col">


        <header className="h-35 py-10 border-main-600 border-solid border-b-1 left-0 top-0 w-full mt-20 md:mt-0">
          <div className="mx-auto max-w-6xl flex items-center justify-center md:justify-between px-10">

            <Link href={'/books'} className="text-[3em] relative  -mt-5">
              <div className="font-gloock ">{globals.header_name}</div>
              <div className="absolute font-display text-main-200 font-thin text-xl right-0 -bottom-4 ">{globals.header_description}</div>
            </Link>



          </div>
        </header>
        <NavButtonWrapper />

        {/* <header className="h-35 py-10 z-10 sticky left-0 top-0 w-full -mt-40 mb-5">
          <div className="mx-auto max-w-6xl flex items-center justify-end px-10">
            <div className="sticky top-0 z-20 mt-3">
              
            </div>
          </div>
        </header> */}





        <div className="w-full mx-auto max-w-6xl min-h-[70vh] border-main-600 border-solid border-l-1 border-r-1">
          {children}
        </div>

        <Footer />
        <ScrollToTop />
      </body >
    </html >
  )
}
