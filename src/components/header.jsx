function HeaderThis() {
  return (
    <>
      <header class="bg-[#c9bffd] font-poppins flex w-full flex-wrap py-4 text-sm md:flex-nowrap md:justify-start md:py-0 ">
        <nav class="mx-auto w-full px-4" aria-label="Global">
          <div class="relative md:flex md:items-center">
            <div class="flex items-center justify-between">
              <a
                class="link text-base-content link-neutral text-xl font-bold no-underline"
                href="#"
              >
                Andras Gotts
              </a>
              <div class="md:hidden">
                <button
                  type="button"
                  class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                  data-collapse="#navbar-mega-menu-click"
                  aria-controls="navbar-mega-menu-click"
                  aria-label="Toggle navigation"
                >
                  <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                  <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                </button>
              </div>
            </div>
            <div
              id="navbar-mega-menu-click"
              class="collapse hidden grow basis-full overflow-hidden rounded-lg transition-all duration-300 md:block"
            >
              <div class="flex flex-col rounded-lg max-md:mt-3 max-md:border max-md:p-2 md:flex-row md:items-center md:justify-end md:ps-5 md:pe-0.5 gap-2 max-md:border-base-content/20">
                <ul class="menu md:menu-horizontal text-base px-0 max-md:w-fit max-md:py-0 gap-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Me</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <div class="dropdown [--adaptive:none] [--auto-close:inside] [--mega-menu:true] [--strategy:static] md:[--strategy:absolute]">
                  <button
                    type="button"
                    class="dropdown-toggle btn btn-text text-base-content/80 dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-3"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    Projects
                    <span class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                  </button>
                  <div
                    class="dropdown-menu dropdown-open:opacity-100 start-0 top-full hidden w-full min-w-60 rounded-lg py-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute max-md:border max-md:shadow-none max-md:border-base-content/20"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <ul class="menu md:menu-horizontal rounded-box w-full max-xl:gap-4 p-0">
                      <li>
                        <a href="#" class="menu-title">
                          Services
                        </a>
                        <ul class="menu">
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
                        <a href="#" class="menu-title">
                          Corporate Solutions
                        </a>
                        <ul class="menu">
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
                        <a href="#" class="menu-title">
                          Product Offerings
                        </a>
                        <ul class="menu">
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
                            <a href="#" class="menu-title">
                              Open Source Projects
                            </a>
                            <ul class="menu">
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
