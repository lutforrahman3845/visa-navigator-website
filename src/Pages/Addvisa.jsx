import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Addvisa = () => {
  const { user } = useContext(AuthContext);
  const handleAddVisa = (e) => {
    e.preventDefault();

    const form = e.target;

    const uId = user?.uid;

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

    const visaData = {
      uId,
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
    fetch("http://localhost:5000/visas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
            title: "Congratulation!",
            text: "Visa added successfully",
            icon: "success"
          });
        form.reset();
      });
  };

  return (
    <div className="dark:bg-secondary py-10 mx-2">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl dark:bg-gray-800 rounded-lg ">
        <h1 className="text-2xl font-bold mb-6">Add Visa</h1>
        <form onSubmit={handleAddVisa}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Country Image URL
            </label>
            <input
              type="text"
              name="countryImage"
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
              placeholder="Enter country name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Visa Type</label>
            <select
              name="visaType"
              className="select select-bordered w-full"
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
                />
                <span>Valid Passport</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Visa application form"
                />
                <span>Visa Application Form</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Recent passport-sized photograph"
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
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="btn text-white shadow-sm w-full bg-primary"
            >
              Add Visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addvisa;
