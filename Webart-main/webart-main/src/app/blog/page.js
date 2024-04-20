import React from "react";
// component imports
import Link from "next/link.js";
import Layout from "../components/layout.js";
import Testinomial from "../components/testinomial.js";
import FlipCard from "../components/flipCard.js";
import Carousel from "../components/carousel.js";
import ClientCard from "../components/clientCard.js";
import ServicesBanner from "../components/servicesBanner.js";
import HoverCard from "../components/hoverCard.js";
// react icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { IoMdKey } from "react-icons/io";
import BlogTech from "../components/blogTech.js";
import BlogCard from "../components/blogCard.js";

export default function Blog() {
  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
    url('https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529358.jpg?t=st=1710583081~exp=1710586681~hmac=95ff826615a3b9ad2d4f3ac5074566d06ff9a7ea32e10e9b184e2b9647498f42&w=900')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };

  return (
    <main className="about relative">
      <Layout>
        {/* Hero Section  */}
        <section className="">
          <div
            className="abosolute -z-50 m-1 overflow-hidden top-0 h-screen flex items-center justify-center rounded-2xl"
            style={backgroundImg}
          >
            <div className="absolute  m-1 -z-10 bg-black opacity-50 rounded-2xl h-screen w-full"></div>
            <div className=" max-w-6xl m-auto px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="grid grid-cols-2 gap-x-20 gap-y-10  m-auto">
                <div className="col-span-2 flex flex-col gap-5">
                  <div>
                    <h2 className="text-3xl text-white font-semibold tracking-wide font-theme-font">
                      TechBytes
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-6xl text-white font-bold tracking-wide font-theme-font">
                      Insights from Devox Software
                    </h1>
                  </div>
                </div>

                <div>
                  <p className="text-white text-start tracking-wide font-theme-font">
                    Looking for turnkey custom web application development
                    services? We are Devox Software – a leading custom web
                    application development company with a recognized stand on
                    the market and a proven track record of completed projects.
                  </p>
                  <div className="flex justify-start items-center mt-5">
                    <div className="bg-white flex gap-x-3 items-center justify-between px-5 py-2 rounded-2xl delay-250">
                      <span className="text-gray-800 font-bold font-theme-font">
                        Arrage a call with Us
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pages Section  */}
        <section>
          <BlogTech />
        </section>

        {/* Our Services section  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] right-[-125px] text-gray-500">
              Latest Blog
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Check
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Our Latest Blog
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 grid grid-cols-3 gap-x-5 gap-y-20 justify-center items-center">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <button className="px-20 py-3 font-theme-font text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                Explore More
              </button>
            </div>
          </div>
        </section>

        {/* Our Work Section  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-2  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Let's Talk
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Contact Us
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Let's Talk
                </h1>
              </div>
            </div>

            <div className="col-span-2 h-screen grid grid-cols-2 gap-2">
              {/* left content */}
              <div className="h-full relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-100 opacity-0 hover:opacity-80 flex justify-center items-center">
                  <Link
                    href={""}
                    class="text-lg font-semibold flex items-center gap-x-2"
                  >
                    <span className="text-xl">Click Here</span>
                    <span>
                      <FaArrowUpRightFromSquare />
                    </span>
                  </Link>
                </div>
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/philip-oroni-MyY188YX0vU-unsplash.jpg.webp"
                  alt=""
                />
              </div>
              {/* Right content */}
              <div className="bg-theme-bg-dark rounded-2xl overflow-hidden p-10">
                <div className="h-full flex flex-col justify-between">
                  {/* Top heading  */}
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex gap-x-2 items-center">
                      <span className="rounded p-1 bg-gray-800 text-white">
                        <IoMdKey />
                      </span>
                      <span className="text-gray-600 tracking-wide font-theme-font">
                        UNDER NDA
                      </span>
                    </div>
                    <div className="text-gray-600 tracking-wide font-theme-font">
                      SOCIAL MEDIA
                    </div>
                  </div>
                  {/* center content */}
                  <div className="grow">
                    {" "}
                    <h2 className="text-white text-2xl font-semibold text-bold text-start tracking-wide font-theme-font mb-2">
                      Got a Project in Mind? Let’s Talk!
                    </h2>
                    <p className="text-gray-600 text-start tracking-wide font-theme-font mb-2">
                      Share the details of your project – like scope or business
                      challenges. Our team will carefully study them and then
                      we’ll figure out the next move together.
                    </p>
                    <form action="" className="flex flex-col gap-y-5">
                      {/* full name  */}
                      <div>
                        <input
                          placeholder="Your full Name*"
                          className="w-full text-gray-600 outline-none border-0 font-theme-font bg-theme-bg-dark
                          border-b border-gray-600 py-2"
                          type="text"
                          id="customInput"
                        />
                      </div>
                      {/* phone Number  */}
                      <div>
                        <input
                          placeholder="Your Phone number*"
                          className="w-full text-gray-600 outline-none border-0 font-theme-font bg-theme-bg-dark
                          border-b border-gray-600 py-2"
                          type="text"
                          id="customInput"
                        />
                      </div>
                      {/* coperate email */}
                      <div>
                        <input
                          placeholder="Corporate email*"
                          className="w-full text-gray-600 outline-none border-0 font-theme-font bg-theme-bg-dark
                          border-b border-gray-600 py-2"
                          type="text"
                          id="customInput"
                        />
                      </div>
                      {/* about your project  */}
                      <div>
                        <input
                          placeholder="About your Project*"
                          className="w-full text-gray-600 outline-none border-0 font-theme-font bg-theme-bg-dark
                          border-b border-gray-600 py-2"
                          type="text"
                          id="customInput"
                        />
                      </div>
                    </form>
                  </div>
                  {/* button  */}
                  <div className="flex items-center justify-between gap-x-20 mt-5">
                    <div>
                      <p className="text-white text-xs">
                        By sending this form I confirm that I have read and
                        accept the{" "}
                        <span className="underline hover:no-underline text-white">
                          Privacy Policy
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <span className="text-gray-600 text-nowrap font-bold">
                        View Case Study
                      </span>
                      <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                        <HiOutlineArrowLongRight className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies we use  */}
        {/* Our Development Process  */}

        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-0 text-gray-500">
              Technologies
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  We Use
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Technologies
                </h1>
              </div>
            </div>
            {/* Content  */}
            <div className="col-span-2 grid grid-cols-2 gap-x-5 gap-y-10">
              {/* left content */}

              {/* 1 card*/}
              <div className=" h-72 w-auto p-10 flex flex-col items-start justify-between rounded-3xl shadow-xl bg-slate-50">
                <h4 className="mb-4 text-xl font-bold font-theme-font">
                  Back End
                </h4>

                <div>
                  <div className="grid grid-cols-4 gap-x-5 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Nest.png.webp"
                          alt="NestJS"
                        />
                      </div>
                      <div className="font-semibold">NestJS</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Flask_logo-1-1.png.webp"
                          alt="Flask"
                        />
                      </div>
                      <div className="font-semibold">Flask</div>
                    </div>

                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/django-svgrepo-com-1.png.webp"
                          alt="Django"
                        />
                      </div>
                      <div className="font-semibold">Django</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/express-js-icon-1.png.webp"
                          alt="Express.js"
                        />
                      </div>
                      <div className="font-semibold">Express.js</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Microsoft_.NET_logo-1.png.webp"
                          alt=".NET"
                        />
                      </div>
                      <div className="font-semibold">.NET</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/PHP-logo-1.png.webp"
                          alt="PHP"
                        />
                      </div>
                      <div className="font-semibold">PHP</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-5.png.webp"
                          alt="Ruby"
                        />
                      </div>
                      <div className="font-semibold">Ruby</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/spring.png.webp"
                          alt="Java Spring"
                        />
                      </div>
                      <div className="font-semibold">Java Spring</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/python.png.webp"
                          alt="Python"
                        />
                      </div>
                      <div className="font-semibold">Python</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/node-js-1.png.webp"
                          alt="Node.js"
                        />
                      </div>
                      <div className="font-semibold">Node.js</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className=" h-72 w-auto p-10 flex flex-col items-start justify-between rounded-3xl shadow-xl bg-slate-50">
                <h4 className="mb-4 text-xl font-bold font-theme-font">
                  Front End
                </h4>

                <div className="grid grid-cols-4 gap-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Next.png.webp"
                        alt="NestJS "
                      />
                    </div>
                    <div className="font-semibold">NestJS</div>
                  </div>
                  {/* item 2 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-4.png.webp"
                        alt="Flask"
                      />
                    </div>
                    <div className="font-semibold">Svelte</div>
                  </div>
                  {/* item 3 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Vue-js.png.webp"
                        alt="Vue.js"
                      />
                    </div>
                    <div className="font-semibold">Vue.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Angular_full_color_logo-1.png.webp"
                        alt="Angular"
                      />
                    </div>
                    <div className="font-semibold">Angular</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/React-icon-1.png.webp"
                        alt="React.js"
                      />
                    </div>
                    <div className="font-semibold">React.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Progressive_Web_Apps_Logo-1.png.webp"
                        alt="PWA"
                      />
                    </div>
                    <div className="font-semibold">PWA</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Typescript_logo_2020-1.png.webp"
                        alt="TypeScript"
                      />
                    </div>
                    <div className="font-semibold">TypeScript</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                      />
                    </div>
                    <div className="font-semibold">JavaScript </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/CSS3_and_HTML5_logos_and_wordmarks-1.png.webp"
                        alt="HTML/CSS"
                      />
                    </div>
                    <div className="font-semibold">HTML/CSS</div>
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div className=" h-72 w-auto p-10 flex flex-col items-start justify-between rounded-3xl shadow-xl bg-slate-50">
                <h4 className="mb-4 text-xl font-bold font-theme-font">
                  Database Development
                </h4>

                <div className="grid grid-cols-4 gap-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mariadb-1.png.webp"
                        alt="MariaDB "
                      />
                    </div>
                    <div className="font-semibold">MariaDB</div>
                  </div>
                  {/* item 2 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/redis-logo-svgrepo-com-1.png.webp"
                        alt="Redis"
                      />
                    </div>
                    <div className="font-semibold">Redis</div>
                  </div>
                  {/* item 3 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Cassandra.png.webp"
                        alt="Cassandra"
                      />
                    </div>
                    <div>Cassandra</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mongodb-svgrepo-com-1.png.webp"
                        alt="MongoDB"
                      />
                    </div>
                    <div>MongoDB</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/oracle-svgrepo-com-1.png.webp"
                        alt="Oracle DB"
                      />
                    </div>
                    <div>Oracle DB</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Microsoft-SQL-Server-1.png.webp"
                        alt="SQL Server"
                      />
                    </div>
                    <div>SQL Server</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Postgresql_elephant-1.png.webp"
                        alt="PostgreSQL"
                      />
                    </div>
                    <div>PostgreSQL</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mysqlworkbench_93532-1.png.webp"
                      />
                    </div>
                    <div>MySQL</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/elasticsearch-1.png.webp"
                        alt="Elasticsearch"
                      />
                    </div>
                    <div>Elasticsearch</div>
                  </div>
                </div>
              </div>
              {/* item 4 */}
              <div className=" h-72 w-auto p-10 flex flex-col items-start justify-between rounded-3xl shadow-xl bg-slate-50">
                <h4 className="mb-4 text-xl font-bold font-theme-font">
                  DevOps & Cloud
                </h4>

                <div className="grid grid-cols-4 gap-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Next.png.webp"
                        alt="NestJS "
                      />
                    </div>
                    <div className="font-semibold">NestJS</div>
                  </div>
                  {/* item 2 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-4.png.webp"
                        alt="Flask"
                      />
                    </div>
                    <div className="font-semibold">Svelte</div>
                  </div>
                  {/* item 3 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Vue-js.png.webp"
                        alt="Vue.js"
                      />
                    </div>
                    <div>Vue.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Angular_full_color_logo-1.png.webp"
                        alt="Angular"
                      />
                    </div>
                    <div>Angular</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/React-icon-1.png.webp"
                        alt="React.js"
                      />
                    </div>
                    <div>React.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Progressive_Web_Apps_Logo-1.png.webp"
                        alt="PWA"
                      />
                    </div>
                    <div>PWA</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Typescript_logo_2020-1.png.webp"
                        alt="TypeScript"
                      />
                    </div>
                    <div>TypeScript</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                      />
                    </div>
                    <div>JavaScript </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/CSS3_and_HTML5_logos_and_wordmarks-1.png.webp"
                        alt="HTML/CSS"
                      />
                    </div>
                    <div>HTML/CSS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Type of solutions we build  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Web Solutions
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Web Solutions
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Types of Web Solutions We Build
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 h-96">
              <ServicesBanner />
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}
