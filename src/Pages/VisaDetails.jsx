import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
const VisaDetails = () => {
  const { user } = useContext(AuthContext);
  const singleVisa = useLoaderData();

  //   current date
  const addDate = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[addDate.getDay()];
  const month = addDate.toLocaleString("default", { month: "short" });
  const putInsideDate = [
    `${dayOfWeek}, ${addDate.getDate()} ${month}, ${addDate.getFullYear()}`,
  ];

  const handleApply = () => {
    document.getElementById("my_modal_1").showModal();
  };
  const handleApplySubmit = (e) => {
    e.preventDefault();
    console.log("first");
    const form = e.target;
    const photo = singleVisa?.photo;
    const country_name = singleVisa?.name;
    const visaType = singleVisa?.visaType;
    const processingTime = singleVisa?.processingTime;
    const applicationMethod = singleVisa?.applicationMethod;
    const validity = singleVisa?.validity;
    const userUid = user?.uid;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const appliedDate = form.appliedDate.value;
    const fee = form.fee.value;
    const applicationData = {
      email,
      firstName,
      lastName,
      appliedDate,
      fee,
      validity,
      photo,
      country_name,
      visaType,
      processingTime,
      applicationMethod,
      userUid,
    };
    fetch("http://localhost:5000/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then(() => {
        document.getElementById("my_modal_1").close();
        Swal.fire({
          title: "Congratulation!",
          text: " visa applied successfully",
          icon: "success",
          customClass: {
            popup: "swal-custom-popup",
          },
        }).then(() => {
          from.reset();
        });
      });
  };

  return (
    <div className="dark:bg-secondary py-10 md:py-16 px-2">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary dark:text-white font-bold text-center ">
        {singleVisa?.visaType}
      </h1>
      <p className="text-sm md:text-base text-secondary dark:text-gray-300 font-normal text-center max-w-xl mx-auto pt-2">
        {singleVisa?.description}
      </p>
      <div className="flex justify-center mt-10">
        <div className="p-4 border rounded-lg w-fit flex flex-col justify-between">
          <div>
            <img
              src={singleVisa?.photo}
              alt="cuntry image"
              className="w-24 lg:w-32 h-16 lg:h-20  border"
            />
            <h4 className="mt-2  text-secondary dark:text-white">
              <span className="font-semibold text-lg">Countery :</span>{" "}
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {singleVisa?.name}
              </span>
            </h4>
            <h4 className="text-secondary dark:text-white">
              <span className="font-semibold text-lg">Visa type :</span>{" "}
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {singleVisa?.visaType}
              </span>
            </h4>
            <h4 className="text-secondary dark:text-white">
              <span className="font-semibold text-lg">Processing time :</span>{" "}
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {singleVisa?.processingTime}
              </span>
            </h4>
            <h4 className="text-secondary dark:text-white">
              <span className="font-semibold text-lg">Fee :</span>{" "}
              <span className="font-medium text-gray-600 dark:text-gray-300">
                ${singleVisa?.fee}
              </span>
            </h4>
            <h4 className="text-secondary dark:text-white">
              <span className="font-semibold text-lg">Validity :</span>{" "}
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {singleVisa?.validity}
              </span>
            </h4>
            <h4 className="text-secondary dark:text-white">
              <span className="font-semibold text-lg">
                Application method :
              </span>{" "}
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {singleVisa?.applicationMethod}
              </span>
            </h4>
          </div>
          <div>
            <button
              onClick={handleApply}
              className="bg-red-800 py-2 px-3 rounded-md mt-4 text-white font-medium"
            >
              Apply for the visa
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <dialog id="my_modal_1" className="modal z-40">
        <div className="modal-box">
          <form onSubmit={handleApplySubmit}>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Apply for a Visa
            </h2>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user?.email}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                required
                disabled
              />
            </div>

            {/* First Name*/}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Last Name*/}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Applydate */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Applied Date
              </label>
              <input
                type="text"
                id="appliedDate"
                name="appliedDate"
                value={putInsideDate}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                required
                disabled
              />
            </div>

            {/* Fee*/}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Fee
              </label>
              <input
                type="number"
                id="fee"
                name="fee"
                value={singleVisa?.fee}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                required
                disabled
              />
            </div>

            <div className="modal-action">
              <button className="btn w-full bg-primary text-white font-semibold">Apply</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VisaDetails;
