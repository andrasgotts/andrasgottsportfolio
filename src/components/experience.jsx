function ExperienceMainR() {
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
                <div className="row-span-30 ...  border-2 rounded-xl p-2">
                  <img
                    src="/andrasgottsportfolio/Barnados-logo.png"
                    alt="Barnados"
                  />
                  <p>
                    <h2 className="font-bold underline">
                      VOLUNTARY EXPERIENCE
                    </h2>

                    <h4>Barnardo’s superstore – York, UK</h4>

                    <h4>
                      Retail Online Research Volunteer April 2026 - Current
                    </h4>
                    <p>
                      Barnardo’s gets lots of donations, some of these can be
                      quite valuable. If a volunteer who is seperating donations
                      thinks an item could be worth more than £25, then they
                      will put it in a a seperate room rather than straight into
                      the shop store. My role is to research these items to see
                      whether or not they are actually valuable, if they are
                      then I create a listing for the item, add the gift aid
                      persons ID if applicable, and then add a label with the
                      listing ID to the item. I fill up a box with items and
                      when its full, I tape it up, tape a store ebay Id printed
                      piece of paper to the box, and then take the box to the
                      warehouse and place with the other ebay boxes.
                    </p>
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
export default ExperienceMainR;
