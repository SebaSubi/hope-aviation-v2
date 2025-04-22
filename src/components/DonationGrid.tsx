'use client'

import { ArrowRightIcon } from '@heroicons/react/20/solid'
import PersonalDonation from './PersonalDonation'
import Link from 'next/link'

interface Person {
  name: string;
  title: string;
  role: string;
  about: string;
  donate: string;
  imageUrl: string;
}

interface DonationGridProps {
  people: Person[];
}

export default function DonationGrid({ people }: DonationGridProps) {
  // Tomamos solo los primeros 6 elementos
  const displayedPeople = people.slice(0, 6);

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Personal donations
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Meet our pilots and support their mission dreams.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <PersonalDonation people={displayedPeople} />
          
          {people.length > 6 && (
            <div className="mt-10 flex justify-center">
              <Link
                href="/todos-los-pilotos"
                className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ver todos los pilotos
                <ArrowRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
