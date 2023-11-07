import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";

const DownloadSection = () => {
  return (
    <section id="download">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
          Download the extension
        </h2>
      </div>
      <p className="mx-auto max-w-lg text-center text-grayishBlue">
        We`ve got more browsers in the pipeline. Please do let us know if you`ve
        got a favorite you`d like us to prioritize.
      </p>

      {/* Download Boxes */}
      <div id="download-boxes" className="py-32">
        {/* Boxes Container */}
        <div className="relative mx-auto flex max-w-5xl flex-col items-center space-y-10 px-10 md:flex-row md:space-x-7 md:space-y-0 md:px-6">
          {/* Box 1 */}
          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <img src={chrome} alt="Chrome logo" />
            </div>
            {/* Text */}
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400"> Minimum version 62</p>
            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full rounded-lg border-2 border-softBlue bg-softBlue p-2 text-white duration-200 hover:bg-white hover:text-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full md:w-1/3">
            <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-10">
              {/* Image */}
              <div className="flex justify-center">
                <img src={firefox} alt="firefox logo" />
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400"> Minimum version 55</p>
              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full rounded-lg border-2 border-softBlue bg-softBlue p-2 text-white duration-200 hover:bg-white hover:text-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full md:w-1/3">
            <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-16">
              {/* Image */}
              <div className="flex justify-center">
                <img src={opera} alt="Opera logo" />
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400"> Minimum version 46</p>
              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full rounded-lg border-2 border-softBlue bg-softBlue p-2 text-white duration-200 hover:bg-white hover:text-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
