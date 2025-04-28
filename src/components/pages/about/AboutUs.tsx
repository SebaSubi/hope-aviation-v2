"use client";

import React from "react";
import { useState } from "react";

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "General Information"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the form submission logic
    console.log(formData);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <img
          src="https://images.unsplash.com/photo-1517190525944-4edce215bc4a?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Hope Aviation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A pioneering humanitarian project driven by the Universidad Adventista del Plata
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Introduction
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Hope is a pioneering humanitarian project driven by the Universidad Adventista del Plata, whose objective is to prepare and send pilots to isolated communities through support organizations that operate humanitarian aviation projects around the world.
            </p>
          </div>

          {/* Problem Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Problem Description
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Many regions in the world lack access to essential services due to their remote location. Geographic features such as mountains, jungles, and deserts isolate these communities, affecting their access to healthcare, education, and spiritual assistance.
            </p>
          </div>

          {/* Objectives */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Objectives
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">General Objective</h3>
              <p className="text-lg leading-8 text-gray-600">
                To train and send highly qualified pilots and volunteers to remote communities, in order to provide humanitarian assistance and share the message of hope.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">Specific Objectives</h3>
              <ul className="list-disc list-inside text-lg leading-8 text-gray-600 space-y-2">
                <li>Train four missionary pilots in a twelve-month period</li>
                <li>Provide regular air services to isolated communities in Argentina</li>
                <li>Offer preparation classes and their corresponding evaluations</li>
                <li>Provide comprehensive support and education for volunteers</li>
              </ul>
            </div>
          </div>

          {/* Classes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Offered Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Conflict Resolution",
                "First Aid",
                "Patient Transport in Aircraft",
                "Swimming and Water Rescue",
                "Survival",
                "Preaching and Evangelization",
                "English",
                "Basic Mechanics",
                "Airfield Management",
                "Meteorology and Navigation",
                "Argentine and International Regulations",
                "Psychology and Emotional Management",
                "Working with Children",
                "How to Pray in the Mission Field"
              ].map((clase, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg text-gray-900">{clase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                  Subject
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>General Information</option>
                  <option>Class Registration</option>
                  <option>Donations</option>
                  <option>Volunteering</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 