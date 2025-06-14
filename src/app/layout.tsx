import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "MooveIt – Ton coach de poche",
  description:
    "L’application sportive personnalisée qui réunit les sportifs amateurs près de chez toi. Bientôt disponible sur ton smartphone !",
  icons: [{ rel: "icon", url: "/favicon.png" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} className="bg-[#614bb0] antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
