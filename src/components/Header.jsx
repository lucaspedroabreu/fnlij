import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

import Link from 'next/link'
import Logo from './Logo'

const navigation = [
  { name: { 'pt-BR': 'Home', en: 'Home' }, href: '/#' },
  { name: { 'pt-BR': 'Sobre nós', en: 'About Us' }, href: '/#about' },
  { name: { 'pt-BR': 'O que fazemos', en: 'What we do' }, href: '/business' },
  { name: { 'pt-BR': 'Entre em contato', en: 'Contact Us' }, href: '/contact' },
]

export function Header() {
  const { locale } = useRouter()

  return (
    <Popover
      as="header"
      className="flex items-center md:py-6 border-b-2 h-28 bg-slate-100 md:fixed md:w-full md:top-0 z-50"
    >
      <div className="max-w-7xl w-full mx-auto items-center px-4 sm:px-6">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-end self-end w-full"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/#" passHref>
                <a>
                  <span className="sr-only">Menu</span>
                  <div className='w-[120px]'>
                    <Logo />
                  </div>
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-green">
                  <span className="sr-only">Abrir menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {navigation.map((item) => (
              <Link key={item.name.en} href={item.href} passHref>
                <a className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name['pt-BR']}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          {({ close }) => (
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-green">
                    <span className="sr-only">Fechar menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m-15 0l15 15" />
                    </svg>
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <div key={item.name.en} onClick={() => close()}>
                    <Link href={item.href} passHref>
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        {locale === 'pt-BR' ? item.name['pt-BR'] : item.name.en}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
