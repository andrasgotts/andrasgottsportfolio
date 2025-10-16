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
                className="link link-neutral text-xl font-bold no-underline text-[#849CE8]"
                href="/andrasgottsportfolio"
              >
                Andras Gotts
              </a>
              <div className="md:hidden">
                <button
                  type="button"
                  className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                  data-collapse="#navbar-mega-menu-click"
                  aria-controls="navbar-mega-menu-click"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                </button>
              </div>
            </div>
            <div
              id="navbar-mega-menu-click"
              className="collapse hidden grow basis-full overflow-hidden rounded-lg transition-all duration-300 md:block"
            >
              <div className="flex flex-col rounded-lg max-md:mt-3 max-md:border max-md:p-2 md:flex-row md:items-center md:justify-end md:ps-5 md:pe-0.5 gap-2 max-md:border-base-content/20">
                <ul className="menu md:menu-horizontal text-base px-0 max-md:w-fit max-md:py-0 gap-2">
                  <li>
                    <a href="/andrasgottsportfolio" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/andrasgottsportfolio" className="text-white">
                      About Me
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
                    <a
                      href="/andrasgottsportfolio/projects"
                      className="text-white"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="dropdown [--adaptive:none] [--auto-close:inside] [--mega-menu:true] [--strategy:static] md:[--strategy:absolute]">
                  <button
                    type="button"
                    className="dropdown-toggle btn btn-text text-base-content/80 dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-3"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    Projects
                    <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-open:opacity-100 start-0 top-full hidden w-full min-w-60 rounded-lg py-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute max-md:border max-md:shadow-none max-md:border-base-content/20"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <ul className="menu md:menu-horizontal rounded-box w-full max-xl:gap-4 p-0">
                      <li>
                        <a href="#" className="menu-title">
                          Services
                        </a>
                        <ul className="menu">
                          <li>
                            <a href="#">Design Solutions</a>
                          </li>
                          <li>
                            <a href="#">Software Development</a>
                          </li>
                          <li>
                            <a href="#">Web Hosting</a>
                          </li>
                          <li>
                            <a href="#">Domain Registration</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" className="menu-title">
                          Corporate Solutions
                        </a>
                        <ul className="menu">
                          <li>
                            <a href="#">CRM</a>
                          </li>
                          <li>
                            <a href="#">Management Solutions</a>
                          </li>
                          <li>
                            <a href="#">Security Services</a>
                          </li>
                          <li>
                            <a href="#">Consulting Services</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" className="menu-title">
                          Product Offerings
                        </a>
                        <ul className="menu">
                          <li>
                            <a href="#">UI Kits</a>
                          </li>
                          <li>
                            <a href="#">Component Library</a>
                          </li>
                          <li>
                            <a href="#">WordPress Plugins</a>
                          </li>
                          <li>
                            <a href="#" className="menu-title">
                              Open Source Projects
                            </a>
                            <ul className="menu">
                              <li>
                                <a href="#">Authentication System</a>
                              </li>
                              <li>
                                <a href="#">FlyonUI Theme</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default HeaderThis;
