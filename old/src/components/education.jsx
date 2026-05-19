function EducationMainR() {
  return (
    <>
      <div className="relative">
        {/* background??? */}
        <div className="w-full h-full absolute z-2 pointer-events-none"></div>
        <div className="grid grid-cols-8 grid-rows-6 gap-4 bg-[#0d0f12] z-10 font-poppins">
          {/*about me */}
          <div
            id="main1"
            className="col-span-6 col-start-2 row-span-6 bg-[#0d0f12] border-2 rounded-xl p-2 text-white"
          >
            <div>
              <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 ...  border-2 rounded-xl p-2">
                  <p>
                    2025 Education: Bsc Software Engineering from the University
                    of Chester
                  </p>
                </div>
                <div className="col-span-2 ...  border-2 rounded-xl p-2">
                  <h1>Hi, I'm Andras Gotts</h1>
                  <h2 className="font-bold font-SF leading-snug tracking-tight text-teal-400 mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                    Education!!!!
                  </h2>
                </div>
                <div className="col-span-2 row-span-2 ...  border-2 rounded-xl p-2">
                  <h1>A-Levels - 2020</h1>
                  <h2>
                    Predicated grades as exams were cancelled due to covid
                    outbreak
                  </h2>
                  <div className="relative overflow-x-auto">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Subject
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Grade (A-F)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-gray-800 border-b">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap text-white"
                            >
                              Geography
                            </th>
                            <td className="px-6 py-4 font-medium">A</td>
                          </tr>
                          <tr className="bg-gray-800 border-b">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              Computer Science
                            </th>
                            <td className="px-6 py-4 font-medium">C</td>
                          </tr>
                          <tr className="bg-gray-800">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              Maths
                            </th>
                            <td className="px-6 py-4 font-medium">C</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h2>UCAS points = 112</h2>
                </div>
                <div className="col-span-2 row-span-2 ...  border-2 rounded-xl p-2">
                  <h1>GCSEs - 2018</h1>
                  <div className="relative overflow-x-auto">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left rtl:text-right  text-gray-400">
                        <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Subject
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Grade (1-9)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap text-white"
                            >
                              Geography
                            </th>
                            <td className="px-6 py-4 font-medium">6</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              Computer Science
                            </th>
                            <td className="px-6 py-4 font-medium">6</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              Maths
                            </th>
                            <td className="px-6 py-4 font-medium">7</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              Physics
                            </th>
                            <td className="px-6 py-4 font-medium">5</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              Chemistry
                            </th>
                            <td className="px-6 py-4 font-medium">6</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              Biology
                            </th>
                            <td className="px-6 py-4 font-medium">5</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              English lit
                            </th>
                            <td className="px-6 py-4 font-medium">5</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              English lang
                            </th>
                            <td className="px-6 py-4 font-medium">5</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              German
                            </th>
                            <td className="px-6 py-4 font-medium">6</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              D&T
                            </th>
                            <td className="px-6 py-4 font-medium">C</td>
                          </tr>
                          <tr className=" border-b bg-gray-800  border-gray-200">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              Further Maths
                            </th>
                            <td className="px-6 py-4 font-medium">C</td>
                          </tr>
                          <tr className=" bg-gray-800">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                            >
                              Spoken Language
                            </th>
                            <td className="px-6 py-4 font-medium">Merit</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EducationMainR;
