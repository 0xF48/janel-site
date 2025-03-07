import React from "react"
import './globals.css'
import { getData } from "./getData"
import ScrollToTop from "./ScrollToTop"
import { NavButtonWrapper } from "./NavButtonWrapper"
import { Footer } from "./Footer"


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
        <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{globals.header_name}</title>
        <meta name="description" content={globals.header_description} />
      </head>

      <body className="bg-main-700 text-white w-full h-fit min-h-screen justify-between flex flex-col">


        <header className="h-35 py-10 border-main-600 border-solid border-b-1 left-0 top-0 w-full">
          <div className="mx-auto max-w-6xl flex items-center justify-between px-10">
            <div className="text-[3em] font-gloock">{globals.header_name}</div>

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
