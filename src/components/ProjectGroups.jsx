function ProjectGroups() {
  return (
    <>
      <h1 className="text-[#c91b68] text-4xl items-center align-middle text-center p-8">
        Projects
      </h1>
      <div className="grid grid-cols-6 grid-rows-3 gap-4 rounded-xl p-2">
        <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                {/*"image"*/}

                <h5 className="card-title text-primary-content mb-2.5">
                  {/*"title"*/}
                  Web Dev
                </h5>
                {/*"short description"*/}
                <p>
                  ● I made a restaurant website for a made up hungarian
                  restaurant. This included getting menu items from a database
                  and implementing CRUD for the menu.
                </p>
                <p>
                  ● I made my portfolio website (this one) using React,
                  Tailwind, and Astro.
                </p>
                <p>{/*"skills/things used"*/}</p>
                <div className="flex flex-wrap">
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    react
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    javascript
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    tailwind
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    astro
                  </button>
                </div>

                <div className="flex flex-wrap">
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    .net
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    c#
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    razor pages
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    ssms
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    plesk
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    linq+sql
                  </button>
                </div>

                <p>{/*"source? githublink"*/}</p>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  AI programming
                </h5>
                <p>
                  ● My main university project involved me using Van Gogh
                  artworks to create new ones. I implemented GAN, DCGAN,
                  CYCLE-GAN, and DDPM (diffusion) methods. I used PyTorch, and a
                  number of other libraries. For my UI I first used a local
                  website using Flask for the back-end, and I ended up creating
                  a UI with QT6 to replace the local website.
                </p>
                <p>
                  ● Implemented a genetic algorithm for to find the fastest path
                  and compare the results to A* and Dijkstra's algorithm
                </p>
                <div className="flex flex-wrap">
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    python
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    pytorch
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    hugging face
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    GAN
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    DCGAN
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    CYCLE-GAN
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    diffusion
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Languages
                </h5>
                <p>
                  ● C++ is my main language that I have used for many years,
                  this is the language I am most confident with. I have done a
                  number of projects in this language, including my SDL2 game,
                  blackjack game, and genetic algorithm path finding program,
                  etc...
                </p>
                <p>
                  ● Python is my second most proficient language. I used this
                  for my main project, making a data warehouse, etc...
                </p>
                <p>
                  ● C#, this is the Language I am currently learning. I have
                  worked with C# before in unity, and on my restaurant website
                  project.
                </p>
                <div className="flex flex-wrap">
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    c++
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    python
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    future (c#)
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Data Analysis
                </h5>
                <p>
                  ● Designed a data warehouse then migrated data from an
                  existing relational data structure with JSON, CSV, and SQL
                  files for data. This was done using Python and PANDAS.
                </p>
                <p>
                  ● Analysed a questionnaire for students opinions on AI using
                  R.
                </p>
                <p>
                  ● Implemented k-means clustering from scratch to use with a
                  dataset of countries with their GDP and development indicators
                </p>
              </div>
              <div className="flex flex-wrap">
                <button className="btn btn-outline btn-primary rounded-full btn-sm">
                  python
                </button>
                <button className="btn btn-outline btn-primary rounded-full btn-sm">
                  pandas
                </button>
                <button className="btn btn-outline btn-primary rounded-full btn-sm">
                  sql
                </button>
                <button className="btn btn-outline btn-primary rounded-full btn-sm">
                  ssms
                </button>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Main project
                </h5>
                <p>
                  ● My main university project involved me using Van Gogh
                  artworks to create new ones. I implemented GAN, DCGAN,
                  CYCLE-GAN, and DDPM (diffusion) methods. I used PyTorch, and a
                  number of other libraries. For my UI I first used a local
                  website using Flask for the back-end, and I ended up creating
                  a UI with QT6 to replace the local website.
                </p>
                <div className="flex flex-wrap">
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    python
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    pandas
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    sql
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    ssms
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Testing
                </h5>
                <p>
                  ● Tested a basic banking application using microsoft's c++
                  testing library
                </p>
                <p>● Audited a website</p>
                <div className="flex flex-wrap">
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    c++ test framework
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    auditing
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Game Dev
                </h5>
                <p>● stuffs</p>
                <div className="flex flex-wrap">
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    unity
                  </button>
                  <button className="btn btn-outline btn-primary rounded-full btn-sm">
                    godot
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectGroups;
