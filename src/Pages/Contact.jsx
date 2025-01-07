import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSendMessage = (e) =>{
    e.preventDefault();
    const from = e.target.elements;
    const firstName = from.firstName.value;
    const lastName = from.lastName.value;
    const message = from.message.value;
    const email = from.email.value;

    const fromdetails = {firstName, lastName, message, email};
    console.log(fromdetails);
    toast.success('Successfully sent message', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    navigate("/")
  }
  return (
    <div className="isolate bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-thrid opacity-30 dark:opacity-50 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form
       onSubmit={handleSendMessage}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                name="firstName"
                type="text"
                className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-primary dark:focus:outline-primary"
              />
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                name="lastName"
                type="text"
                className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-primary dark:focus:outline-primary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                name="email"
                type="email"
                className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-primary dark:focus:outline-primary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-primary dark:focus:outline-primary"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 dark:bg-gray-300 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline-thrid data-[checked]:bg-thrid dark:data-[checked]:bg-thrid"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm text-gray-600 dark:text-gray-400">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-thrid dark:text-primary">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={!agreed}
            className={`block w-full rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  ${!agreed ? "bg-gray-700 cursor-not-allowed": "bg-thrid hover:bg-primary focus-visible:outline-primary dark:hover:bg-primary/80 cursor-pointer"}`}
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
