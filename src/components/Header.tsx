'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({
  href,
  children,
  className,
  target,
  rel,
}: {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}) {
  return (
    <PopoverButton
      as={Link}
      href={href}
      className={clsx('block w-full text-left transition-colors', className)}
      target={target}
      rel={rel}
    >
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 focus:ring-2 focus:ring-slate-500 focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 backdrop-blur-sm duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      {/* <PopoverPanel
        transition
        className="absolute top-full right-0 mt-2 flex w-48 origin-top-right flex-col rounded-xl bg-white p-3 text-base tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <MobileNavLink
          href="#how-it-works"
          className="rounded-lg px-3 py-2 hover:bg-slate-50"
        >
          How It Works
        </MobileNavLink>
        <MobileNavLink
          href="#business-benefits"
          className="rounded-lg px-3 py-2 hover:bg-slate-50"
        >
          Business Benefits
        </MobileNavLink>
        <MobileNavLink
          href="#contact-us"
          className="rounded-lg px-3 py-2 hover:bg-slate-50"
        >
          Contact Us
        </MobileNavLink>
        <hr className="my-2 border-slate-200" />
        <MobileNavLink
          href="https://drive.google.com/file/d/1jQTO2mJe727CTsIwBMO8s1YP7LMGH8ER/view?usp=drive_link"
          className="rounded-lg px-3 py-2 hover:bg-slate-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download App
        </MobileNavLink>
      </PopoverPanel> */}
    </Popover>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 py-4 backdrop-blur-sm sm:py-6 md:py-10">
      <Container>
        <nav className="relative z-50 flex items-center justify-between">
          <div className="flex items-center gap-x-4 md:gap-x-12">
            <Link
              href="/"
              aria-label="Home"
              className="flex items-center gap-x-2"
            >
              {/* <BuildingStorefrontIcon className="h-6 w-6 text-blue-600 sm:h-7 sm:w-7 md:h-8 md:w-8" /> */}
              <span className="font-display text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
                Rettel
              </span>
            </Link>
            {/* <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#how-it-works">How It Works</NavLink>
              <NavLink href="#business-benefits">Business Benefits</NavLink>
              <NavLink href="#contact-us">Contact Us</NavLink>
            </div> */}
          </div>
          {/* <div className="flex items-center gap-x-3 sm:gap-x-5 md:gap-x-8">
            <Button
              href="https://drive.google.com/file/d/1jQTO2mJe727CTsIwBMO8s1YP7LMGH8ER/view?usp=drive_link"
              color="blue"
              className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                Download <span className="hidden sm:inline">App</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div> */}
        </nav>
      </Container>
    </header>
  )
}
