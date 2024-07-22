import Contact from "./contact";
import ProjectList from "./project-list";

function Project () {
   return (
      <div id="projects" className="h-screen bg-transparent flex flex-col text-center content-center z-10">
         <div className="basis-1/4 pt-11 text-3xl text-slate-600">Projects</div>
         <div className="basis-2/3">
            <ProjectList />
         </div>
         <div className="basis-1/3 pt-6 text-3xl text-slate-600">
         Contact
            <Contact />
         </div>
      </div>
   )
}

export default Project;