import type { Metadata } from 'next'
import './globals.css'
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-background text-text`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
