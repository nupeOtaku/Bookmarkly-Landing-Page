// Compare this snippet from 11-bookmark-website/src/features/HeroSection.jsx:
import illustration from "../images/illustration-hero.svg";

const HeroSection = () => {
  return (
    <section id="hero">
      {/* Image Container */}
      <div className="container mx-auto flex flex-col-reverse p-6 lg:mb-0 lg:flex-row">
        {/* Content */}
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-center text-3xl font-semibold lg:text-left lg:text-6xl">
            A simple bookmark manager
          </h1>
          <p className="mx-auto max-w-md text-lg text-gray-400 lg:mx-0 lg:mt-0 lg:text-left lg:text-2xl">
            A clean and simple interface to organize your favourite websites.
            open a new browser tab and see your sites load instantly.
          </p>
          {/* Buttons Container */}
          <div className="flex w-full items-center justify-center space-x-2 md:space-x-4 lg:justify-start">
            <a
              href="#"
              className="rounded border-2 border-softBlue bg-softBlue p-2 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-softBlue md:p-4 md:text-base"
            >
              Get it on Chrome
            </a>
            <a
              href="#"
              className="rounded border-2 border-gray-200 bg-gray-400 p-2 text-sm font-semibold text-black shadow-md hover:bg-white hover:text-gray-600 md:p-4 md:text-base"
            >
              Get it on Firefox
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="relative mx-auto mb-0 lg:mx-0 lg:w-1/2">
          <div className="bg-hero"></div>
          <img
            src={illustration}
            alt="illustration-hero"
            className="relative z-10 overflow-x-visible lg:top-24 xl:top-0"
          />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
