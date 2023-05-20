import './globals.css'
import { Nunito } from 'next/font/google'
import Head from 'next/head'

const nunito = Nunito({
  subsets: ['latin'],
  // this will be the css variable
  variable: '--font-sans',
});

import localFont from 'next/font/local'

const MontserratAlt1 = localFont({
  src: [
    {
      path: './webfonts/MontserratAlt1-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './webfonts/MontserratAlt1-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './webfonts/MontserratAlt1-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './webfonts/MontserratAlt1-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-MontserratAlt1'
})

export const metadata = {
  title: "Lucas Perez - Développeur Web",
  description: "Je suis un développeur web passionné par l'innovation, capable de traduire les idées en réalité numérique à travers une expertise en front et back.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${MontserratAlt1.variable} scroll-smooth`}>
      <Head>
        <meta property="og:image" content="./public/lucas-perez.png" />
      </Head>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
