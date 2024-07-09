import React from 'react'
import ModeToggle from './ModeToggle'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 max-w-screen-2xl items-center">
        <Button asChild variant="ghost">
          <Link href="/" className="mr-auto">
            <Image src="/tools.svg" alt="Logo" width={24} height={24} />
            <span>工具箱</span>
          </Link>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  )
}

export default Header
