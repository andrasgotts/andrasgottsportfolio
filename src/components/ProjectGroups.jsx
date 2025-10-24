function ProjectGroups() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 border-2 rounded-xl p-2">
        <div className="col-span-1 row-span-3 border-2 rounded-xl p-2">
          <div className="card bg-primary text-primary-content w-fit h-fit">
            <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
              <div className="card-body">
                {/*"image"*/}

                <h5 className="card-title text-primary-content mb-2.5">
                  {/*"title"*/}
                  Web Dev
                </h5>
                <p>
                  {/*"short description"*/}
                  Enhance customer satisfaction by providing timely and
                  effective support solutions.
                </p>
                <p>{/*"skills/things used"*/}</p>
                <div className="flex">
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

                <p>{/*"source? githublink"*/}</p>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
          <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  AI programming
                </h5>
                <p>
                  Enhance customer satisfaction by providing timely and
                  effective support solutions.
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
          <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Languages
                </h5>
                <p>
                  Enhance customer satisfaction by providing timely and
                  effective support solutions.
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
          <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Data Analysis
                </h5>
                <p>
                  Enhance customer satisfaction by providing timely and
                  effective support solutions.
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="col-span-2 row-span-1 border-2 rounded-xl p-2">
          <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Game Dev
                </h5>
                <p>
                  Enhance customer satisfaction by providing timely and
                  effective support solutions.
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
          <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Main project
                </h5>
                <p>
                  Enhance customer satisfaction by providing timely and
                  effective support solutions.
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="col-span-1 row-span-1 border-2 rounded-xl p-2">
          <button onClick={() => btnClick("/andrasgottsportfolio/projects")}>
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h5 className="card-title text-primary-content mb-2.5">
                  Testing
                </h5>
                <p>
                  Enhance customer satisfaction by providing timely and
                  effective support solutions.
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
export default ProjectGroups;
