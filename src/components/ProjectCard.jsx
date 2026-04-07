import {TiAttachment} from "react-icons/ti"

const ProjectCard = ({ project }) => {
    return (
        <div className="p-6 bg-[#1e293b] rounded-xl space-y-5 border border-slate-700 shadow-lg shadow-black/20">
            <div>
                <h1 className="text-xl font-semibold text-white">{project.name}</h1>
                <p className="text-sm text-gray-500">{project.type}</p>
            </div>

            <p><span className="text-xs p-2 rounded bg-gray-100">{project.date}</span></p>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="w-[40%] bg-indigo-500 rounded-full h-2"></div>
            </div>

            <div className="flex justify-between items-center">
                <div className="relative">
                    <img src="/fruit8.jpg" alt="" className="w-8 h-8 rounded-full border-4 border-white"/>
                    <img src="/fruit8.jpg" alt="" className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-4"/>
                    <img src="/fruit8.jpg" alt="" className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-8"/>
                </div>

                <p className="flex space-x-1 items-center text-gray-400">
                    <TiAttachment className="text-green-400"/>
                    <span>{project.files}files</span>
                </p>
            </div>
        </div>
    )
}

export default ProjectCard
