import { Typewriter } from "react-simple-typewriter";
import passport1 from "../assets/passport1.png";
import passport2 from "../assets/pas.png";
import passport3 from "../assets/passport2.png";
import passport4 from "../assets/passport3.png";
import blog1 from "../assets/blog.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const Main = ({ visas }) => {
  return (
    <main className="dark:bg-secondary  md:px-6">
      {/* Latest visas section */}
      <section className="py-10 md:py-16 xl:py-20 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary dark:text-white font-bold text-center">
          Latest visas
        </h1>
        <p className="text-sm md:text-base text-secondary dark:text-gray-300 font-normal text-center max-w-xl mx-auto pt-2">
          Explore the most recent visa updates and application processes to stay
          informed and prepared for your travels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 mt-10 px-2 ">
          {visas.map((visa, index) => (
            <div key={index} className="p-4 border rounded-lg w-full">
              <img
                src={visa?.photo}
                alt="visa"
                className="w-24 lg:w-32 h-16 lg:h-20  border"
              />
              <h4 className="mt-2  text-secondary dark:text-white">
                <span className="font-semibold text-lg">Countery :</span>{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {visa?.name}
                </span>
              </h4>
              <h4 className="text-secondary dark:text-white">
                <span className="font-semibold text-lg">Visa type :</span>{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {visa?.visaType}
                </span>
              </h4>
              <h4 className="text-secondary dark:text-white">
                <span className="font-semibold text-lg">Processing time :</span>{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {visa?.processingTime}
                </span>
              </h4>
              <h4 className="text-secondary dark:text-white">
                <span className="font-semibold text-lg">Fee :</span>{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  ${visa?.fee}
                </span>
              </h4>
              <h4 className="text-secondary dark:text-white">
                <span className="font-semibold text-lg">Validity :</span>{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {visa?.validity}
                </span>
              </h4>
              <h4 className="text-secondary dark:text-white">
                <span className="font-semibold text-lg">
                  Application method :
                </span>{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {visa?.applicationMethod}
                </span>
              </h4>
              <button className="bg-primary py-2 px-3 rounded-md mt-4 text-white font-medium">
                See Details
              </button>
            </div>
          ))}
        </div>
        <button className="bg-red-900 py-2 px-4 rounded-md mt-4 ml-2 text-white font-medium">
          See all visas
        </button>
      </section>
      {/* Work Process */}
      <section className="pb-10 md:pb-16 xl:pb-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary dark:text-white font-bold text-center">
          Work Process
        </h1>
        <p className="text-sm md:text-base text-center mx-auto font-normal text-secondary dark:text-gray-300 max-w-xl pt-2">
          Our Streamlined{" "}
          <span className="font-bold text-primary">
            <Typewriter
              words={[
                "Initial Consultant",
                "Documentation & Eligibility Check",
                "Application Submission",
                "Follow up & Approval",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-8 pt-16 px-2">
          <div className="flex flex-col items-center justify-end">
            <div className="p-4 rounded-full shadow-md w-fit  bg-[#ff7729]">
              <img className="w-10" src={passport1} alt="passport icon" />
            </div>
            <div className="p-3 rounded-md shadow-md text-center dark:bg-gray-800 mt-3 ">
              <h1 className="text-lg font-semibold text-secondary dark:text-white">
                Initial Consultant
              </h1>
              <p className=" text-sm text-center mx-auto font-normal text-secondary dark:text-gray-300 max-w-xl pt-2">
                Receive personalized advice and support from our Initial
                Consultant to kickstart your visa application journey with
                confidence.Get expert guidance and tailored solutions from our
                Initial Consultant, ensuring a smooth and successful start to
                your immigration process.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end">
            <div className="p-4 rounded-full shadow-md w-fit  bg-[#ff7729]">
              <img className="w-10" src={passport2} alt="passport icon" />
            </div>
            <div className="p-3 rounded-md shadow-md text-center dark:bg-gray-800 mt-3 ">
              <h1 className="text-lg font-semibold text-secondary dark:text-white">
                Documentation & Eligibility Check
              </h1>
              <p className="text-sm  text-center mx-auto font-normal text-secondary dark:text-gray-300 max-w-xl pt-2">
                Ensure your visa application is complete with our thorough
                Documentation & Eligibility Check, providing you with peace of
                mind and increased chances of approval.Get comprehensive support
                with our Documentation & Eligibility Check to verify your
                documents .
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end">
            <div className="p-4 rounded-full shadow-md w-fit  bg-[#ff7729]">
              <img className="w-10" src={passport3} alt="passport icon" />
            </div>
            <div className="p-3 rounded-md shadow-md text-center dark:bg-gray-800 mt-3 ">
              <h1 className="text-lg font-semibold text-secondary dark:text-white">
                Application Submission
              </h1>
              <p className=" text-sm text-center mx-auto font-normal text-secondary dark:text-gray-300 max-w-xl pt-2">
                Submit your visa application confidently with our expert
                guidance, ensuring all documents are accurately completed and
                timely filed.Streamline your application submission process with
                our professional support, maximizing your chances of visa
                approval
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end">
            <div className="p-4 rounded-full shadow-md w-fit  bg-[#ff7729]">
              <img className="w-10" src={passport4} alt="passport icon" />
            </div>
            <div className="p-3 rounded-md shadow-md text-center dark:bg-gray-800 mt-3 ">
              <h1 className="text-lg font-semibold text-secondary dark:text-white">
                Follow up & Approval
              </h1>
              <p className="text-sm  text-center mx-auto font-normal text-secondary dark:text-gray-300 max-w-xl pt-2">
                Stay informed throughout your visa process with our diligent
                follow-up services, ensuring timely updates and smooth progress
                toward approval.Achieve your visa goals with our comprehensive
                follow-up and approval support, guiding you through each step
                until your visa is successfully granted
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Latest blog & news */}
      <section className="pb-10 md:pb-16 xl:pb-20 px-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <p className="text-sm md:text-base text-secondary dark:text-gray-300 font-normal   pt-2">
              Latest News & Blogs
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary dark:text-white font-bold max-w-lg">
              Discover Our Latest News And Expert Blogs
            </h1>
          </div>
          <button className="bg-primary py-2 px-3 rounded-md mt-4 text-white font-medium">
            View all
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 xl:gap-8">
          <div className=" row-span-2 bg-base-100  shadow-xl rounded-lg">
            <div>
              <img
                className="rounded-t-md w-full h-[100px] md:h-[400px] object-cover"
                src={blog1}
                alt="blog image"
              />
            </div>
            <div className="p-5">
              <h2 className="card-title">Global Perspectives</h2>
              <p className="text-sm   mx-auto font-normal text-secondary dark:text-gray-300  py-2">
                Gain insights into diverse cultures and international trends
                with our Global Perspectives, enriching your understanding of
                the world
              </p>
              <div className="card-actions py-2">
                <div className=" text-xs rounded-full bg-primary/30 dark:bg-primary text-thrid dark:text-white font-medium px-3  py-2">
                  admin
                </div>
                <div className=" text-xs rounded-full bg-primary/30 dark:bg-primary text-thrid dark:text-white font-medium px-3 py-2">
                  July 24, 2024
                </div>
                <div className=" text-xs rounded-full bg-primary/30 dark:bg-primary text-thrid dark:text-white font-medium px-3 py-2">
                  Travel
                </div>
              </div>
            </div>
          </div>
          <div className=" row-span-1 bg-base-100  shadow-xl rounded-lg">
            <div>
              <img
                className="rounded-t-md w-full h-[100px] object-cover"
                src={blog2}
                alt="blog image"
              />
            </div>
            <div className="p-5">
              <h2 className="card-title">Destination Guides</h2>
              <p className="text-sm   mx-auto font-normal text-secondary dark:text-gray-300  py-2">
                Unlock expert travel tips and local insights with our
                Destination Guides, ensuring memorable and well-informed
                adventures.
              </p>
              <div className="card-actions py-2">
                <div className=" text-xs rounded-full bg-primary/30 dark:bg-primary text-thrid dark:text-white font-medium px-3  py-2">
                  admin
                </div>
                <div className=" text-xs rounded-full bg-primary/30 dark:bg-primary text-thrid dark:text-white font-medium px-3 py-2">
                  Juune 24, 2024
                </div>
                <div className=" text-xs rounded-full bg-primary/30 dark:bg-primary text-thrid dark:text-white font-medium px-3 py-2">
                  Destination Guides
                </div>
              </div>
            </div>
          </div>
          <div className=" row-span-1 bg-base-100  shadow-xl rounded-lg">
            <div>
              <img
                className="rounded-t-md w-full h-[100px] object-cover"
                src={blog3}
                alt="blog image"
              />
            </div>
            <div className="p-5">
              <h2 className="card-title">Country-Specific Visas</h2>
              <p className="text-sm   mx-auto font-normal text-secondary dark:text-gray-300  py-2">
              Navigate the complexities of travel with our detailed guides on Country-Specific Visas, tailored to each destination's unique requirements.
              </p>
              <div className="card-actions py-2">
                <div className=" text-xs rounded-full bg-primary/30 dark:bg-primary text-thrid dark:text-white font-medium px-3  py-2">
                  admin
                </div>
                <div className=" text-xs rounded-full bg-primary/30 dark:bg-primary text-thrid dark:text-white font-medium px-3 py-2">
                  March 24, 2024
                </div>
                <div className=" text-xs rounded-full bg-primary/30 dark:bg-primary text-thrid dark:text-white font-medium px-3 py-2">
                Country-Specific Visas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
