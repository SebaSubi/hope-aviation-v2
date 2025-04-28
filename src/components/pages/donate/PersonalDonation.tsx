'use client'

import { EnvelopeIcon, PhoneIcon, RocketLaunchIcon, UserPlusIcon } from '@heroicons/react/20/solid'
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

interface PersonalDonationProps {
  people: Person[];
}

export default function PersonalDonation({ people }: PersonalDonationProps) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li
          key={person.id}
          className="col-span-1 flex flex-col divide-y divide-gray-700 rounded-lg bg-gray-800 text-center shadow-sm"
        >
          <div className="flex flex-1 flex-col p-8">
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
              <img 
                alt="" 
                src={person.imageUrl} 
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-sm font-medium text-white">{person.name}</h3>
            <dl className="mt-1 flex grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-300">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-700">
              <div className="flex w-0 flex-1">
                <Link
                  href={`/pilots/${person.id}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-white hover:bg-gray-700"
                >
                  <UserPlusIcon aria-hidden="true" className="size-5 text-gray-400" />
                  View Profile
                </Link>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`${person.donate}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-white hover:bg-gray-700"
                >
                  <RocketLaunchIcon aria-hidden="true" className="size-5 text-gray-400" />
                  Donate
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
