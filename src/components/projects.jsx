function ProjectsR() {
  return (
    <>
      <div className="relative">
        {/* background??? */}
        <div className="w-full h-full absolute z-2 pointer-events-none"></div>
        {/**sssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
        <div className="bg-[#0d0f12] z-10 font-poppins">
          <nav
            className="tabs tabs-bordered overflow-x-auto justify-center"
            aria-label="Tabs"
            role="tablist"
            aria-orientation="horizontal"
          >
            <button
              type="button"
              className="tab active-tab:tab-active active"
              id="tabs-icons-item-1"
              data-tab="#tabs-icons-1"
              aria-controls="tabs-icons-1"
              role="tab"
              aria-selected="true"
            >
              <span className="icon-[tabler--home] size-5 shrink-0 me-2"></span>
              Home
            </button>
            <button
              type="button"
              className="tab active-tab:tab-active"
              id="tabs-icons-item-2"
              data-tab="#tabs-icons-2"
              aria-controls="tabs-icons-2"
              role="tab"
              aria-selected="false"
            >
              <span className="icon-[tabler--user] size-5 shrink-0 me-2"></span>
              Profile
            </button>
            <button
              type="button"
              className="tab active-tab:tab-active"
              id="tabs-icons-item-3"
              data-tab="#tabs-icons-3"
              aria-controls="tabs-icons-3"
              role="tab"
              aria-selected="false"
            >
              <span className="icon-[tabler--message] size-5 shrink-0 me-2"></span>
              Messages
            </button>
          </nav>

          <div className="mt-3 justify-center">
            <div
              id="tabs-icons-1"
              role="tabpanel"
              aria-labelledby="tabs-icons-item-1"
            >
              <p className="text-base-content/80">
                Welcome to the{" "}
                <span className="text-base-content font-semibold">
                  Home tab!
                </span>{" "}
                Explore the latest updates and news here.
              </p>
            </div>
            <div
              id="tabs-icons-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-icons-item-2"
            >
              <p className="text-base-content/80">
                This is your{" "}
                <span className="text-base-content font-semibold">Profile</span>{" "}
                tab, where you can update your personal information and manage
                your account details.
              </p>
              <div className="grid grid-cols-8 grid-rows-12 gap-4 bg-[#0d0f12] z-10 font-poppins">
                <div
                  id="main1"
                  className="col-span-6 col-start-2 row-span-2 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
                >
                  <div className="grid grid-flow-col grid-rows-3 gap-4">
                    <div className="row-span-3 ...  border-2 rounded-xl p-2">
                      images?
                    </div>
                    <div className="col-span-2 ...  border-2 rounded-xl p-2">
                      <h1>Hi, I'm Andras Gotts</h1>
                      <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                        Languages
                      </h2>
                    </div>
                    <div className="col-span-2 row-span-2 ... border-2 rounded-xl p-2">
                      <p>beepidy boop</p>
                    </div>
                    <div className="col-span-2 row-span-3 ... border-2 rounded-xl p-2">
                      <p>
                        Education: Bsc Software Engineering from the University
                        of Chester
                      </p>
                    </div>
                  </div>
                </div>
                {/* main2 */}
                <div
                  id="main2"
                  className="col-span-6 col-start-2 row-span-2 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
                >
                  <div>
                    <div className="grid grid-flow-col grid-rows-3 gap-4">
                      <div className="row-span-3 ... border-2 rounded-xl p-2">
                        images?
                      </div>
                      <div className="col-span-2 ... border-2 rounded-xl p-2">
                        <h1>Hi, I'm Andras Gotts</h1>
                        <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                          Web Development
                        </h2>
                      </div>
                      <div className="col-span-2 row-span-2 ... border-2 rounded-xl p-2">
                        <p>beepidy boop</p>
                      </div>
                      <div className="col-span-2 row-span-3 ... border-2 rounded-xl p-2">
                        <p>
                          Education: Bsc Software Engineering from the
                          University of Chester
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabs-icons-3"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-icons-item-3"
            >
              <p className="text-base-content/80">
                <span className="text-base-content font-semibold">
                  Messages:
                </span>{" "}
                View your recent messages, chat with friends, and manage your
                conversations.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 grid-rows-12 gap-4 bg-[#0d0f12] z-10 font-poppins">
          {/*about me */}
          <div
            id="main1"
            className="col-span-6 col-start-2 row-span-2 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <div className="grid grid-flow-col grid-rows-3 gap-4">
              <div className="row-span-3 ...  border-2 rounded-xl p-2">
                images?
              </div>
              <div className="col-span-2 ...  border-2 rounded-xl p-2">
                <h1>Hi, I'm Andras Gotts</h1>
                <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                  Languages
                </h2>
              </div>
              <div className="col-span-2 row-span-2 ... border-2 rounded-xl p-2">
                <p>beepidy boop</p>
              </div>
              <div className="col-span-2 row-span-3 ... border-2 rounded-xl p-2">
                <p>
                  Education: Bsc Software Engineering from the University of
                  Chester
                </p>
              </div>
            </div>
          </div>
          {/* main2 */}
          <div
            id="main2"
            className="col-span-6 col-start-2 row-span-2 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <div>
              <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 ... border-2 rounded-xl p-2">
                  images?
                </div>
                <div className="col-span-2 ... border-2 rounded-xl p-2">
                  <h1>Hi, I'm Andras Gotts</h1>
                  <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                    Web Development
                  </h2>
                </div>
                <div className="col-span-2 row-span-2 ... border-2 rounded-xl p-2">
                  <p>beepidy boop</p>
                </div>
                <div className="col-span-2 row-span-3 ... border-2 rounded-xl p-2">
                  <p>
                    Education: Bsc Software Engineering from the University of
                    Chester
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* main3 */}
          <div
            id="main3"
            className="col-span-6 col-start-2 row-span-2 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <div>
              <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 ... border-2 rounded-xl p-2">
                  images?
                </div>
                <div className="col-span-2 ... border-2 rounded-xl p-2">
                  <h1>Hi, I'm Andras Gotts</h1>
                  <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                    Testing
                  </h2>
                </div>
                <div className="col-span-2 row-span-2 ... border-2 rounded-xl p-2">
                  <p>beepidy boop</p>
                </div>
                <div className="col-span-2 row-span-3 ... border-2 rounded-xl p-2">
                  <p>
                    Education: Bsc Software Engineering from the University of
                    Chester
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* main4 */}
          <div
            id="main4"
            className="col-span-6 col-start-2 row-span-2 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <div>
              <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 ... border-2 rounded-xl p-2">
                  images?
                </div>
                <div className="col-span-2 ... border-2 rounded-xl p-2">
                  <h1>Hi, I'm Andras Gotts</h1>
                  <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                    Data analysis
                  </h2>
                </div>
                <div className="col-span-2 row-span-2 ... border-2 rounded-xl p-2">
                  <p>beepidy boop</p>
                </div>
                <div className="col-span-2 row-span-3 ... border-2 rounded-xl p-2">
                  <p>
                    Education: Bsc Software Engineering from the University of
                    Chester
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* main5 */}
          <div
            id="main5"
            className="col-span-6 col-start-2 row-span-2 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <div>
              <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 ... border-2 rounded-xl p-2">
                  images?
                </div>
                <div className="col-span-2 ... border-2 rounded-xl p-2">
                  <h1>Hi, I'm Andras Gotts</h1>
                  <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                    Game Dev
                  </h2>
                </div>
                <div className="col-span-2 row-span-2 ... border-2 rounded-xl p-2">
                  <p>beepidy boop</p>
                </div>
                <div className="col-span-2 row-span-3 ... border-2 rounded-xl p-2">
                  <p>
                    Education: Bsc Software Engineering from the University of
                    Chester
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* main6 */}
          <div
            id="main6"
            className="col-span-6 col-start-2 row-span-2 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <div>
              <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 ... border-2 rounded-xl p-2">
                  images?
                </div>
                <div className="col-span-2 ... border-2 rounded-xl p-2">
                  <h1>Hi, I'm Andras Gotts</h1>
                  <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                    AI programming
                  </h2>
                </div>
                <div className="col-span-2 row-span-2 ... border-2 rounded-xl p-2">
                  <p>beepidy boop</p>
                </div>
                <div className="col-span-2 row-span-3 ... border-2 rounded-xl p-2">
                  <p>
                    Education: Bsc Software Engineering from the University of
                    Chester
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectsR;
