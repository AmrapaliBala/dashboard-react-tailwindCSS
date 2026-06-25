import { useState, useEffect } from "react";
import axios from "axios";
import ClientCard from "../components/ClientCard";
import MemberCard from "../components/MemberCard";
import Platforms from "../components/Platforms"
import ProjectCard from "../components/ProjectCard";
import ProjectStatistics from "../components/ProjectStatistics"

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [members, setMembers] = useState([]);

const getProjects = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products");
    setProjects(data.products.slice(5, 9));
  } catch (error) {
    console.log(error);
  }
};

const getClients = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/users");
    setClients(data.users.slice(0, 4));
  } catch (error) {
    console.log(error);
  }
};

const getMembers = async () => {
  try {
    const { data } = await axios.get("https://randomuser.me/api/?results=4");
    setMembers(data.results);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getProjects();
  getClients();
  getMembers();
}, []);
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
            projects && projects.map((project, index) => <ProjectCard key={index} project={project} />)
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
            clients && clients.map((client, index) => <ClientCard key={index} client={client} />)
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
            members && members.map((member, index) => <MemberCard key={index} member={member} />)
          }
        </div>
      </div>


    </div>
  )
}

export default Home