import React from 'react';
import Image from '../../../node_modules/next/image';
import Link from '../../../node_modules/next/link';
const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image className="object-cover object-center rounded mx-auto w-[300px] h-[350px]" alt="hero "
        src={require("../../../public/assets/picture/about.jpeg")}
       width={200}
       height={200}
       />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Me
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-5 leading-relaxed">
        I am pursuing B.Tech CSE Degree from College Of Engineering & Management,Kolaghat.
        Currently I am in 4th Year in My degree,I love to learn about new technologies and a passionate coding Guy,
        I have also doing a training course on Machine Learning from NIIT.
        My Hobby is playing PC games on Computer,Drawing.
      </p>
      <div className="flex justify-center">
        <a href={"/assets/cv/Hasinoor_resume.docx"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default About;
