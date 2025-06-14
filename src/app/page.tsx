import Image from "next/image"
import { SiNextdotjs, SiTypescript, SiReact, SiVercel, SiTailwindcss } from "react-icons/si"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#614bb0] px-4">
      {/* Bloc principal, prend tout l’espace dispo */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md mx-auto">
        <Image
          src="/logo.png"
          alt="MooveIt Logo"
          width={88}
          height={88}
          className="mb-4"
          priority
        />

        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden my-2 mt-8">
          <video
            src="/video-splash.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover mt"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-2 rounded-2xl">
            <h2 className="text-white text-2xl font-bold mb-2 text-center leading-tight drop-shadow mb-8">
              Bienvenue dans <span className="text-[#a291e7]">MOOVE IT,</span>
              <br />
              ton coach de poche&nbsp;!
            </h2>
            <p className="text-white text-base text-center leading-snug drop-shadow mt-2">
              L’application sportive personnalisée
              <br />
              qui réunit les sportifs amateurs
              <br />
              près de chez toi.
            </p>
          </div>
        </div>

        <span className="text-white font-semibold text-xl text-center">
          Bientôt disponible sur ton smartphone&nbsp;!
        </span>
      </div>

      {/* Footer sticky, icons wrap, couleur #b6b6b6 */}
      <footer className="w-full flex flex-col items-center gap-2 pb-3">
  {/* Footer infos équipe */}
  <div className="bg-[#483a7c]/90 rounded-xl px-4 py-2 text-xs text-white text-center shadow">
    Made with <span className="text-pink-400">💗</span> by Team #165<br />
    © 2025 Amel, Nico, Sami, Sofiane, Stéphane<br />
    <a
      href="mailto:contact@mooveit.ovh"
      className="underline hover:text-blue-400"
    >
      contact@mooveit.ovh
    </a>
  </div>
  {/* Footer technos */}
  <div className="bg-[#332961]/90 rounded-xl px-4 py-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-[#b6b6b6] shadow">
    <span className="flex items-center gap-1">
      <SiNextdotjs size={16} className="text-[#b6b6b6]" />
      Next.js
    </span>
    <span className="flex items-center gap-1">
      <SiTypescript size={16} className="text-[#b6b6b6]" />
      TypeScript
    </span>
    <span className="flex items-center gap-1">
      <SiReact size={16} className="text-[#b6b6b6]" />
      React
    </span>
    <span className="flex items-center gap-1">
      <SiTailwindcss size={16} className="text-[#b6b6b6]" />
      Tailwind
    </span>
    <span className="flex items-center gap-1">
      <SiVercel size={16} className="text-[#b6b6b6]" />
      Vercel
    </span>
  </div>
</footer>
    </main>
  )
}
