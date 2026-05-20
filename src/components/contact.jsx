function ContactMainR() {
  const themailto = () => {
    window.location.href = "mailto:andras.gotts@outlook.com";
  };
  return (
    <>
      <div className="relative">
        {/* background??? */}
        <div className="w-full h-full absolute z-2 pointer-events-none"></div>
        <div className="grid grid-cols-8 grid-rows-10 gap-4 bg-[#0d0f12] z-10 font-poppins">
          {/*about me */}
          <div
            id="main1"
            className="col-span-6 col-start-2 row-span-6 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <div>
              <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-30 ... border-2 rounded-xl p-2">
                  <p>
                    <h1>EMAIL ME</h1>
                    <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                      andras.gotts@outlook.com
                    </h2>
                    <button
                      className="btn btn-circle btn-text [--btn-color:#2b3137]"
                      aria-label="mail"
                      onClick={themailto}
                    >
                      <span className="icon-[tabler--mail] size-8 shrink-0"></span>
                    </button>
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
export default ContactMainR;
