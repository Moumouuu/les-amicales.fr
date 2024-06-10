import { AnimatePresence, motion } from 'framer-motion'
import { AlignJustify, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '~/lib/utils'
import { buttonVariants } from '../ui/button'

const menuItem = [
  {
    id: 1,
    label: 'Défis',
    href: 'https://amicup.github.io/documentation/challenge.html',
  },
  {
    id: 2,
    label: 'Inscription',
    href: 'https://amicales-rsk.vlamynck.fr/planning/',
  },
  {
    id: 3,
    label: 'Actualités',
    href: 'https://amicales-rsk.vlamynck.fr/Actualit%C3%A9/',
  },
  {
    id: 4,
    label: 'Contact',
    href: 'https://birds-audiovisuel.fr/contact',
  },
]

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  }

  const mobileLinkVar = {
    initial: {
      y: '-20px',
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)

  useEffect(() => {
    const html = document.querySelector('html')
    if (html) html.classList.toggle('overflow-hidden', hamburgerMenuIsOpen)
  }, [hamburgerMenuIsOpen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false)
    window.addEventListener('orientationchange', closeHamburgerNavigation)
    window.addEventListener('resize', closeHamburgerNavigation)

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerNavigation)
      window.removeEventListener('resize', closeHamburgerNavigation)
    }
  }, [setHamburgerMenuIsOpen])

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <a className="text-md flex items-center" href="/">
          </a>

          <div className="ml-auto flex h-full items-center">
            <a className="mr-6 text-sm" href="/signin">
              Log in
            </a>
            <a
              className={cn(buttonVariants({ variant: 'secondary' }), 'mr-6 text-sm')}
              href="/signup"
            >
              Sign up
            </a>
          </div>
          <button
            className="ml-6 md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            {hamburgerMenuIsOpen ? <XIcon color="black"/> : <AlignJustify color="black"/>}
          </button>
        </div>
      </header>
      <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobilenavbarVariant}
          animate={hamburgerMenuIsOpen ? 'animate' : 'exit'}
          className={cn(
            `fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px] `,
            {
              'pointer-events-none': !hamburgerMenuIsOpen,
            }
          )}
        >
          <div className="container flex h-[3.5rem] items-center justify-between">
            <a className="text-md flex items-center" href="/">
              
            </a>

            <button
              className="ml-6 md:hidden"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Menu</span>
              {hamburgerMenuIsOpen ? <XIcon color="black"/> : <AlignJustify color="black" />}
            </button>
          </div>
          <motion.ul
            className={`flex flex-col md:flex-row md:items-center uppercase md:normal-case ease-in`}
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? 'open' : 'exit'}
          >
            {menuItem.map((item) => (
              <motion.li
                variants={mobileLinkVar}
                key={item.id}
                className="border-grey-dark pl-6 py-0.5 border-b md:border-none"
              >
                <a
                  className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${hamburgerMenuIsOpen ? '[&_a]:translate-y-0' : ''
                    }`}
                  href={item.href}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </>
  )
}
