import { FaEnvelopeOpenText } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <div className="p-8 rounded-3xl mt-10">
        <div className="text-center w-2/4 mx-auto shadow-2xl bg-white p-10 rounded-2xl">
          <div>
            <span className="text-center">
              <FaEnvelopeOpenText className="w-15 mx-auto text-[#1B2247] text-7xl" />
            </span>
          </div>
          <h1 className="text-center py-8 text-3xl font-bold text-[#1B2247]">
            Get in Touch
          </h1>
          <form>
            <div className="grid grid-cols-1 gap-10 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="phone"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
              />
              <textarea
                name="message"
                className="textarea textarea-bordered w-full resize-none"
                placeholder="Write your message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-2/4 py-3 rounded-full text-white text-lg my-5 bg-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
