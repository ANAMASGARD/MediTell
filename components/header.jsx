import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from './ui/button'

const Header = () => {
  return (
   <header  className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/50 dark:bg-background/50'>
    <nav className='container mx-auto flex items-center justify-between p-4'>
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        <Image 
        src="/logo-single.png"
        alt="MediTell Logo"
        width={50}
        height={50}
        className="inline-block mr-2"
        />
        </Link>
        <div className='flex items-center space-x-4'>
             <SignedOut>
              <SignInButton > 
              <Button variant="secondary">
                Sign In 
              </Button>

              </SignInButton>
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
    </nav>
   </header>
  )
}

export default Header