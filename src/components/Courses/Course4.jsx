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
            <span className="font-medium">Machine Learning & Deep Learning | The Complete Python & R Course</span>
          </nav>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Machine Learning & Deep Learning | The Complete Python & R Course
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              This course will teach you <span className="font-bold">Machine Learning and Deep Learning</span> using both Python and R, incorporating all the latest techniques and best practices.<br/>
              <br/>
              You will gain insights into <span className="font-bold">data preprocessing, model building,</span> and <span className="font-bold">evaluation techniques</span> necessary for developing sophisticated ML and DL models.<br/>
              <br/>
              This comprehensive course covers everything from foundational concepts to advanced techniques, ensuring you become a <span className="font-bold">skilled data scientist!</span>
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
            src="https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg"
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
                <p className="text-gray-600">12 weeks</p>
              </div>
              <div className="relative p-6 bg-black text-white shadow rounded-lg">
                <h3 className="font-medium text-lg">Difficulty Level</h3>
                <p className="text-gray-600">Intermediate to Advanced</p>
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
                  title: "Introduction to Machine Learning",
                  description: "Learn the basics of machine learning, including supervised and unsupervised learning techniques.",
                  time: "2 weeks",
                },
                {
                  number: "2",
                  title: "Data Preprocessing",
                  description: "Explore techniques for cleaning, transforming, and preparing data for machine learning models.",
                  time: "2 weeks",
                },
                {
                  number: "3",
                  title: "Deep Learning Fundamentals",
                  description: "Dive into deep learning concepts, including neural networks, activation functions, and optimization algorithms.",
                  time: "3 weeks",
                },
                {
                  number: "4",
                  title: "Building ML Models with Python",
                  description: "Hands-on experience in building machine learning models using Python libraries like scikit-learn and TensorFlow.",
                  time: "2 weeks",
                },
                {
                  number: "5",
                  title: "Deep Learning with R",
                  description: "Learn how to implement deep learning models using R and libraries like Keras and TensorFlow.",
                  time: "3 weeks",
                },
                {
                  number: "6",
                  title: "Final Project",
                  description: "Apply your skills to develop a comprehensive machine learning and deep learning project from scratch.",
                  time: "3 weeks",
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
                  "Understand the fundamentals of machine learning and deep learning",
                  "Learn to preprocess and prepare data for analysis",
                  "Build and evaluate machine learning models using Python and R",
                  "Apply deep learning techniques to solve complex problems",
                  "Gain practical experience through hands-on projects",
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
                  "Core concepts of machine learning and deep learning",
                  "Data preprocessing and feature engineering techniques",
                  "Building and tuning machine learning models",
                  "Deep learning architectures and their applications",
                  "Project development and implementation",
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
          alt="Teacher"
          className="w-[24rem] h-[24rem] mx-auto md:mx-auto rounded-full object-cover"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900">Meet Your Instructor</h2>
        <p className="mt-4 text-gray-700">
          <strong>Dr. Alex Smith</strong> is a renowned expert in machine learning and artificial intelligence with over 15 years of experience. Dr. Smith has a strong academic background and has worked extensively in both industry and academia, making significant contributions to the field of AI.
        </p>
        <p className="mt-4 text-gray-700">
          In this course, Dr. Smith will provide in-depth insights into machine learning and deep learning techniques, guiding you through the complexities of building and deploying sophisticated models.
        </p>
        <p className="mt-4 text-gray-700">
          <strong>Achievements:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Author of 'Advanced Machine Learning Techniques'</li>
            <li>Keynote speaker at major AI conferences</li>
            <li>Recipient of the AI Research Excellence Award</li>
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
