import React from 'react'

import Link from '../../../node_modules/next/link'
const Footer = () => {
  return (
    <div className='bg-pink-50'> 
 <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Portfy</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Stackfy —
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Sayed Hasinoor Alam</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target="_blank" href={"https://github.com/Sayed-Hasinoor-Alam"} className="text-black-500 text-center items-center">
     
      </Link>

      <Link target="_blank" href={"https://www.linkedin.com/in/sayed-hasinoor-alam-b1b26a257/"} className="ml-3 text-black-500 text-center items-center">
     
      </Link>
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
