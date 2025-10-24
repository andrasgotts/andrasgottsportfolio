import SplashCursor from "./SplashCursor";
import ResumePDF from "../assets/AndrasGottsCV2.pdf";
import Skills from "./Skills";
import ProjectGroups from "./ProjectGroups";

function MyLayout() {
  const DownloadButton = (props) => {
    const downloadFile = () => {
      window.location.href =
        "https://andrasgotts.github.io/andrasgottsportfolio//src/assets/AndrasGottsCV2.pdf";
    };
    return <button onClick={downloadFile} />;
  };
  const btnClick = (mylink) => {
    window.open(mylink, "_self");
  };
  return (
    <>
      <div className="relative">
        {/* background??? */}
        <div className="w-full h-full absolute z-2 pointer-events-none"></div>

        <div className="grid grid-cols-8 grid-rows-16 gap-4 font-poppins text-lg z-10 bg-[#0d0f12]">
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
                  <a href={ResumePDF} download="ResumePDF" target="_blank">
                    <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                      <span className="icon-[tabler--download] size-5 shrink-0"></span>
                      Resume
                    </button>
                  </a>
                  <DownloadButton />
                </div>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div
            id="main2"
            className="col-span-6 col-start-2 row-span-3 row-start-7 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <Skills />
          </div>
          {/*Projects */}
          <div
            id="main3"
            className="col-span-6 col-start-2 row-span-6 row-start-10 bg-[#0d0f12] rounded-xl p-2 text-white"
          >
            <ProjectGroups />
          </div>
        </div>
      </div>
    </>
  );
}
export default MyLayout;
