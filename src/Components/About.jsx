
const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-10 md:py-16 xl:py-20 px-2 md:px-16 lg:px-32 mt-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          About US
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
          Visify is your ultimate companion for navigating the complex
          world of visa applications. Whether you're planning a dream vacation,
          studying abroad, or moving for work, Visify is here to
          simplify the process, providing reliable information and tools to
          make your journey stress-free.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Simplified Visa Requirements
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Discover country-specific visa requirements with ease. Get a
              detailed breakdown of necessary documents and steps tailored to
              your destination.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Online Visa Applications
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Apply for visas online directly through our platform. Save time
              and avoid unnecessary hassle with our intuitive application
              process.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Application Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Stay updated on your visa application's progress with real-time
              tracking. Get notified at every stage to ensure peace of mind.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Personalized Assistance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our expert team is here to guide you through the process,
              answering any questions and providing tailored support whenever
              you need it.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              User-Friendly Design
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy a seamless user experience with our clean and intuitive
              interface, making visa navigation accessible to everyone.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Trusted Resources
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access the most up-to-date and accurate visa information sourced
              from official government and consulate websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
