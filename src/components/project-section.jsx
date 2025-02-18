import ProjectList from "./project-list";

function Project() {
  return (
    <div
      id="projects"
      className="h-screen bg-transparent flex flex-col text-center content-center z-20"
    >
      <h1 className="pt-12 text-3xl text-slate-600 mb-4">Projects</h1>
      <div className="h-full flex flex-wrap justify-evenly items-center gap-4">
        <ProjectList
          url="https://github.com/hezkychunky/cashier-project"
          image="/cashier-page.jpg"
          title="Cashier Web-based Application"
          description="Designed & developed a web-based cashier app to accommodate retail transactions while meeting the business requirements.
"
        />
        <ProjectList
          url="https://laundry-web-seven.vercel.app"
          image="/laundry-summary.png"
          title="Laundry Web-based Application"
          description="Developed a web-based application for a laundry company that also offers pickup and delivery services.

"
        />
      </div>
    </div>
  );
}

export default Project;
