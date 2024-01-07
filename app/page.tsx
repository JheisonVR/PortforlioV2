import Image from "next/image";
import CarouselHome from "./components/CarouselHome";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center p-10 bg-gradient-to-t from-emerald-100 to-[#007670]  ">
      <div className="h-screen grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 xl:grid-cols-12 grid-flow-row-dense w-5/6 sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-mono gap-2  ">
        <div className="flex w-full sm:col-span-full md:col-span-full items-center justify-center mb-5 ">
          <h1 className="text-slate-100 text-center">
            Jheyson David Vargas Rayo
          </h1>
        </div>
        {/* Image Block */}
        <div className="sm:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-5 xl:col-start-1 xl:col-end-6 row-start-2 row-end-6 rounded-full overflow-hidden inline-block bg- [#007670] mx-2 my-1">
          <CarouselHome />
        </div>
        {/* Text Block */}
        <div className="flex flex-col justify-center sm:col-span-full row-start-6 mt-4">
          <h2 className="text-slate-100 text-center">FullStack Web Developer</h2>
          <div className="flex justify-center space-x-4 row-start-7 col-span-full">
            <a
              href="https://www.linkedin.com/in/jheison-david-vargas-rayo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.225 0h-20.45c-.983 0-1.774.792-1.774 1.775v20.45c0 .983.792 1.775 1.775 1.775h20.45c.983 0 1.775-.792 1.775-1.775v-20.45c0-.983-.792-1.775-1.775-1.775zm-13.35 20.704h-2.871v-11.92h2.871v11.92zm-1.435-13.652c-.92 0-1.671-.754-1.671-1.677 0-.922.751-1.676 1.671-1.676.92 0 1.671.754 1.671 1.676 0 .923-.751 1.677-1.671 1.677zm13.35 13.652h-2.87v-6.441c0-1.564-.031-3.574-2.17-3.574-2.172 0-2.504 1.7-2.504 3.461v6.554h-2.871v-11.92h2.757v1.63h.039c.384-.724 1.321-1.488 2.717-1.488 2.901 0 3.432 1.91 3.432 4.398v7.38z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/JheisonVR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6 .113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.08-.729.08-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495 1 .103-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.6-.015 2.885-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
          </div>
        </div>
        {/* Buttons */}
        <div>
          <div className="flex sm:col-start-3 sm:row-start-4 sm:h-20 col-span-1 text-base ">
            <button className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 transition duration-1000   rounded-full">
              Projects
            </button>
          </div>
          <div className="flex sm:col-start-4 sm:row-start-4 sm:h-20 col-span-1 transition duration-1000 text-base">
            <button className="bg-green-600 hover:bg-green-800 w-full transition duration-1000  text-white font-bold py-2 px-4 rounded-full">
              Resume
            </button>
          </div>
          <div className="flex  sm:col-start-3 row-start-5 sm:h-20 col-span-2 hover:col-span-1 transition duration-1000 text-base">
            <button className="bg-green-700 hover:bg-green-900 w-full transition duration-1000  text-white font-bold py-2 px-4 rounded-full">
              Contact
            </button>
          </div>
        </div>
        {/* Text List */}
        <div className="sm:col-start-3 sm:row-start-2 sm:row-span-2 col-span-2  text-base font-mono text-slate-100 ">
          <ul>
            <li>
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Frontend Developer
            </li>
            <li>
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Backend Developer
            </li>
            <li>
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Salesforce Developer
            </li>
            <li>
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Salesforce Administrator
            </li>
            <li>
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Public Administrator
            </li>
          </ul>
        </div>
      </div>

    </main>
  );
}
