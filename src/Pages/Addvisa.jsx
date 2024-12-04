const Addvisa = () => {
  return (
    <div className="dark:bg-secondary py-10">
      <div class="max-w-4xl mx-auto p-6 bg-white shadow-xl dark:bg-gray-800 rounded-lg ">
        <h1 class="text-2xl font-bold mb-6">Add Visa</h1>
        <form>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">
              Country Image URL
            </label>
            <input
              type="text"
              name="countryImage"
              class="input input-bordered w-full"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Country Name</label>
            <input
              type="text"
              name="countryName"
              class="input input-bordered w-full"
              placeholder="Enter country name"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Visa Type</label>
            <select
              name="visaType"
              class="select select-bordered w-full"
              required
            >
              <option value="Tourist visa">Tourist Visa</option>
              <option value="Student visa">Student Visa</option>
              <option value="Official visa">Official Visa</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">
              Processing Time
            </label>
            <input
              type="text"
              name="processingTime"
              class="input input-bordered w-full"
              placeholder="Enter processing time"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">
              Required Documents
            </label>
            <div class="space-y-2">
              <label class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Valid passport"
                />
                <span>Valid Passport</span>
              </label>
              <label class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Visa application form"
                />
                <span>Visa Application Form</span>
              </label>
              <label class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Recent passport-sized photograph"
                />
                <span>Recent Passport-Sized Photograph</span>
              </label>
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              class="textarea textarea-bordered w-full"
              placeholder="Enter description"
              rows="3"
              required
            ></textarea>
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">
              Age Restriction
            </label>
            <input
              type="number"
              name="ageRestriction"
              class="input input-bordered w-full"
              placeholder="Enter age restriction"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Fee</label>
            <input
              type="number"
              name="fee"
              class="input input-bordered w-full"
              placeholder="Enter fee"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Validity</label>
            <input
              type="text"
              name="validity"
              class="input input-bordered w-full"
              placeholder="Enter validity period"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">
              Application Method
            </label>
            <input
              type="text"
              name="applicationMethod"
              class="input input-bordered w-full"
              placeholder="Enter application method"
              required
            />
          </div>

          <div>
            <button type="submit" class="btn text-white shadow-sm w-full bg-primary">
              Add Visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addvisa;
