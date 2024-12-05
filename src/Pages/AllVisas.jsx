import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllVisas = () => {
  const navigate= useNavigate()
  const visas = useLoaderData();
  const [filteredVisas, setFilteredVisas] = useState(visas);
  const handleFilter = (e) => {
    const selectedType = e.target.value;
    const url =
      selectedType === "All visa"
        ? "http://localhost:5000/visas"
        : `http://localhost:5000/visas/${selectedType}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFilteredVisas(data));
  };
  return (
    <div className="dark:bg-secondary py-10 md:py-16 px-2 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary dark:text-white font-bold text-center ">
        All visas
      </h1>
      <p className="text-sm md:text-base text-secondary dark:text-gray-300 font-normal text-center max-w-xl mx-auto pt-2">
        Discover comprehensive information on all visa types, guiding you
        through every step of your international travel and migration journey.
      </p>
      {/* filter visas */}
      <div className="flex items-center justify-center pt-10">
        <label className="block text-sm font-medium mr-2">Filter: </label>
        <select
          onChange={handleFilter}
          name="visaType"
          className="select select-bordered "
        >
          <option value="All visa">All visa</option>
          <option value="Tourist visa">Tourist Visa</option>
          <option value="Student visa">Student Visa</option>
          <option value="Official visa">Official Visa</option>
          <option value="Working visa">Working Visa</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 mt-10 px-2 ">
        {filteredVisas.map((visa, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg w-full flex flex-col justify-between"
          >
            <div>
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
            </div>
            <div>
              <button onClick={()=> navigate(`/visa_details/${visa?._id}`)} className="bg-primary py-2 px-3 rounded-md mt-4 text-white font-medium">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
