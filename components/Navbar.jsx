import Logo from "./Logo";
import LangSection from "./LangSection";
import LangDropDown from "./LangDropDown";

const Navbar = () => {
  return (
    <>
      <nav className="py-4 md:py-6 border-b">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* <!-- Logo --> */}
          <Logo />
          {/* <!-- Logo Ends --> */}

          <div className="flex gap-4 items-center">
            {/* <!-- Language Dropdown --> */}
            <div className="relative">
              <LangSection />

              {/* <!-- dropdown --> */}
              {/* <LangDropDown /> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
