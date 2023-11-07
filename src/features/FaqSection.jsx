import { BiChevronDown } from "react-icons/bi";

const FaqSection = () => {
  return (
    <section id="faq">
      {/* FAQ Section */}
      <div className="container mx-auto">
        <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto max-w-lg px-6 text-center text-grayishBlue">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      {/* Accordion */}
      <div id="faq-accordion">
        {/* Main Container */}
        <div className="container mx-auto mb-32 px-6">
          {/* Accordion Container */}
          <div className="m-8 mx-auto max-w-2xl overflow-hidden">
            {/* Tab 1 */}
            <div className="group border-b py-1 outline-none" tabIndex={1}>
              {/* Tab Flex Container */}
              <div className="ease group flex cursor-pointer justify-between py-3 text-gray-500 transition-all duration-500">
                {/* Tab Title */}
                <h3 className="ease transition duration-500 group-hover:text-red-500">
                  What is Bookmark?
                </h3>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <BiChevronDown className="text-3xl" />
                </div>
              </div>
              {/* Inner Content */}
              <div className="ease max-h-0 overflow-hidden duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="group border-b py-1 outline-none" tabIndex={2}>
              {/* Tab Flex Container */}
              <div className="ease group flex cursor-pointer justify-between py-3 text-gray-500 transition-all duration-500">
                {/* Tab Title */}
                <h3 className="ease transition duration-500 group-hover:text-red-500">
                  How can I request a new browser?
                </h3>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <BiChevronDown className="text-3xl" />
                </div>
              </div>
              {/* Inner Content */}
              <div className="ease max-h-0 overflow-hidden duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="group border-b py-1 outline-none" tabIndex={2}>
              {/* Tab Flex Container */}
              <div className="ease group flex cursor-pointer justify-between py-3 text-gray-500 transition-all duration-500">
                {/* Tab Title */}
                <h3 className="ease transition duration-500 group-hover:text-red-500">
                  Is there a mobile app?{" "}
                </h3>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <BiChevronDown className="text-3xl" />
                </div>
              </div>
              {/* Inner Content */}
              <div className="ease max-h-0 overflow-hidden duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="group border-b py-1 outline-none" tabIndex={1}>
              {/* Tab Flex Container */}
              <div className="ease group flex cursor-pointer justify-between py-3 text-gray-500 transition-all duration-500">
                {/* Tab Title */}
                <h3 className="ease transition duration-500 group-hover:text-red-500">
                  What about other Chromium browsers?
                </h3>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <BiChevronDown className="text-3xl" />
                </div>
              </div>
              {/* Inner Content */}
              <div className="ease max-h-0 overflow-hidden duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
