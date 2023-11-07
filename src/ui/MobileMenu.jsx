import { useMenuContext } from "../context/MenuContext";

const MobileMenu = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();

  return (
    <div
      id="menu"
      className={`fixed inset-0 z-30 bg-black p-6 opacity-90  md:hidden  ${
        !btnOpen ? "slide close" : "slide open"
      } `}
    >
      <div className="flex flex-col items-center justify-start space-y-6 rounded-sm pt-24 font-bold text-white">
        <a
          onClick={() => setBtnOpen(false)}
          href="#features"
          className="w-full border-b border-white pb-2 text-center hover:text-softRed"
        >
          Features
        </a>
        <a
          onClick={() => setBtnOpen(false)}
          href="#download"
          className="w-full border-b border-white pb-2 text-center hover:text-softRed"
        >
          Download
        </a>
        <a
          onClick={() => setBtnOpen(false)}
          href="#faq"
          className="w-full border-b border-white pb-2 text-center hover:text-softRed"
        >
          FaQ
        </a>
        <a
          href="#faq"
          className="hover:text-softred rounded-lg border-2 border-softRed bg-softRed px-8 py-2 tracking-widest text-white shadow-md hover:bg-white hover:text-softRed"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export { MobileMenu };
