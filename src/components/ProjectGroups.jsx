function ProjectGroups() {
  return (
    <>
      <h1 className="text-[#c91b68] text-4xl items-center align-middle text-center p-8">
        Projects
      </h1>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 rounded-xl p-2">
        <div className="col-span-1 row-span-3 border-2 rounded-xl p-2">
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
                  ● I made a restaurant website for a made up hungarian
                  restaurant. This included getting menu items from a database
                  and implementing CRUD for the menu.
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
        <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Languages
                </h5>
                <p>
                  ● I made a restaurant website for a made up hungarian
                  restaurant. This included getting menu items from a database
                  and implementing CRUD for the menu.
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
        <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Data Analysis
                </h5>
                <p>
                  ● I made a restaurant website for a made up hungarian
                  restaurant. This included getting menu items from a database
                  and implementing CRUD for the menu.
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
                  ● I made a restaurant website for a made up hungarian
                  restaurant. This included getting menu items from a database
                  and implementing CRUD for the menu.
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
                  ● I made a restaurant website for a made up hungarian
                  restaurant. This included getting menu items from a database
                  and implementing CRUD for the menu.
                </p>
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
        <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-full h-full">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Game Dev
                </h5>
                <p>
                  ● I made a restaurant website for a made up hungarian
                  restaurant. This included getting menu items from a database
                  and implementing CRUD for the menu.
                </p>
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
