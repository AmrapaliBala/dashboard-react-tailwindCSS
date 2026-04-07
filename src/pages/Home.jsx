import ClientCard from "../components/ClientCard";
import MemberCard from "../components/MemberCard";
import Platforms from "../components/Platforms"
import ProjectCard from "../components/ProjectCard";
import ProjectStatistics from "../components/ProjectStatistics"

const projects = [
  {
    name: "E-commerce Platform Revamp",
    type: "Full Stack Development",
    date: "2024-06-12",
    members: ["Riya", "Aman", "Karan"],
    files: 12,
    progress: 65,
  },
  {
    name: "Fitness Tracking App",
    type: "Mobile Application",
    date: "2024-05-02",
    members: ["Neha", "Arjun", "Simran"],
    files: 8,
    progress: 40,
  },
  {
    name: "Social Media Campaign",
    type: "Digital Marketing",
    date: "2024-06-25",
    members: ["Ishita", "Rahul", "Dev"],
    files: 3,
    progress: 25,
  },
  {
    name: "AI Chatbot Integration",
    type: "AI / Automation",
    date: "2024-04-18",
    members: ["Vikram", "Sneha", "Ankit"],
    files: 10,
    progress: 80,
  },
];
const clients = [
  {
    name: "NovaTech Solutions",
    title: "Product Manager",
    date: "2024-06-01T10:30:00Z",
  },
  {
    name: "BrightEdge Marketing",
    title: "Marketing Head",
    date: "2024-05-18T14:00:00Z",
  },
  {
    name: "Skyline Industries",
    title: "Operations Lead",
    date: "2024-06-10T09:15:00Z",
  },
  {
    name: "PixelCraft Studios",
    title: "Creative Director",
    date: "2024-04-22T11:45:00Z",
  },
];
const members = [
  {
    total_members: 5,
    job: "UI/UX Designers",
  },
  {
    total_members: 10,
    job: "Frontend Developers",
  },
  {
    total_members: 6,
    job: "Backend Engineers",
  },
  {
    total_members: 4,
    job: "Mobile Developers",
  },
];
const Home = () => {
    return (
        <div className="p-5">
           <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <ProjectStatistics />
                <Platforms />
                <ProjectStatistics />
                <Platforms />
            </div>

            <div>
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-lg font-semibold text-white">Current Projects</h1>
                    <p className="text-sm underline text-orange-400">See All</p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {
                        projects && projects.map((project,index) => <ProjectCard key={index} project={project} />)
                    }
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-lg font-semibold text-white">Current Clients</h1>
                    <p className="text-sm underline text-orange-400">See All</p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {
                        clients && clients.map((client,index) => <ClientCard key={index} client={client} />)
                    }
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-lg font-semibold text-white">Members</h1>
                    <p className="text-sm underline text-orange-400">See All</p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {
                        members && members.map((member,index) => <MemberCard key={index} member={member} />)
                    }
                </div>
            </div>


        </div>
    )
}

export default Home