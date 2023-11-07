import { useEffect, useState } from "react";
import { HamburgerButton } from "../ui/HamBurgerButton";
import { MobileMenu } from "../ui/MobileMenu";
import { useMenuContext } from "../context/MenuContext";
import logo from "../images/logo-bookmark.svg";
import logoLight from "../images/logo-bookmark-footer.svg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { btnOpen } = useMenuContext();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`container mx-auto ${isScrolled ? "stick" : ""}`}>
      <nav
        className={`container relative mx-auto p-6 ${
          isScrolled ? "scrolle" : ""
        }`}
      >
        {/* Flex Container */}
        <div
          className={`my-6 flex items-center justify-between md:space-x-20 `}
        >
          {/* Logo */}
          <div className={`${btnOpen ? "z-50" : "z-30"}`}>
            <img
              src={btnOpen || isScrolled ? logoLight : logo}
              alt="logo"
              id="logo"
            />
          </div>
          {/* Menu */}
          <HamburgerButton />
          <MobileMenu />

          <div
            className={`hidden items-center space-x-10 uppercase  ${
              isScrolled ? "text-white" : "text-grayishBlue"
            }  md:flex`}
          >
            <a href="#features" className="hover:text-softred tracking-widest">
              Features
            </a>
            <a href="#download" className="hover:text-softred tracking-widest">
              Download
            </a>
            <a href="#faq" className="hover:text-softred tracking-widest">
              Faq
            </a>

            <a
              href="#faq"
              className="hover:text-softred rounded-lg border-2 border-softRed bg-softRed px-8 py-2 tracking-widest text-white shadow-md hover:bg-white hover:text-softRed"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navigation };
