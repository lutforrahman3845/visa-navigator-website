import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const MyVisaApplication = () => {
  const { user } = useContext(AuthContext);
  const [myVisasApplication, setMyVisasApplication] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-10-server-pied-phi.vercel.app/apply/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyVisasApplication(data));
  }, [user]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `https://assignment-10-server-pied-phi.vercel.app/apply/search/${user?.email}?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => setMyVisasApplication(data));
  }, [search]);
  const handleCancle = (visaToDelete) => {
    fetch(`https://assignment-10-server-pied-phi.vercel.app/apply/${visaToDelete?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setMyVisasApplication((prev) =>
            prev.filter((visa) => visa._id !== visaToDelete._id)
          );
        }
      });
    Swal.fire({
      title: "Congratulation!",
      text: "Visa Cancel successfully",
      icon: "success",
    });
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
      <div className="flex justify-center pt-10">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 my-10 px-2 ">
        {myVisasApplication.map((visa, index) => (
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
                  {visa?.country_name}
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
              <h4 className="text-secondary dark:text-white">
                <span className="font-semibold text-lg">Applied date :</span>{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {visa?.appliedDate}
                </span>
              </h4>
              <h4 className="text-secondary dark:text-white">
                <span className="font-semibold text-lg">
                  Applicant's name :
                </span>{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {visa?.firstName} {visa?.lastName}
                </span>
              </h4>
              <h4 className="text-secondary dark:text-white">
                <span className="font-semibold text-lg">
                  Applicant’s email :
                </span>{" "}
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {visa?.email}
                </span>
              </h4>
            </div>
            <div>
              <button
                onClick={() => handleCancle(visa)}
                className="bg-primary py-2 px-3 rounded-md mt-4 text-white font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;
