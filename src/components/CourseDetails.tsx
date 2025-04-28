"use client";

import React from "react";
import Link from "next/link";
import { courses } from "./CoursesList";

interface CourseDetailsProps {
  courseId: string;
}

export default function CourseDetails({ courseId }: CourseDetailsProps) {
  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Course not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <img
          src={course.imageUrl}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {course.title}
          </h1>
          <div className="mt-6 flex items-center justify-center gap-x-4">
            <p className="text-lg leading-8 text-gray-300">
              {course.duration} • {course.level}
            </p>
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              {course.price}
            </span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="prose prose-lg prose-indigo mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Course Description
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              {course.description}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16 mb-8">
              Curriculum
            </h2>
            <ul className="list-disc list-inside text-lg leading-8 text-gray-600 space-y-2">
              {course.curriculum.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="mt-16 flex gap-4">
              <Link
                href="/courses"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Back to Courses
              </Link>
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 