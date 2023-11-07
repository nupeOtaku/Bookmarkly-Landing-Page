import logo from "../images/logo-bookmark-footer.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer id="footer" className="bg-veryDarkBlue py-16">
      {/* Footer Flex Container */}
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 px-6 md:flex-row md:space-y-0">
        {/* Logo & Menu */}
        <div className="flex flex-col items-center justify-between space-x-0 space-y-8 text-xl font-light text-grayishBlue md:flex-row md:space-x-14 md:space-y-0">
          <img src={logo} alt="logo" className="mb-1" />

          <a href="#features" className="uppercase hover:text-softRed">
            Features
          </a>
          <a href="#download" className="uppercase hover:text-softRed">
            Download
          </a>
          <a href="#faq" className="uppercase hover:text-softRed">
            FAQ
          </a>
        </div>

        {/* Social Icons Container */}
        <div className="flex space-x-10">
          <a href="#">
            <img src={facebook} alt="facebook" className="faicon h-8" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" className="faicon h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
