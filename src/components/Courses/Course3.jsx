import React from "react";
import { Link } from "react-router-dom";
import TiltCard from "../TiltCard";
import Faq from "../Faq";

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Component() {
  return (
    <div className="flex flex-col">
      <section className="w-full bg-white">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-500">
            <Link to='/'>Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Python & Django | The Complete Django Web Development Course</span>
          </nav>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Python & Django | The Complete Django Web Development Course
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              This course will teach you <span className="font-bold">Python and Django</span> in a practice-oriented way, using all the latest patterns and best practices you need.<br/>
              <br/>
              You will learn all <span className="font-bold">the key fundamentals</span> as well as advanced concepts and related topics to turn you into a Django developer.<br/>
              <br/>
              This is a comprehensive course because it really covers EVERYTHING you need to know and learn to become a <span className="font-bold">Django engineer!</span>
            </p>
            <div className="flex flex-col md:flex-row items-center md:justify-start gap-4">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md px-8 bg-white text-base font-medium text-black shadow-lg transition-colors hover:bg-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c5ce7] disabled:pointer-events-none disabled:opacity-50"
              >
                Join Now
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-base font-medium text-white shadow-lg transition-colors hover:bg-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c5ce7] disabled:pointer-events-none disabled:opacity-50"
              >
                Download Syllabus
              </a>
            </div>
          </div>
          <img
            src="https://img-b.udemycdn.com/course/750x422/4249002_fc19.jpg"
            width={800}
            height={467}
            alt="Course Hero"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="w-full py-10 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="space-y-4">
            <div className="mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-4">
              <div className="relative p-6 bg-white shadow rounded-lg">
                <h3 className="font-medium text-lg">Course Duration</h3>
                <p className="text-gray-600">17 weeks</p>
              </div>
              <div className="relative p-6 bg-black text-white shadow rounded-lg">
                <h3 className="font-medium text-lg">Difficulty Level</h3>
                <p className="text-gray-600">Beginner</p>
              </div>
              <div className="relative p-6 bg-white shadow rounded-lg">
                <h3 className="font-medium text-lg">Language</h3>
                <p className="text-gray-600">English</p>
              </div>
              <div className="relative p-6 bg-black text-white shadow rounded-lg">
                <h3 className="font-medium text-lg">Format</h3>
                <p className="text-gray-600">Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-black text-lg md:text-4xl pb-5 font-bold">Explore the structure and modules of the course</p>
          <div className="space-y-4">
            <div className="mt-4 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  number: "1",
                  title: "Introduction to Python",
                  description: "Learn the fundamentals of Python, including syntax, data types, and basic programming constructs.",
                  time: "2 weeks",
                },
                {
                  number: "2",
                  title: "Web Development with Django",
                  description: "Dive into the principles of web development using Django and learn how to create web applications.",
                  time: "3 weeks",
                },
                {
                  number: "3",
                  title: "Django Models and Databases",
                  description: "Explore Django models and learn how to interact with databases using Django's ORM.",
                  time: "4 weeks",
                },
                {
                  number: "4",
                  title: "Django Templates and Views",
                  description: "Learn about Django templates and views and how to use them effectively in your web applications.",
                  time: "2 weeks",
                },
                {
                  number: "5",
                  title: "Advanced Django Topics",
                  description: "Explore advanced Django concepts such as authentication, middleware, and deployment.",
                  time: "4 weeks",
                },
                {
                  number: "6",
                  title: "Final Project",
                  description: "Apply your newly acquired skills to build a complete Django application from scratch.",
                  time: "4 weeks",
                },
              ].map((item, index) => (
                <TiltCard
                  key={index}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                  time={item.time}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Course Objectives */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Course Objectives</h2>
              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  "Understand the fundamentals of Python and Django",
                  "Learn to build modern, responsive, and scalable web applications",
                  "Explore advanced Django features and best practices",
                  "Gain hands-on experience through practical projects",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckIcon className="h-6 w-6 text-indigo-600" />
                    <p className="text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You'll Learn */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What You'll Learn</h2>
              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  "Mastering Python syntax and programming constructs",
                  "Applying web development principles using Django",
                  "Implementing Django models and interacting with databases",
                  "Using Django templates and views effectively",
                  "Optimizing Django applications for performance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckIcon className="h-6 w-6 text-indigo-600" />
                    <p className="text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src="https://st5.depositphotos.com/77467056/67007/i/450/depositphotos_670075108-stock-photo-portrait-female-student-college-front.jpg"
                alt="Tutor"
                className="w-[24rem] h-[24rem] mx-auto md:mx-auto rounded-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900">Meet Your Tutor</h2>
              <p className="mt-4 text-gray-700">
                <strong>Dr. Jane Doe</strong> is an experienced web developer and educator with over 10 years of experience in Python and Django. She has helped hundreds of students achieve their goals in web development through engaging and practical courses.
              </p>
              <p className="mt-4 text-gray-700">
                In this course, Dr. Doe will guide you through each step of learning Python and Django, providing you with the knowledge and skills needed to become a proficient web developer.
              </p>
              <p className="mt-4 text-gray-700">
                <strong>Achievements:</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>Published author of 'Mastering Django'</li>
                  <li>Speaker at international tech conferences</li>
                  <li>Founder of Django Developers Community</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 mb-0">
      <Faq />
      </section >
    </div>
  );
}

export default Component;
