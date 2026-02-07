import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vivek Verma - Biotechnology Student Portfolio',
  description: 'Personal portfolio of Vivek Verma, a Biotechnology student passionate about research, molecular biology, and bioinformatics.',
  keywords: ['biotechnology', 'research', 'molecular biology', 'bioinformatics', 'portfolio'],
  authors: [{ name: 'Vivek Verma' }],
  openGraph: {
    title: 'Vivek Verma - Biotechnology Student Portfolio',
    description: 'Personal portfolio of Vivek Verma, a Biotechnology student passionate about research and innovation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-white text-secondary-900">
          {children}
        </div>
      </body>
    </html>
  )
}
