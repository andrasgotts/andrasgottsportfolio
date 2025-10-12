import GridDistortion from "../components/GridDistortion";

//template idea https://www.behance.net/gallery/195890267/THANHT-VY-PORTFOLIO?l=4#

function MyLayout() {
  return (
    <>
      <div className="grid grid-cols-8 grid-rows-20 gap-4">
        {/*HELLO */}
        <div
          id="main1"
          className="col-span-8 row-span-6 bg-amber-300 border-2 rounded-xl p-2"
        >
          {/*about me */}
          <div>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
              <div className="row-span-3 ... bg-rose-200 border-2 rounded-xl p-2">
                images?
              </div>
              <div className="col-span-2 ... bg-rose-200 border-2 rounded-xl p-2">
                About Me
              </div>
              <div className="col-span-2 row-span-2 ... bg-rose-200 border-2 rounded-xl p-2">
                Block of text
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div
          id="main2"
          className="col-span-8 row-span-6 row-start-7 bg-amber-300 border-2 rounded-xl p-2"
        >
          <div className="card-group sm:flex *:not-last:border-e *:not-last:border-base-content/25 max-w-sm sm:max-w-full">
            <div className="card">
              <figure>
                <img
                  className="mask mask-squircle size-25"
                  src="/icons/Git_icon.png"
                  alt="paris"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">Travel to Paris</h5>
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
            <div className="card">
              <figure>
                <img
                  className="mask mask-squircle size-25"
                  src="/icons/react.png"
                  alt="rome"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">Travel to Rome</h5>
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
            <div className="card">
              <figure>
                <img
                  className="mask mask-squircle size-25"
                  src="/icons/c++.png"
                  alt="sydney"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">Travel to Sydney</h5>
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
            <div className="card">
              <figure>
                <img
                  className="mask mask-squircle size-25"
                  src="/icons/js.png"
                  alt="paris"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">Travel to Paris</h5>
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
            <div className="card">
              <figure>
                <img
                  className="mask mask-squircle size-25"
                  src="/icons/python.png"
                  alt="rome"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">Travel to Rome</h5>
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
            <div className="card">
              <figure>
                <img
                  className="mask mask-squircle size-25"
                  src="/icons/r.webp"
                  alt="sydney"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">Travel to Sydney</h5>
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
            <div className="card">
              <figure>
                <img
                  className="mask mask-squircle size-25"
                  src="/icons/sql.webp"
                  alt="paris"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">Travel to Paris</h5>
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
            <div className="card">
              <figure>
                <img
                  className="mask mask-squircle size-25"
                  src="/icons/Typescript.png"
                  alt="rome"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">Travel to Rome</h5>
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
            <div className="card">
              <figure>
                <img
                  className="mask mask-squircle size-25"
                  src="/icons/pytorch-logo.jpeg"
                  alt="sydney"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">Travel to Sydney</h5>
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
          className="col-span-8 row-span-6 row-start-13 bg-amber-300 border-2 rounded-xl p-2"
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="...">Education</div>
            <div className="...">Skills</div>
            <div className="...">Experience</div>
            <div className="col-span-2 ...">04</div>
            <div className="...">05</div>
            <div className="...">06</div>
            <div className="col-span-2 ...">07</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyLayout;
