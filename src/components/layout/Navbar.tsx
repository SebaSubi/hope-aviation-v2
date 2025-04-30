'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pilots', href: '/allPilots' },
  { name: 'Projects', href: '/projects' },
  { name: 'Courses', href: '/courses' },
  { name: 'About us', href: '/about' },
  { name: 'Donate', href: '/donate' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        const scrollPosition = window.scrollY
        const heroSection = document.getElementById('hero-section')
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight
          setIsScrolled(scrollPosition > 0)
          
          // Si hemos pasado la sección hero, ocultamos la navbar
          if (scrollPosition > heroHeight) {
            document.querySelector('header')?.classList.add('hidden')
          } else {
            document.querySelector('header')?.classList.remove('hidden')
          }
        }
      } else {
        setIsScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  // Filtrar la navegación para excluir la página actual
  const filteredNavigation = navigation.filter(item => item.href !== pathname)

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHome 
          ? isScrolled 
            ? 'bg-gray-900 py-4' 
            : 'bg-transparent py-8'
          : 'bg-gray-900 py-4'
      }`}
    >
      <nav 
        aria-label="Global" 
        className={`flex items-center justify-between transition-all duration-300 ${
          isHome && !isScrolled ? 'px-20' : 'px-6 lg:px-8'
        }`}
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">HOPE AVIATION</span>
            <img
              alt=""
              src="/HOPE-logo.svg"
              className={`transition-all duration-300 ${
                isHome && !isScrolled ? 'h-12' : 'h-8'
              } w-auto`}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              isHome && !isScrolled ? 'text-white' : 'text-white'
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {filteredNavigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-sm/6 font-semibold transition-colors duration-300 ${
                isHome && !isScrolled 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/login" 
            className={`text-sm/6 font-semibold transition-colors duration-300 ${
              isHome && !isScrolled 
                ? 'text-white hover:text-gray-300' 
                : 'text-white hover:text-gray-300'
            }`}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">HOPE AVIATION</span>
              <img
                alt=""
                src="/Logo.png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {filteredNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
