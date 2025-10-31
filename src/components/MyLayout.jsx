import ResumePDF from "../assets/AndrasGottsCV2.pdf";
import Skills from "./Skills";
import ProjectGroups from "./ProjectGroups";

function MyLayout() {
  const btnClick = (mylink) => {
    window.open(mylink, "_self");
  };
  return (
    <>
      <div className="relative">
        {/* background??? */}
        <div className="w-full h-full absolute z-2 pointer-events-none"></div>

        <div className="grid grid-cols-8 grid-rows-13 gap-4 font-poppins text-lg z-10 bg-[#0d0f12]">
          {/*about me */}
          <div
            id="main1"
            className="col-span-6 col-start-2 row-span-4 rounded-xl p-2 text-white"
          >
            <div className="grid grid-cols-8 grid-rows-8 gap-4">
              <div className="col-span-2 col-start-3 row-span-2 row-start-2 ... rounded-xl p-2 text-white">
                <img src="/andrasgottsportfolio/icons/plant.webp" alt="plant" />
              </div>
              <div className="col-span-3 col-start-5 row-span-2 row-start-2 ... rounded-xl p-2 text-6xl text-white font-bold">
                <h1>Hello, I'm</h1>
                <h1> Andras</h1>
                <h2 className="leading-snug tracking-tight text-purple-500 mx-auto text-2xl">
                  Software Engineer
                </h2>
                <h2 className="leading-snug tracking-tight text-purple-500 mx-auto text-2xl">
                  I'm a passionate programmer.
                </h2>
                <h2 className="leading-snug tracking-tight text-orange-400 mx-auto text-2xl">
                  This site is still under development!
                </h2>
                <a href={ResumePDF} download="ResumePDF" target="_blank">
                  <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    <span className="icon-[tabler--download] size-5 shrink-0"></span>
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div
            id="main2"
            className="col-span-6 col-start-2 row-span-3 row-start-5 bg-[#0d0f12] rounded-xl p-2 text-white"
          >
            <Skills />
          </div>
          {/*Projects */}
          <div
            id="main3"
            className="col-span-6 col-start-2 row-span-6 row-start-8 bg-[#0d0f12] rounded-xl p-2 text-white"
          >
            <ProjectGroups />
          </div>
        </div>
      </div>
    </>
  );
}
export default MyLayout;
