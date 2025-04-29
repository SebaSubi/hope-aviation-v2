'use client'

import { useState } from 'react'

interface StudentProfile {
  name: string
  email: string
  role: string
  joinDate: string
}

export default function StudentProfile() {
  const [profile, setProfile] = useState<StudentProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
    joinDate: 'January 15, 2024',
  })

  const [isEditingPassword, setIsEditingPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement password change logic
    console.log('Changing password...')
    setIsEditingPassword(false)
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="mt-2 text-gray-600">
          Manage your account information and settings
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Personal Information */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-900">
            Personal Information
          </h2>
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1 text-gray-900">{profile.name}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 text-gray-900">{profile.email}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <div className="mt-1 text-gray-900">{profile.role}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Member Since
              </label>
              <div className="mt-1 text-gray-900">{profile.joinDate}</div>
            </div>
          </div>
        </div>

        {/* Password Change */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-900">
            Change Password
          </h2>
          {!isEditingPassword ? (
            <div className="mt-6">
              <button
                onClick={() => setIsEditingPassword(true)}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Change Password
              </button>
            </div>
          ) : (
            <form onSubmit={handlePasswordChange} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingPassword(false)}
                  className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
} 