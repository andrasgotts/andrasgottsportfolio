import SplashCursor from "./SplashCursor";

function HeaderThis() {
  return (
    <>
      <SplashCursor />
      <header className="bg-[#0d0f12] font-poppins flex w-full flex-wrap py-4 text-sm md:flex-nowrap md:justify-start md:py-0 ">
        <nav className="mx-auto w-full px-4" aria-label="Global">
          <div className="relative md:flex md:items-center">
            <div className="flex items-center justify-between">
              <a
                className="link link-neutral text-xl font-bold no-underline text-[#849CE8] text-nowrap"
                href="/andrasgottsportfolio"
              >
                Andras Gotts
              </a>
            </div>
            <div className="flex flex-col rounded-lg max-md:mt-3 max-md:border max-md:p-2 md:flex-row md:items-center md:justify-end md:ps-5 md:pe-0.5 gap-2 max-md:border-base-content/20">
              <ul className="menu md:menu-horizontal text-base px-0 max-md:w-fit max-md:py-0 gap-2">
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
                  <a href="/andrasgottsportfolio" className="text-white">
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
                  <a href="#" className="text-white">
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
