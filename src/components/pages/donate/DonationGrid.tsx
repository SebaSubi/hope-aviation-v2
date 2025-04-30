'use client'

import { ArrowRightIcon } from '@heroicons/react/20/solid'
import PersonalDonation from './PersonalDonation'
import Link from 'next/link'

interface Person {
  id: number;
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            <span className="bg-gradient-to-r from-indigo-900 via-orange-500 to-gray-300 bg-clip-text text-transparent animate-gradient">
              Personal Donations
            </span>
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
                href="/allPilots"
                className="inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-4 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-900 hover:text-white hover:border-white border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                See all pilots
                <ArrowRightIcon className="-mr-0.5 h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
