import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
import Nav from './components/nav';

const figtree = Figtree({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Jedd Soh',
  description: 'My software development portfolio. Built using Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${figtree.className} dark text-foreground bg-background`}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
