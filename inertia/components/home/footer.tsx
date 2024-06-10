import { ChevronRight } from 'lucide-react'
import { cn } from '~/lib/utils'
import { buttonVariants } from '../ui/button'

const footerNavs = [
  {
    label: 'Product',
    items: [
      {
        href: '/#faq',
        name: 'FAQ',
      },
      {
        href: 'mailto:contact@birds-audiovisuel.fr',
        name: 'Support',
      },
      {
        href: 'https://discord.com/invite/8Ggzt8xezU',
        name: 'Discord',
      },
    ],
  },
  {
    label: 'Association',
    items: [
      {
        href: '/about',
        name: 'A propos',
      },
      {
        href: '/blog',
        name: 'Blog',
      },
      {
        href: 'birds-audiovisuel.fr/contact',
        name: 'Contact',
      },
    ],
  },
  {
    label: 'Ressources',
    items: [
      {
        href: '/docs',
        name: 'Documentation',
      },
    ],
  },
  {
    label: 'Legal',
    items: [
      {
        href: '/privacy',
        name: 'Privacy Policy',
      },
      {
        href: '/terms',
        name: 'Terms of Service',
      },
    ],
  },
]

const footerSocials = [
  {
    href: 'https://discord.com/invite/8Ggzt8xezU',
    name: 'Discord',
    icon: 'https://img.icons8.com/?size=100&id=65646&format=png&color=000000',
  },
  {
    href: '/',
    name: 'Mail',
    icon: 'https://img.icons8.com/?size=100&id=3AYCSzCO85Qw&format=png&color=000000',
  },
]

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="gap-4 p-4 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/logo.svg" alt="logo" className="h-12 w-12" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Les amicales
              </span>
            </a>
            <div className="max-w-sm">
              <div className="z-10 mt-4 flex w-full flex-col items-start text-left">
                <h1 className="text-3xl font-bold lg:text-2xl">S'inscrire gratuitement</h1>
                <p className="mt-2">
                  Inscrivez-vous gratuitement pour commencer à utiliser notre plateforme.
                </p>
                <a
                  href="/login"
                  className={cn(
                    buttonVariants({
                      size: 'lg',
                      variant: 'default',
                    }),
                    'group mt-4 w-full whitespace-nowrap rounded-[2rem] px-6'
                  )}
                >
                  Commencer maintenant
                  <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group inline-flex cursor-pointer items-center justify-start gap-1 text-gray-400 duration-200 hover:text-gray-600 hover:opacity-90 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        {item.name}
                        <ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
          <div className="flex space-x-5 sm:mt-0 sm:justify-center">
            {footerSocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
              >
                <img className="w-10 h-10" src={social.icon} alt="icon" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Copyright © {new Date().getFullYear()}{' '}
            <a href="/" className="cursor-pointer">
              Birds Audiovisuel
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
