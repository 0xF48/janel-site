import React from "react"
import './globals.css'
import { getData } from "./getData"
import { NavButton } from "./NavButton"
import { GLOBAL, navOptions } from "./publicEnums"
import Link from "next/link"
import ScrollToTop from "./ScrollToTop"
import { EditIcon, PencilIcon } from "lucide-react"
import { MailerLite } from "./newsletter/MailerLite"
import { getAssetURL } from "./getAssetURL"


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

        <header className="mt-12 pb-10 border-main-600 border-solid border-b-1">
          <div className="mx-auto max-w-6xl relative flex items-center justify-between">
            <h1 className="text-[3em] font-gloock">{globals.header_name}</h1>
            <NavButton />
          </div>
        </header>
        <div className="mx-auto max-w-6xl min-h-[70vh] border-main-600 border-solid border-l-1 border-r-1">
          {children}
        </div>

        <footer className="p-4 text-center bg-main-600 min-h-[10rem] font-mono text-sm text-main-300">
          <div className="flex flex-row justify-center mt-10">
            {navOptions.map((option, i) => (
              <div key={option.href}>
                <Link href={option.href} className="mx-2">{option.label}</Link>
                {i < navOptions.length - 1 ? <span className="text-main-500">/</span> : null}
              </div>
            ))}
          </div>
          <div className="pt-10 flex w-full items-center justify-center flex-col">

            <div className="w-fit flex flex-row items-center justify-center">
              designed by <a href='https://lerp.io/credits'><img src={getAssetURL('64fd2314-6618-4446-9546-4087e55e4a26')} className="w-6 ml-4"></img></a>
            </div>
            <a href={GLOBAL.DIRECTUS_API} target="_blank" rel="noreferrer" className=" mt-8 p-2 px-5 flex items-center justify-center hover:bg-main-700 rounded-xl">
              <PencilIcon className="text-main-400" width={16} strokeWidth={2}></PencilIcon>
            </a>

          </div>
        </footer>
        <ScrollToTop />
      </body >
    </html >
  )
}
