import SplashCursor from "./SplashCursor";

function HeaderThis() {
  return (
    <>
      <SplashCursor />
      <header className="bg-[#0d0f12] font-poppins">
        <nav className="navbar rounded-box shadow-base-300/20 shadow-sm">
          <div className="w-full md:flex md:items-center md:gap-2">
            <div className="flex items-center justify-between">
              <div className="navbar-start items-center justify-between max-md:w-full">
                <a
                  className="link text-[#849CE8] link-neutral text-xl font-bold no-underline text-nowrap"
                  href="/andrasgottsportfolio"
                >
                  Andras Gotts
                </a>
              </div>
            </div>
            <div
              id="default-navbar-collapse"
              className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
            >
              <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
                <li>
                  <a href="/andrasgottsportfolio" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/andrasgottsportfolio/projects"
                    className="text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/andrasgottsportfolio/resume" className="text-white">
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="/andrasgottsportfolio/education"
                    className="text-white"
                  >
                    Education
                  </a>
                </li>

                <li>
                  <a href="/andrasgottsportfolio" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default HeaderThis;
