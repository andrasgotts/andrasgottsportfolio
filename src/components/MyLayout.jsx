import SplashCursor from "./SplashCursor";

function MyLayout() {
  const btnClick = (mylink) => {
    window.open(mylink, "_self");
  };
  return (
    <>
      <div className="relative">
        {/* background??? */}
        <div className="w-full h-full absolute z-2 pointer-events-none"></div>

        <div className="grid grid-cols-8 grid-rows-17 gap-4 font-poppins text-lg z-10 bg-[#0d0f12]">
          {/*about me */}
          <div
            id="main1"
            className="col-span-6 col-start-2 row-span-6 border-2 rounded-xl p-2 text-white"
          >
            <div>
              <div className="grid grid-cols-8 grid-rows-8 gap-4">
                <div className="col-span-2 col-start-2 row-span-2 row-start-2 ...  border-2 rounded-xl p-2 text-white">
                  images?
                </div>
                <div className="col-span-2 col-start-4 row-span-2 row-start-2 ...  border-2 rounded-xl p-2 text-white">
                  <h1>Hello, I'm Andras</h1>
                  <h2 className="font-bold font-SF leading-snug tracking-tight text-slate-800 mx-auto text-2xl lg:max-w-3xl lg:text-5xl">
                    Software Engineer
                  </h2>
                </div>
                <div className="col-span-2 col-start-4 row-span-2 row-start-4...  border-2 rounded-xl p-2 text-white">
                  <p>beepidy boop</p>
                </div>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div
            id="main2"
            className="col-span-6 col-start-2 row-span-4 row-start-7 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <h1 className="text-[#c91b68] text-4xl">Skills</h1>
            <div className="card-group sm:flex *:not-last:border-e *:not-last:border-base-content/25 max-w-sm sm:max-w-full animate-pulse">
              <div className="card bg-[#0d0f12] ">
                <figure>
                  <span className="text-white icon-[tabler--brand-git] size-25"></span>
                </figure>
              </div>
              <div className="card bg-[#0d0f12]">
                <figure>
                  <span className="size-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      style={{
                        "--darkreader-inline-fill":
                          "var(--darkreader-background-000000, #000000)",
                      }}
                      viewBox="-2.4 -2.4 28.8 28.8"
                    >
                      <path
                        id="SVGRepo_bgCarrier"
                        fill="#fff"
                        strokeWidth="0"
                        d="M9.166.33a2.25 2.25 0 0 0-2.332 0l-5.25 3.182A2.25 2.25 0 0 0 .5 5.436v5.128a2.25 2.25 0 0 0 1.084 1.924l5.25 3.182a2.25 2.25 0 0 0 2.332 0l5.25-3.182a2.25 2.25 0 0 0 1.084-1.924V5.436a2.25 2.25 0 0 0-1.084-1.924z"
                        style={{
                          "--darkreader-inline-fill":
                            "var(--darkreader-background-ffffff, #181a1b)",
                        }}
                        transform="matrix(1.8 0 0 1.8 -2.4 -2.4)"
                      ></path>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M6.078 12A5.93 5.93 0 0 1 12 6.078a5.95 5.95 0 0 1 5.129 2.959l-1.499.867 5.027-2.902a1.6 1.6 0 0 0-.543-.575l-7.345-4.24c-.424-.245-1.116-.245-1.539 0l-7.345 4.24c-.422.244-.768.844-.768 1.333v8.48c0 .245.086.517.226.758l3.529-2.038A5.9 5.9 0 0 1 6.078 12"></path>
                        <path d="M14.564 10.519A2.97 2.97 0 0 0 12 9.039a2.964 2.964 0 0 0-2.564 4.441L12 12z"></path>
                        <path d="m20.657 7.002-5.046 2.913-1.046.605-.001-.001L12 12l-2.563 1.48A2.96 2.96 0 0 0 12 14.961a2.97 2.97 0 0 0 2.565-1.481l2.563 1.483a5.94 5.94 0 0 1-5.129 2.959 5.93 5.93 0 0 1-5.128-2.962l-3.529 2.038c.14.242.332.453.543.575l7.345 4.24c.423.245 1.115.245 1.539 0l7.345-4.24c.211-.122.403-.333.543-.575s.226-.513.226-.758V7.76c0-.245-.086-.517-.226-.758m-2.735 5.327h-.658v.658h-.657v-.658h-.658v-.658h.658v-.658h.657v.658h.658zm2.468 0h-.658v.658h-.658v-.658h-.657v-.658h.657v-.658h.658v.658h.658z"></path>
                      </g>
                    </svg>
                  </span>
                </figure>
              </div>
              <div className="card bg-[#0d0f12]">
                <figure>
                  <span className="text-white icon-[tabler--brand-python] size-25"></span>
                </figure>
              </div>
              <div className="card bg-[#0d0f12]">
                <figure>
                  <span className="text-white icon-[tabler--sql] size-25"></span>
                </figure>
              </div>
              <div className="card bg-[#0d0f12]">
                <figure>
                  <span className="text-white icon-[tabler--brand-react] size-25"></span>
                </figure>
              </div>
            </div>
            <div className="card-group sm:flex *:not-last:border-e *:not-last:border-base-content/25 max-w-sm sm:max-w-full animate-pulse">
              <div className="card bg-[#0d0f12]">
                <figure>
                  <span className="text-white icon-[tabler--brand-typescript] size-25"></span>
                </figure>
              </div>
              <div className="card bg-[#0d0f12]">
                <figure>
                  <span className="text-white icon-[tabler--brand-javascript] size-25"></span>
                </figure>
              </div>
              <div className="card bg-[#0d0f12]">
                <figure>
                  <span className="size-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#fff"
                      style={{
                        "--darkreader-inline-fill":
                          "var(--darkreader-background-ffffff, #181a1b)",
                      }}
                      viewBox="0 0 32 32"
                    >
                      <g id="SVGRepo_iconCarrier">
                        <path d="M20.465 5.877a.687.687 0 1 1 0 .002zm-4.459-4.873L7.192 9.818a12.35 12.35 0 0 0-3.654 8.786c0 6.843 5.547 12.39 12.39 12.39 3.434 0 6.541-1.397 8.785-3.653l.001-.001a12.2 12.2 0 0 0 3.748-8.814c0-3.408-1.393-6.49-3.641-8.709l-.001-.001-2.179 2.178a9.312 9.312 0 0 1-6.585 15.896 9.312 9.312 0 0 1-6.585-15.896l5.807-5.806.727-.831z"></path>
                      </g>
                    </svg>
                  </span>
                </figure>
              </div>
              <div className="card bg-[#0d0f12]">
                <figure>
                  <span className="text-white icon-[tabler--letter-r-small] size-25"></span>
                </figure>
              </div>
            </div>
          </div>
          {/*Projects */}
          <div
            id="main3"
            className="col-span-6 col-start-2 row-span-6 row-start-11 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <div className="grid grid-cols-4 grid-rows-3 gap-4 border-2 rounded-xl p-2">
              <div className="col-span-1 row-span-3 border-2 rounded-xl p-2">
                <div className="card bg-primary text-primary-content w-fit h-fit">
                  <button
                    onClick={() => btnClick("/andrasgottsportfolio/projects")}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-primary-content mb-2.5">
                        Web Dev
                      </h5>
                      <p>
                        Enhance customer satisfaction by providing timely and
                        effective support solutions.
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
                <button
                  onClick={() => btnClick("/andrasgottsportfolio/projects")}
                >
                  <div className="card bg-primary text-primary-content">
                    <div className="card-body">
                      <h5 className="card-title text-primary-content mb-2.5">
                        AI programming
                      </h5>
                      <p>
                        Enhance customer satisfaction by providing timely and
                        effective support solutions.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
                <button
                  onClick={() => btnClick("/andrasgottsportfolio/projects")}
                >
                  <div className="card bg-primary text-primary-content">
                    <div className="card-body">
                      <h5 className="card-title text-primary-content mb-2.5">
                        Languages
                      </h5>
                      <p>
                        Enhance customer satisfaction by providing timely and
                        effective support solutions.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
                <button
                  onClick={() => btnClick("/andrasgottsportfolio/projects")}
                >
                  <div className="card bg-primary text-primary-content">
                    <div className="card-body">
                      <h5 className="card-title text-primary-content mb-2.5">
                        Data Analysis
                      </h5>
                      <p>
                        Enhance customer satisfaction by providing timely and
                        effective support solutions.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
                <button
                  onClick={() => btnClick("/andrasgottsportfolio/projects")}
                >
                  <div className="card bg-primary text-primary-content">
                    <div className="card-body">
                      <h5 className="card-title text-primary-content mb-2.5">
                        Game Dev
                      </h5>
                      <p>
                        Enhance customer satisfaction by providing timely and
                        effective support solutions.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
                <button
                  onClick={() => btnClick("/andrasgottsportfolio/projects")}
                >
                  <div className="card bg-primary text-primary-content">
                    <div className="card-body">
                      <h5 className="card-title text-primary-content mb-2.5">
                        Main project
                      </h5>
                      <p>
                        Enhance customer satisfaction by providing timely and
                        effective support solutions.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
                <button
                  onClick={() => btnClick("/andrasgottsportfolio/projects")}
                >
                  <div className="card bg-primary text-primary-content">
                    <div className="card-body">
                      <h5 className="card-title text-primary-content mb-2.5">
                        Testing
                      </h5>
                      <p>
                        Enhance customer satisfaction by providing timely and
                        effective support solutions.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyLayout;
