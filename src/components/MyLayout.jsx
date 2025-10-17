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
                    <img
                      src="andrasgottsportfolio/icons/c.svg"
                      alt="triangle with all three sides equal"
                      className="text-white"
                    />
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
                    <img
                      src="andrasgottsportfolio/icons/pytorch.svg"
                      alt="triangle with all three sides equal"
                      className="text-white"
                    />
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
