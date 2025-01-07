import { useNavigate } from "react-router-dom";
import ceo from "../assets/CEO.jpg"
import head_operations from "../assets/head_operations.jpeg"
import tech_lead from "../assets/tech-lead.jpg"
const AboutUS = () => {
    const navigate = useNavigate()

  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-2 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-primary">Visify</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Navigating the complex world of visas made simple, reliable, and
            stress-free.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-base leading-7">
            At Visify, we understand that applying for a visa can often
            feel overwhelming and confusing. Our mission is to demystify the
            process by providing accurate, up-to-date, and easy-to-understand
            information about visa requirements, applications, and status
            tracking. Whether you're planning a leisure trip, pursuing an
            education, or moving for work, we are here to guide you every step
            of the way.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Visa Requirements</h3>
              <p>
                Find detailed, country-specific visa requirements tailored to
                your travel or relocation plans.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Online Applications</h3>
              <p>
                Submit visa applications online with our intuitive, user-friendly
                platform that saves you time and effort.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
              <p>
                Track your visa application's status in real-time with
                notifications for every milestone.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Personalized Support</h3>
              <p>
                Get expert assistance from our team to address your unique visa
                concerns and questions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Educational Resources</h3>
              <p>
                Access comprehensive guides, tips, and resources to make informed
                visa-related decisions.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
              <p>
                Enjoy peace of mind knowing your personal data is safe and secure
                with us.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-base leading-7">
            Our mission is to create a world where visa applications are no
            longer a barrier to your dreams. By leveraging cutting-edge
            technology, expert guidance, and a commitment to excellence, we
            strive to provide you with a seamless and stress-free experience.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Search:</strong> Enter your destination and purpose of
              travel to find visa requirements tailored to you.
            </li>
            <li>
              <strong>Apply:</strong> Submit your application through our secure
              platform with guided instructions.
            </li>
            <li>
              <strong>Track:</strong> Stay updated on your application's status
              with real-time notifications.
            </li>
          </ol>
        </section>

        {/* Our Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
          <p className="text-base leading-7 mb-6">
            Our dedicated team of experts is passionate about making visa
            applications accessible to everyone. With years of experience in the
            travel and immigration industry, we are here to guide you every step
            of the way.
          </p>
          <div className="flex gap-3 md:gap-6 justify-center ">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full ">
                <img src={ceo} alt="" className="w-full h-full object-cover rounded-full" />
              </div>
              <p className="mt-2 font-medium">Alex Johnson</p>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full ">
              <img src={head_operations} alt="" className="w-full h-full object-cover rounded-full" />
              </div>
              <p className="mt-2 font-medium">Emily Carter</p>
              <p className="text-sm text-gray-500">Head of Operations</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full">
              <img src={tech_lead} alt="" className="w-full h-full object-cover object-top rounded-full" />
              </div>
              <p className="mt-2 font-medium">Michael Lee</p>
              <p className="text-sm text-gray-500">Tech Lead</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Join thousands of users who trust Visify for a seamless visa
            application process.
          </p>
          <button onClick={()=> navigate("/all_visas")} className="bg-thrid/80 text-white px-6 py-3 rounded-lg hover:bg-thrid">
            Explore Now
          </button>
        </section>
      </div>
    </section>
  );
};

export default AboutUS;
