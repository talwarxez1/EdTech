import React from "react";
import TiltCard from "../TiltCard";
import Faq from "../Faq";
import { Link } from "react-router-dom";


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
    <div className="flex flex-col ">
      
      <section className="w-full  bg-white">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-500">
            <Link to='/'>Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Mastering React: A Comprehensive Course</span>
          </nav>
        </div>
      </section>

      <section className="w-full pb-20 pt-5 bg-white">
        <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Mastering React: A Comprehensive Course
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
            This course will teach you <span className="font-bold">React.js</span> in a practice-oriented way, using all the latest patterns and best practices you need.<br/> 
            <br/> 
            You will learn all <span className="font-bold">the key fundamentals</span> as well as advanced concepts and related topics to turn you into a React.js developer.<br/>
            <br/> 
This is a huge course because it really covers EVERYTHING you need to know and learn to become a <span className="font-bold">React.js developer!</span>
            </p>
            <div className="flex flex-col md:flex-row items-center md:justify-start gap-4">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md  px-8 bg-white text-base font-medium text-black shadow-lg transition-colors hover:bg-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c5ce7] disabled:pointer-events-none disabled:opacity-50"
              >
                Join Now
              </a>
              <a
                href="#"
                className=" inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-base font-medium text-white shadow-lg transition-colors hover:bg-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c5ce7] disabled:pointer-events-none disabled:opacity-50"
              >
                Download Syllabus
              </a>
            </div>
          </div>
          <img
            src="https://www.creativeitinstitute.com/images/course/course_1674371266.jpg"
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
                  title: "Introduction to React",
                  description: "Learn the fundamentals of React, including components, state, and props.",
                  time: "2 weeks",
                },
                {
                  number: "2",
                  title: "React Hooks",
                  description: "Dive into the powerful React Hooks API and learn how to use them effectively.",
                  time: "3 weeks",
                },
                {
                  number: "3",
                  title: "State Management with Redux",
                  description: "Explore the popular state management library Redux and learn how to integrate it into your React applications.",
                  time: "4 weeks",
                },
                {
                  number: "4",
                  title: "Routing and Navigation",
                  description: "Learn how to implement client-side routing and navigation in your React applications.",
                  time: "2 weeks",
                },
                {
                  number: "5",
                  title: "Advanced React Concepts",
                  description: "Explore advanced React concepts such as performance optimization, context API, and server-side rendering.",
                  time: "4 weeks",
                },
                {
                  number: "6",
                  title: "Final Project",
                  description: "Apply your newly acquired skills to build a complete React application from scratch.",
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
            "Understand the fundamentals of React and its core concepts",
            "Learn to build modern, responsive, and scalable web applications",
            "Explore advanced React features and best practices",
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
            "Mastering React components, state, and props",
            "Leveraging React Hooks for efficient state management",
            "Implementing client-side routing and navigation",
            "Integrating state management with Redux",
            "Optimizing React applications for performance",
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
          <strong>Dr. Jane Doe</strong> is a seasoned React web developer and educator with over 10 years of experience in web development. She has successfully guided numerous students in mastering React and front-end development through hands-on and practical courses.
        </p>
        <p className="mt-4 text-gray-700">
          In this course, Dr. Doe will take you through every step of learning React, from foundational concepts to advanced techniques. You'll gain the skills needed to build dynamic and interactive web applications.
        </p>
        <p className="mt-4 text-gray-700">
          <strong>Achievements:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Published author of 'React Essentials'</li>
            <li>Speaker at major web development conferences</li>
            <li>Contributor to popular React open-source projects</li>
            <li>Founder of the React Developers Network</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</section>

<section className=" bg-gray-100">
<Faq/>
</section>
     
    </div>

  );
}

export default Component;
