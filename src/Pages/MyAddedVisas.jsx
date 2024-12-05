import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const MyAddedVisas = () => {
  const [myAddedVisas, setMyAddedVisas] = useState([]);
  const [modalData, setModalData] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/visas/user/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setMyAddedVisas(data));
  }, [user]);
  const handleUpdate = (visa) => {
    setModalData(visa);
    document.getElementById("my_modal_1").showModal();
  };
  const handleDelete = (visaToDelete) => {
    fetch(`http://localhost:5000/visas/${visaToDelete?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setMyAddedVisas((prev) =>
            prev.filter((visa) => visa._id !== visaToDelete._id)
          );
        }
      });
      Swal.fire({
        title: "Congratulation!",
        text: "Visa deleted successfully",
        icon: "success",
      });
  };

  const [selectedVisaType, setSelectedVisaType] = useState("");
  useEffect(() => {
    if (modalData?.visaType) {
      setSelectedVisaType(modalData.visaType);
    }
  }, [modalData]);

  const handleUpdateSubmmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.countryImage.value;
    const name = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;

    //  checkbox values
    const requiredDocuments = Array.from(form.requiredDocuments)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const updateVisaData = {
      photo,
      name,
      visaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
    };
    fetch(`http://localhost:5000/visas/${modalData?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateVisaData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setMyAddedVisas((prev) =>
            prev.map((visa) =>
              visa._id === modalData._id ? { ...visa, ...updateVisaData } : visa
            )
          );
        }
        document.getElementById("my_modal_1").close();
        Swal.fire({
          title: "Congratulation!",
          text: "Visa updated successfully",
          icon: "success",
        });
      });
  };
  return (
    <div className="dark:bg-secondary py-10 md:py-16 px-2 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary dark:text-white font-bold text-center">
        My added visas
      </h1>
      <p className="text-sm md:text-base text-secondary dark:text-gray-300 font-normal text-center max-w-xl mx-auto pt-2">
        Explore new destinations with ease using our added visa options,
        simplifying your travel and migration plans.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 my-10 px-2 ">
        {myAddedVisas.map((visa, index) => (
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
            <button
              onClick={() => handleUpdate(visa)}
              className="bg-primary py-2 px-3 rounded-md mt-4 text-white font-medium mr-4"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(visa)}
              className="bg-primary py-2 px-3 rounded-md mt-4 text-white font-medium"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {/* Modal */}
      <dialog id="my_modal_1" className="modal z-40">
        <div className="modal-box w-11/12 max-w-5xl">
          <form onSubmit={handleUpdateSubmmit}>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              update this a Visa
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Country Image URL
              </label>
              <input
                type="text"
                name="countryImage"
                className="input input-bordered w-full"
                defaultValue={modalData?.photo}
                placeholder="Enter image URL"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Country Name
              </label>
              <input
                type="text"
                name="countryName"
                defaultValue={modalData?.name}
                className="input input-bordered w-full"
                placeholder="Enter country name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Visa Type
              </label>
              <select
                name="visaType"
                className="select select-bordered w-full"
                value={selectedVisaType}
                onChange={(e) => setSelectedVisaType(e.target.value)}
                required
              >
                <option value="Tourist visa">Tourist Visa</option>
                <option value="Student visa">Student Visa</option>
                <option value="Official visa">Official Visa</option>
                <option value="Working visa">Working Visa</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Processing Time
              </label>
              <input
                type="text"
                name="processingTime"
                className="input input-bordered w-full"
                defaultValue={modalData?.processingTime}
                placeholder="Enter processing time"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Required Documents
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="requiredDocuments"
                    value="Valid passport"
                    defaultChecked={modalData?.requiredDocuments.includes(
                      "Valid passport"
                    )}
                  />
                  <span>Valid Passport</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="requiredDocuments"
                    value="Visa application form"
                    defaultChecked={modalData?.requiredDocuments.includes(
                      "Visa application form"
                    )}
                  />
                  <span>Visa Application Form</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="requiredDocuments"
                    value="Recent passport-sized photograph"
                    defaultChecked={modalData?.requiredDocuments.includes(
                      "Recent passport-sized photograph"
                    )}
                  />
                  <span>Recent Passport-Sized Photograph</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                placeholder="Enter description"
                rows="3"
                defaultValue={modalData?.description}
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Age Restriction
              </label>
              <input
                type="number"
                name="ageRestriction"
                className="input input-bordered w-full"
                placeholder="Enter age restriction"
                defaultValue={modalData?.ageRestriction}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Fee</label>
              <input
                type="number"
                name="fee"
                className="input input-bordered w-full"
                placeholder="Enter fee"
                defaultValue={modalData?.fee}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Validity</label>
              <input
                type="text"
                name="validity"
                className="input input-bordered w-full"
                placeholder="Enter validity period"
                defaultValue={modalData?.validity}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Application Method
              </label>
              <input
                type="text"
                name="applicationMethod"
                className="input input-bordered w-full"
                placeholder="Enter application method"
                defaultValue={modalData?.applicationMethod}
                required
              />
            </div>
            <div className="modal-action">
              <button className="btn w-full bg-primary text-white font-semibold">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyAddedVisas;
