function MyLayout() {
  const btnClick = (mylink) => {
    window.open(mylink, "_self");
  };
  return (
    <>
      <div className="grid grid-cols-8 grid-rows-19 gap-4 bg-[#0d0f12] font-poppins text-lg">
        {/*about me */}
        <div
          id="main1"
          className="col-span-8 row-span-6 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
        >
          <div>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
              <div className="row-span-3 ...  border-2 rounded-xl p-2 text-white">
                images?
              </div>
              <div className="col-span-2 ...  border-2 rounded-xl p-2 text-white">
                <h1>Hi, I'm Andras Gotts</h1>
                <h2 className="font-bold font-SF leading-snug tracking-tight text-slate-800 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                  <span className="text-[#00ce7c]">S</span>
                  <span className="text-[#00d07e]">o</span>
                  <span className="text-[#01d37f]">f</span>
                  <span className="text-[#01d581]">t</span>
                  <span className="text-[#01d882]">w</span>
                  <span className="text-[#01da84]">a</span>
                  <span className="text-[#02dc85]">r</span>
                  <span className="text-[#02df87]">e</span>
                  <span className="text-[#02e188]"> </span>
                  <span className="text-[#02df87]">E</span>
                  <span className="text-[#02dc85]">n</span>
                  <span className="text-[#01da84]">g</span>
                  <span className="text-[#01d882]">i</span>
                  <span className="text-[#01d581]">n</span>
                  <span className="text-[#01d37f]">e</span>
                  <span className="text-[#00d07e]">e</span>
                  <span className="text-[#00ce7c]">r</span>
                </h2>
              </div>
              <div className="col-span-2 row-span-2 ...  border-2 rounded-xl p-2 text-white">
                <p>beepidy boop</p>
              </div>
              <div className="col-span-2 row-span-2 ...  border-2 rounded-xl p-2 text-white">
                <p>
                  Education: Bsc Software Engineering from the University of
                  Chester
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div
          id="main2"
          className="col-span-8 row-span-6 row-start-7 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
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
                <span className="text-white bg-white w-15 h-10">
                  <img
                    src="andrasgottsportfolio/icons/c++.svg"
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
                <span className="text-white icon-[tabler--brand-torchain] size-25"></span>
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
          className="col-span-8 row-span-6 row-start-13 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
        >
          <div className="grid grid-cols-4 grid-rows-3 gap-4 border-2 rounded-xl p-2">
            <div className="col-span-1 row-span-3 border-2 rounded-xl p-2">
              <div className="card bg-primary text-primary-content">
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
    </>
  );
}
export default MyLayout;
