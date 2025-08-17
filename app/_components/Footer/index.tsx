'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary/5 fixed bottom-0 left-0 w-full border-t border-white/20 shadow-inner backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/clovie_logo.png"
            alt="Clovie Logo"
            width={40}
            height={40}
            className="size-8"
          />
          <span className="font-bold text-black/70">Clovie</span>
          <span className="text-sm text-black/70">© 2025</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-white/80">
          <Link href="/about" className="text-black/70 transition">
            About
          </Link>
          <Link href="/contact" className="text-black/70 transition">
            Contact
          </Link>
          <Link href="/privacy" className="text-black/70 transition">
            Privacy
          </Link>
        </div>

        <div className="flex items-center gap-4 text-black/70">
          <Link href="" className="transition hover:text-black/70">
            <FaGithub size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
