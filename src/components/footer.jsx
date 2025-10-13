function FooterThis() {
  return (
    <div>
      <footer class="footer bg-[#c9bffd] px-6 py-4 font-poppins">
        <div class="flex w-full flex-wrap items-center justify-between">
          <div class="flex items-center gap-2 text-xl font-bold text-base-content">
            <img
              className="mask mask-squircle size-8"
              src="/icons/extension_icon.png"
              alt="sydney"
              width="24"
              height="24"
            />
          </div>
          <aside class="grid-flow-col items-center">
            <p>
              {" "}
              ©2025{" "}
              <a class="link link-hover font-medium" href="#">
                Andras Gotts
              </a>{" "}
            </p>
          </aside>
          <div class="flex h-5 gap-4">
            <a href="#" class="link" aria-label="Github Link">
              <span class="icon-[tabler--brand-github] size-5"></span>
            </a>
            <a href="#" class="link" aria-label="Facebook Link">
              <span class="icon-[tabler--brand-linkedin] size-5"></span>
            </a>
            <a href="#" class="link" aria-label="Google Link">
              <span class="icon-[tabler--mail] size-5"></span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default FooterThis;
