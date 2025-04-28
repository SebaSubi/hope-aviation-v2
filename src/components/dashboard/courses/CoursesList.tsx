"use client";

import React from "react";
import Link from "next/link";

export const courses = [
  {
    id: 1,
    title: "Humanitarian Aviation Training Program",
    description: "A comprehensive training program designed to prepare volunteers for humanitarian aviation projects. This course covers essential skills and knowledge needed to serve in remote areas using aircraft.",
    duration: "12 months",
    level: "Beginner to Intermediate",
    price: "Free",
    imageUrl: "https://images.unsplash.com/photo-1517190525944-4edce215bc4a?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    curriculum: [
      "Conflict Resolution",
      "First Aid",
      "Patient Transport in Aircraft",
      "Swimming and Water Rescue",
      "Survival Skills",
      "Preaching and Evangelization",
      "English Language",
      "Basic Aircraft Mechanics",
      "Airfield Management",
      "Meteorology and Navigation",
      "Argentine and International Regulations",
      "Psychology and Emotional Management",
      "Working with Children",
      "Spiritual Life in the Mission Field"
    ]
  }
];

export default function CoursesList() {
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
            Our Courses
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Training programs designed to prepare you for humanitarian aviation service
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={course.imageUrl}
                    alt={course.title}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600">
                        {course.duration} • {course.level}
                      </p>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        {course.price}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {course.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {course.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/courses/${course.id}`}
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View Course Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 