import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <section 
     id="hero"
     className="flex items-center min-h-[calc(100vh-4rem)] pt-16 pb-20 justify-center px-4 sm:px-6 lg:px-8">
    
     <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600 dark:text-violet-200 trackign-wide mb-4">
          Hi,I'm{" "}
         <span className="text-blue-600 dark:text-pink-400">
          Becks
         </span>
       </h1>
       <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8">
         Cloud Engineer designing scalable, secure a high-performance cloud solutions. 
       </h2>
       <p className="text-base sm:text-lg text-blue-500 dark:text-pink-400 mb-10 max-w-2xl mx-auto md:mx-0">
        I am passionate about learning cloud computing and building secure,scalable system using modern cloud technologies.
       </p>
       <div className="flex gap-4 mt-6">
       <div className="inline-block p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500">
        <Link
         href="/projects"
        className="block px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition duration-300">
        view projects
        </Link>
        </div>
        <div className="inline-block p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500">
        <Link
        href="/contact"
        className="block px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition duration-300">
          Contact Me
        </Link>
        </div>
       </div>
      </div> 
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <div className="relatvie w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
          <div className="w-full h-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
          <span className="text-indigo-400 dark:text-violet-500 font-small">
            Hero image
          </span>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
  }
