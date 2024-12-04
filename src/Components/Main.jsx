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
                <img src={visa?.photo} alt="visa" className="w-24 lg:w-32 h-16 lg:h-20  border" />
                <h4 className="mt-2  text-secondary dark:text-white"><span className="font-semibold text-lg">Countery :</span> <span className="font-medium text-gray-600 dark:text-gray-300">{visa?.name}</span></h4>
                <h4 className="text-secondary dark:text-white"><span className="font-semibold text-lg">Visa type :</span> <span className="font-medium text-gray-600 dark:text-gray-300">{visa?.visaType}</span></h4>
                <h4 className="text-secondary dark:text-white"><span className="font-semibold text-lg">Processing time :</span> <span className="font-medium text-gray-600 dark:text-gray-300">{visa?.processingTime}</span></h4>
                <h4 className="text-secondary dark:text-white"><span className="font-semibold text-lg">Fee :</span> <span className="font-medium text-gray-600 dark:text-gray-300">${visa?.fee}</span></h4>
                <h4 className="text-secondary dark:text-white"><span className="font-semibold text-lg">Validity :</span> <span className="font-medium text-gray-600 dark:text-gray-300">{visa?.validity}</span></h4>
                <h4 className="text-secondary dark:text-white"><span className="font-semibold text-lg">Application method
                :</span> <span className="font-medium text-gray-600 dark:text-gray-300">{visa?.applicationMethod}</span></h4>
                <button className="bg-primary py-2 px-3 rounded-md mt-4 text-white font-medium">See Details</button>
              </div>
            ))}
          </div>
          <button className="bg-red-900 py-2 px-4 rounded-md mt-4 ml-2 text-white font-medium">See all visas</button>
      </section>
        {/* Work Process */}
      <section className="pb-10 md:pb-16 xl:pb-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary dark:text-white font-bold text-center">
      Work Process
        </h1>
        <p className="text-sm md:text-base text-secondary dark:text-gray-300 font-normal text-center max-w-xl mx-auto pt-2">
          Explore the most recent visa updates and application processes to stay
          informed and prepared for your travels.
        </p>
      </section>
    </main>
  );
};

export default Main;
