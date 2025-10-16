import SplashCursor from "./SplashCursor";

function FooterThis() {
  const btnClick = (mylink) => {
    window.open(mylink);
  };
  const themailto = () => {
    window.location.href = "mailto:andras.gotts@outlook.com";
  };
  return (
    <>
      <footer className="footer bg-[#0d0f12] px-6 py-4 font-poppins">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <img
              src="/andrasgottsportfolio/icons/ag.svg"
              alt="ag logo"
              className="size-5"
            />
          </div>
          <aside className="grid-flow-col items-center text-white">
            <p>
              {" "}
              ©2025{" "}
              <a className="link link-hover font-medium text-white" href="#">
                Andras Gotts
              </a>{" "}
            </p>
          </aside>
          <div className="flex h-5 gap-2">
            <button
              className="btn btn-circle btn-text [--btn-color:#2b3137]"
              aria-label="Github Outline Icon Button"
              onClick={() => btnClick("https://github.com/andrasgotts")}
            >
              <span className="icon-[tabler--brand-github] size-5 shrink-0"></span>
            </button>
            <button
              className="btn btn-circle btn-text [--btn-color:#0a66c2]"
              aria-label="Linkedin Outline Icon Button"
              onClick={() =>
                btnClick("https://www.linkedin.com/in/andrasgotts")
              }
            >
              <span className="icon-[tabler--brand-linkedin] size-5 shrink-0"></span>
            </button>
            <button
              className="btn btn-circle btn-text [--btn-color:#2b3137]"
              aria-label="mail"
              onClick={themailto}
            >
              <span className="icon-[tabler--mail] size-5 shrink-0"></span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
export default FooterThis;
