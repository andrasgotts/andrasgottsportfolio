import SplashCursor from "./SplashCursor";

function HeaderThis() {
  return (
    <>
      <SplashCursor />
      <header className="bg-[#0d0f12] font-poppins">
        <nav className="navbar rounded-box shadow-base-300/20 shadow-sm py-4 px-4">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a
              className="link text-[#849CE8] link-neutral text-xl font-bold no-underline text-nowrap"
              href="/cyan-corot"
            >
              Andras Gotts
            </a>
          </div>
          <div className="navbar-center">
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2 ">
              <li>
                <a href="/cyan-corot" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/cyan-corot/projects" className="text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="/cyan-corot/resume" className="text-white">
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/cyan-corot/education"
                  className="text-white"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="/cyan-corot/experience"
                  className="text-white"
                >
                  Experience
                </a>
              </li>

              <li>
                <a href="/cyan-corot/contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
export default HeaderThis;
