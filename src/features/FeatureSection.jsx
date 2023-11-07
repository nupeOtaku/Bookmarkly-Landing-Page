import { useState } from "react";
import illustrationTab1 from "../images/illustration-features-tab-1.svg";
import illustrationTab2 from "../images/illustration-features-tab-2.svg";
import illustrationTab3 from "../images/illustration-features-tab-3.svg";

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState("panel-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="features">
      {/* Features Heading */}
      <div className="container mx-auto mt-16 px-6 md:mx-0">
        <h2 className="mb-6 text-center text-4xl font-semibold">Features</h2>
        <p className="mx-auto max-w-md text-center text-grayishBlue">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      {/* Features Tab */}
      <div id="tabs">
        {/* Tabs Panel Container */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>
          {/* Tabs Flex Container */}
          <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center border-b md:flex-row md:space-x-10">
            {/* Tab 1 */}
            <div
              className={`tab flex cursor-pointer justify-center border-b text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0 ${
                activeTab === "panel-1" ? "border-softRed" : ""
              }`}
              onClick={() => handleTabClick("panel-1")}
            >
              <div
                className={` py-5 ${
                  activeTab === "panel-1" ? "border-b-4 border-softRed" : ""
                }`}
              >
                Simple bookmarking
              </div>
            </div>

            {/* Tab 2 */}
            <div
              className={`tab flex cursor-pointer justify-center border-b text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0 ${
                activeTab === "panel-2" ? "border-softRed" : ""
              }`}
              onClick={() => handleTabClick("panel-2")}
            >
              <div
                className={`py-5 ${
                  activeTab === "panel-2" ? "border-b-4 border-softRed" : ""
                }`}
              >
                Speedy searching
              </div>
            </div>

            {/* Tab 3 */}
            <div
              className={`tab flex cursor-pointer justify-center border-b text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0 ${
                activeTab === "panel-3" ? "border-softRed" : ""
              }`}
              onClick={() => handleTabClick("panel-3")}
            >
              <div
                className={`py-5 ${
                  activeTab === "panel-3" ? "border-b-4 border-softRed" : ""
                }`}
              >
                Easy sharing
              </div>
            </div>
          </div>

          {/* Tabs Panel */}
          <section id="panel" className="container mx-auto">
            {/* Panel 1 */}
            <div
              className={`panel-1 panel flex flex-col sm:space-x-0 md:space-x-14 ${
                activeTab === "panel-1" ? "md:flex-row" : "hidden"
              }`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src={illustrationTab1}
                  alt="panel image"
                  className="relative z-10"
                />
              </div>

              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-16 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>

                <div className="text-center md:text-left">
                  <a
                    href="#"
                    className="mt-4 rounded border-2 border-white bg-softBlue 
                    p-6 py-3 text-sm font-semibold text-white shadow-md hover:border-softBlue hover:bg-white hover:text-softBlue md:text-base"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div
              className={`panel-2 panel flex flex-col sm:space-x-0 md:space-x-14 ${
                activeTab === "panel-2" ? "md:flex-row" : "hidden"
              }`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src={illustrationTab2}
                  alt="panel image"
                  className="relative z-10"
                />
              </div>

              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>

                <div className="text-center md:text-left">
                  <a
                    href="#"
                    className="mt-4 rounded border-2 border-white bg-softBlue 
                    p-6 py-3 text-sm font-semibold text-white shadow-md hover:border-softBlue hover:bg-white hover:text-softBlue md:text-base"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>

            {/* Panel 3 */}
            <div
              className={`panel-3 panel flex flex-col space-x-0 md:space-x-14 ${
                activeTab === "panel-3" ? "md:flex-row" : "hidden"
              }`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src={illustrationTab3}
                  alt="panel image"
                  className="relative z-10"
                />
              </div>

              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others.
                  Create a shareable link to access your favourite websites.
                </p>

                <div className="text-center md:text-left">
                  <a
                    href="#"
                    className="mt-4 rounded border-2 border-white bg-softBlue 
                    p-6 py-3 text-sm font-semibold text-white shadow-md hover:border-softBlue hover:bg-white hover:text-softBlue md:text-base"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };
