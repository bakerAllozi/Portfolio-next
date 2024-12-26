"use client";
import { useState } from "react";
import { Card, CardHeader, Image, Button } from "@nextui-org/react";

export default function Gy() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayContent, setOverlayContent] = useState("");

  const handleCardClick = (content) => {
    setOverlayContent(content);
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setOverlayContent("");
  };
  const contents = (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        How to Successfully Set Up My Project
      </h1>
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">1. Large Project</h2>
          <p className="mb-2">Using Vite:</p>
          <ul className="list-disc list-inside">
            <li>
              Ideal for performance in large projects and rapid development.
            </li>
            <li>
              Install Vite: <code>npm create vite@latest</code>
            </li>
          </ul>
          <p>
            Why Hire Baker Allozi: I have extensive experience in setting up
            large-scale projects efficiently using tools like Vite.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">2. Small Project</h2>
          <p className="mb-2">Using Create React App:</p>
          <ul className="list-disc list-inside">
            <li>Suitable for small to medium projects.</li>
            <li>
              Install Create React App: <code>npx create-react-app my-app</code>
            </li>
          </ul>
          <p>
            Why Hire Baker Allozi: I excel in handling projects of various
            sizes, ensuring smooth development from start to finish.
          </p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            3. Download Required Libraries
          </h2>
          <p>Download libraries as needed:</p>
          <ul className="list-disc list-inside">
            <li>
              Depending on the required features, download appropriate libraries
              such as React Router, Axios, Tailwind CSS, etc.
            </li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">4. Set Up Strict Mode</h2>
          <p>Enable Strict Mode in React:</p>
          <ul className="list-disc list-inside">
            <li>Ensures errors are caught during development.</li>
            <li>
              Add <code>StrictMode</code>:
            </li>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-scroll">{`import React from 'react'; import ReactDOM from 'react-dom'; import App from './App'; import { StrictMode } from 'react'; ReactDOM.render( <StrictMode> <App /> </StrictMode>, document.getElementById('root'));`}</pre>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">5. State Management</h2>
          <p>
            Choose state management based on project size and team capability:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Redux</strong>: Suitable for large and complex projects.
            </li>
            <li>
              <strong>Context API</strong>: Suitable for small to medium
              projects.
            </li>
          </ul>
          <p>
            Why Hire Baker Allozi: I am proficient in state management tools
            like Redux and Context API, ensuring optimal performance for your
            project.
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">6. UX/UI Design</h2>
          <p>Bring in UX/UI specialists:</p>
          <ul className="list-disc list-inside">
            <li>Discuss project and required features.</li>
            <li>Work on UI/UX design tailored to project needs.</li>
          </ul>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">7. Using Next.js</h2>
          <p>Start a Next.js project:</p>
          <ul className="list-disc list-inside">
            <li>
              Install Next.js: <code>npx create-next-app</code>
            </li>
            <li>Identify static and dynamic pages.</li>
            <li>Organize files and folders systematically.</li>
          </ul>
          <p>
            Why Hire Baker Allozi: I can create a fully functional and secure
            SaaS service, ensuring robust middleware for security and
            compliance.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">8. Development Tools</h2>
          <p>Utilizing essential development tools during work:</p>
          <ul className="list-disc list-inside">
            <li>React Developer Tools</li>
            <li>Redux DevTools</li>
            <li>React Query Devtools</li>
          </ul>
          <p>
            Why Hire Baker Allozi: My proficiency with these tools ensures
            effective debugging and state management, leading to a smoother
            development process.
          </p>
        </div>
        <div className="bg-teal-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            9. Animation Libraries & UI Frameworks
          </h2>
          <p>My proficiency with animation libraries and UI frameworks:</p>
          <ul className="list-disc list-inside">
            <li>
              Using various animation libraries with React and Next.js to speed
              up the build process.
            </li>
            <li>Experienced in Material UI, Chakra UI, and NextUI.</li>
          </ul>
          <p>
            Why Hire Baker Allozi: I can integrate advanced animations and
            responsive UI frameworks to deliver a seamless user experience.
          </p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            10. Custom Hooks & Reusable Components
          </h2>
          <p>Improving work efficiency and scalability:</p>
          <ul className="list-disc list-inside">
            <li>Building custom hooks to streamline complex logic.</li>
            <li>
              Creating reusable components for consistent UI and faster
              development.
            </li>
          </ul>
          <p>
            Why Hire Baker Allozi: My ability to create custom hooks and
            meticulously crafted reusable components ensures efficient and
            scalable project development.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-indigo-900 to-gray-900 py-20 px-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-center mb-10 mt-16 sm:mt-10  border-purple-500 pb-4">
        My Project Management Experience
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <RCard
          text1="Project Setup"
          text2="How to Successfully Set Up Your Project"
          img="https://nextui.org/images/card-example-4.jpeg"
          style="w-full h-[350px]"
          onClick={handleCardClick}
        >
          {contents}
        </RCard>

        <RCard
          text1="Task Distribution"
          text2="How to Distribute Tasks to the Team"
          img="https://nextui.org/images/card-example-3.jpeg"
          style="w-full h-[350px]"
          onClick={handleCardClick}
        >
          {contents}
        </RCard>

        <RCard
          text1="Progress Monitoring"
          text2="Monitoring Project Progress"
          img="https://nextui.org/images/card-example-2.jpeg"
          style="w-full h-[350px]"
          onClick={handleCardClick}
        >
          {contents}
        </RCard>
      </div>
      {overlayVisible && (
        <div className="fixed inset-0 overflow-x-hidden bg-black text-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className=" p-8 rounded-lg shadow-lg w-[100vw] overflow-x-hidden h-full overflow-y-scroll mx-auto animate-slide-in">
            {overlayContent}
            <Button
              auto
              flat
              color="error"
              onClick={closeOverlay}
              className="mt-4  absolute right-1 top-0  text-white text-[20px] hover:text-[30px]"
            >
              X
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

const RCard = ({ text1, text2, img, style, onClick, children }) => {
  return (
    <div
      className={`${style} h-[350px] relative transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer rounded-xl overflow-hidden`}
      onClick={() => onClick(children)}
    >
      <Card className="h-full bg-gradient-to-br from-purple-700 via-indigo-800 to-black rounded-xl shadow-lg group relative">
        {/* محتوى العنوان */}
        <CardHeader className="absolute z-10 top-4 left-4 flex flex-col items-start opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm text-purple-200 uppercase font-bold tracking-wider">
            {text1}
          </p>
          <h4 className="text-white font-semibold text-lg mt-2">{text2}</h4>
        </CardHeader>

        {/* الصورة الخلفية */}
        <Image
          removeWrapper
          alt="Card background"
          src={img}
          className="z-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
        />

        {/* تظليل على الخلفية */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

        {/* تأثير الإطار عند المرور */}
        <div className="absolute inset-0 border-2 border-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </Card>
    </div>
  );
};
