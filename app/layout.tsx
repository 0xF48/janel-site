import React from "react"
import './globals.css'
import { getData } from "./getData"
import { NavButton } from "./NavButton"
import { navOptions } from "./publicEnums"
import Link from "next/link"
import ScrollToTop from "./ScrollToTop"


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
        <NavButton />
        <header className="mt-12 pb-10 border-main-600 border-solid border-b-1">
          <div className="mx-auto max-w-6xl relative">
            <h1 className="text-[3em] font-gloock">{globals.header_name}</h1>
          </div>
        </header>
        <div className="mx-auto max-w-6xl">
          {children}
        </div>

        <footer className="p-4 text-center bg-main-600 min-h-[10rem] font-mono text-sm text-main-300">
          <div className="flex flex-row justify-center">
            {navOptions.map((option, i) => (
              < div key={option.href}>
                <Link href={option.href} className="mx-2">{option.label}</Link>
                {i < navOptions.length - 1 ? <span className="text-main-500">/</span> : null}
              </div>
            ))}
          </div>
        </footer>
        <ScrollToTop />
      </body>
    </html>
  )
}
