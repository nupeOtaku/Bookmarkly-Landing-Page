const NewsLetterSection = () => {
  return (
    <section id="newsletter" className="bg-softBlue">
      {/* Main Container */}
      <div className="mx-auto max-w-lg py-24">
        <p className="mb-6 text-center text-lg uppercase tracking-widest text-white">
          45,000+ already joined
        </p>
        <h2 className="mb-6 px-3 text-center text-3xl font-semibold text-white md:text-4xl">
          Stay up-to-date with what we`re doing
        </h2>

        <form className="mx-auto flex max-w-2xl flex-col items-start justify-center space-y-6 px-6 text-base md:flex-row md:space-x-4 md:space-y-0 md:px-0">
          {/* Input & Button Container */}
          {/* Input */}
          <div className="mx-auto flex flex-col items-center justify-between gap-4 md:mx-0 md:flex-row md:gap-0">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border-1 flex-1 rounded-lg border-white px-6 pb-2 pt-3 focus:outline-none md:mb-0 md:mr-3"
            />

            {/* Button */}
            <button className="inline-flex cursor-pointer rounded-md bg-softRed px-6 py-3 text-center font-semibold text-white shadow-2xl duration-200 hover:bg-softRed/80 focus:outline-none">
              Contact us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetterSection;
