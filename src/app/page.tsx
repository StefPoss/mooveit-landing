import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#c7deff]">
      {/* Logo MooveIt */}
      <Image
        src="/logo.png"
        alt="MooveIt Logo"
        width={120}
        height={120}
        className="mb-8"
      />
      {/* Splash vidéo + overlay */}
      <div className="relative w-full max-w-2xl mx-auto h-[550px] rounded-xl overflow-hidden mb-8 shadow-lg">
        <video
          className="object-cover w-full h-full"
          src="/video-splash.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/15">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 text-center leading-tight drop-shadow">
            Bienvenue dans
            <br />
            <span className="text-[#c7deff]">MOOVE IT,</span>
            <br />
            ton coach de poche&nbsp;!
          </h2>
          <p className="text-white text-lg md:text-xl text-center max-w-lg leading-snug drop-shadow mt-2">
            L&lsquo;application sportive personnalisée qui réunit
            <br />
            les utilisateurs près de chez toi.
          </p>
        </div>
      </div>

      {/* Message d'attente */}
      <span className="text-[#614bb0] font-semibold mb-4 text-2xl">
        Bientôt disponible sur ton smartphone !
      </span>

      <hr className="mt-4 mb-4 border-t-2 border-[#c5c4d9] w-1/2 mx-auto" />

      <footer className="w-full text-center mt-2 mb-4 text-gray-600 text-sm">
        Made with <span className="text-pink-400">💗</span> by Team #65
        <br />
        © 2025 Amel, Nico, Sami, Sofiane, Stéphane
        <br />
        <a
          href="mailto:contact@mooveit.ovh"
          className="mx-1 underline hover:text-blue-500"
        >
          contact@mooveit.ovh
        </a>
      </footer>
    </main>
  )
}
