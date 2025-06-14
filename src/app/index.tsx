import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#c7deff]">
      {/* Logo MooveIt (remplace '/logo.png' si besoin) */}
      <Image
        src="/logo.png"
        alt="MooveIt Logo"
        width={120}
        height={120}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">MooveIt</h1>
      <p className="text-lg text-gray-700 text-center max-w-md">
        Ton coach de poche
        <br />
        <span className="text-[#f3c0e7] font-semibold">
          Bientôt disponible !
        </span>
      </p>
    </main>
  )
}
