import GridDistortion from "../components/GridDistortion";

//template idea https://www.behance.net/gallery/195890267/THANHT-VY-PORTFOLIO?l=4#

function MyLayout() {
  return (
    <>
      <div className="grid grid-cols-8 grid-rows-20 gap-4 bg-[#c9bffd] font-poppins">
        {/*about me */}
        <div
          id="main1"
          className="col-span-8 row-span-6 bg-[#b6aedb] border-2 rounded-xl p-2"
        >
          <div>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
              <div className="row-span-3 ... bg-rose-200 border-2 rounded-xl p-2">
                images?
              </div>
              <div className="col-span-2 ... bg-rose-200 border-2 rounded-xl p-2">
                <h1>Hi, I'm Andras Gotts</h1>
                <h2 class="font-bold font-SF leading-snug tracking-tight text-slate-800 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
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
              <div className="col-span-2 row-span-2 ... bg-rose-200 border-2 rounded-xl p-2">
                <p>beepidy boop</p>
              </div>
              <div className="col-span-2 row-span-2 ... bg-rose-200 border-2 rounded-xl p-2">
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
          className="col-span-8 row-span-6 row-start-7 bg-[#b6aedb] border-2 rounded-xl p-2"
        >
          <div className="card-group sm:flex *:not-last:border-e *:not-last:border-base-content/25 max-w-sm sm:max-w-full">
            <div className="card bg-rose-200">
              <figure>
                <span class="icon-[tabler--brand-git] size-25"></span>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">git</h5>
                <p>
                  Discover iconic landmarks, world-class museums, and exquisite
                  cuisine.
                </p>
              </div>
              <div className="card-footer">
                <p className="text-base-content/50 text-sm">
                  Card text content
                </p>
              </div>
            </div>
            <div className="card bg-rose-200">
              <figure>
                <span class="icon-[tabler--brand-github] size-25"></span>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">c++</h5>
                <p>
                  Visit ancient ruins, stunning basilicas, and enjoy delicious
                  Italian cuisine.
                </p>
              </div>
              <div className="card-footer">
                <p className="text-base-content/50 text-sm">
                  Card text content
                </p>
              </div>
            </div>
            <div className="card bg-rose-200">
              <figure>
                <span class="icon-[tabler--brand-python] size-25"></span>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">python</h5>
                <p>
                  Explore the vibrant city of Sydney, where every corner tells a
                  story.
                </p>
              </div>
              <div className="card-footer">
                <p className="text-base-content/50 text-sm">
                  Card text content
                </p>
              </div>
            </div>
            <div className="card bg-rose-200">
              <figure>
                <span class="icon-[tabler--sql] size-25"></span>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">SQL</h5>
                <p>
                  Discover iconic landmarks, world-class museums, and exquisite
                  cuisine.
                </p>
              </div>
              <div className="card-footer">
                <p className="text-base-content/50 text-sm">
                  Card text content
                </p>
              </div>
            </div>
            <div className="card bg-rose-200">
              <figure>
                <span class="icon-[tabler--brand-react] size-25"></span>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">React</h5>
                <p>
                  Visit ancient ruins, stunning basilicas, and enjoy delicious
                  Italian cuisine.
                </p>
              </div>
              <div className="card-footer">
                <p className="text-base-content/50 text-sm">
                  Card text content
                </p>
              </div>
            </div>
            <div className="card bg-rose-200">
              <figure>
                <span class="icon-[tabler--brand-typescript] size-25"></span>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">typescript</h5>
                <p>
                  Explore the vibrant city of Sydney, where every corner tells a
                  story.
                </p>
              </div>
              <div className="card-footer">
                <p className="text-base-content/50 text-sm">
                  Card text content
                </p>
              </div>
            </div>
            <div className="card bg-rose-200">
              <figure>
                <span class="icon-[tabler--brand-javascript] size-25"></span>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">javascript</h5>
                <p>
                  Discover iconic landmarks, world-class museums, and exquisite
                  cuisine.
                </p>
              </div>
              <div className="card-footer">
                <p className="text-base-content/50 text-sm">
                  Card text content
                </p>
              </div>
            </div>
            <div className="card bg-rose-200">
              <figure>
                <span class="icon-[tabler--brand-torchain] size-25"></span>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">pytorch</h5>
                <p>
                  Visit ancient ruins, stunning basilicas, and enjoy delicious
                  Italian cuisine.
                </p>
              </div>
              <div className="card-footer">
                <p className="text-base-content/50 text-sm">
                  Card text content
                </p>
              </div>
            </div>
            <div className="card bg-rose-200">
              <figure>
                <span class="icon-[tabler--letter-r-small] size-25"></span>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">r</h5>
                <p>
                  Explore the vibrant city of Sydney, where every corner tells a
                  story.
                </p>
              </div>
              <div className="card-footer">
                <p className="text-base-content/50 text-sm">
                  Card text content
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Projects */}
        <div
          id="main3"
          className="col-span-8 row-span-6 row-start-13 bg-[#b6aedb] border-2 rounded-xl p-2"
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="...">Project01</div>
            <div className="...">Project02</div>
            <div className="...">Project03</div>
            <div className="col-span-2 ...">Project04</div>
            <div className="...">Project05</div>
            <div className="...">Project06</div>
            <div className="col-span-2 ...">Project07</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyLayout;
