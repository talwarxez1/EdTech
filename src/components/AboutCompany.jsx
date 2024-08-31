import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container lg:mx-[25rem] mx-auto flex flex-col justify-center text-center md:flex-row items-center">
        <div className="w-full md:w-1/2 text-left md:text-left mb-8 md:mb-0">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white py-1 px-3 rounded-full text-sm mb-2">About Us</span>
            <h1 className="text-4xl font-bold mb-4">Welcome to EduStart</h1>
            <p className="text-gray-700 mb-6">
              EduStart is a pioneering startup focused on providing top-notch education through a team of quality educators. We offer a variety of courses designed to help you excel in your career.
            </p>
          </div>
          <div className="flex items-center mb-6">
            <div className="bg-yellow-100 text-yellow-700 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-4a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-700 ml-4 text-lg font-semibold">
              10+ Years of Educational Excellence
            </p>
          </div>
          <p className="text-gray-700 mb-6">
            Our mission is to revolutionize learning by offering engaging and accessible courses that meet the needs of modern learners. Join us and take the next step towards achieving your educational goals.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://www.scnsoft.com/education-industry/elearning-portal/elearning-portals-cover-picture.svg"
            alt="Profile"
            className=" md:mr-0 w-full max-w-md mx-5"
          />
        </div>
      </div>

      <div className="mx-auto mt-20 px-6 md:px-0 bg-gray-100 py-12">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    <div className="w-full md:w-1/2 mb-6 md:mb-0">
      <img src="https://falainacloud.com/wp-content/uploads/2023/03/Privilege-Access-Manager-PAM.png" alt="Education Image" className="lg:w-[40rem] lg:mx-10 h-auto rounded-lg"/>
    </div>
    <div className="w-full md:w-1/2 text-left md:pl-10">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">World's Best Education Site – Computer Engineering</h2>
        <p className="text-gray-700 md:text-sm font-extralight">
          Our Computer Engineering courses are designed to equip you with the latest skills and knowledge in the industry. Learn from top-notch educators and get hands-on experience with real-world projects.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Web and User Interface Design – Development</h2>
        <p className="text-gray-700 md:text-sm font-extralight">
          Master the art of web and user interface design with our comprehensive courses. From fundamental concepts to advanced techniques, our curriculum covers everything you need to create stunning, user-friendly websites and applications.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Interaction Design – Animation</h2>
        <p className="text-gray-700 md:text-sm font-extralight">
          Dive into the world of interaction design and animation. Learn how to create engaging user experiences and bring your designs to life with our expert-led courses.
        </p>
      </div>
    </div>
  </div>
</div>

  
    </div>
  );
};

export default HeroSection;
