
import Link from "../../../node_modules/next/link";
import React from "react";
import Image from "../../../node_modules/next/image";
const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/project/ecom.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                   Ecommerce Application 
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Ecommerce site
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                   This is a project which is a beta version of a MERN Ecommerce application
                   just frontend part is done and release in online Web.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://ecommreactfrontend.netlify.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/project/bmi.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    BMI Calculator
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    BMI
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I've created for those who wants to calculate
                    their bmi level by putting their hieght & weight values.
                    this project is build with react and tailwind css .
                  </p>
                  <Link
                    target="_blank"
                    href={"https://bmireactsayed.netlify.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/project/port.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Portfolio Project Forking
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Portfolio
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I've forked from github and modify it.
                    I have created my portfolio using this fork & it is open source
                    contribution in github i have learnt about the chakra ui tool by modifying it in my own 
                    way.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://sayeddev.netlify.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

      