import { CiGlobe } from "react-icons/ci";
import { FaApple, FaTabletAlt } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const platformData = [
  { id: 1, value: 58, label: "Web Traffic", icon: CiGlobe },
  { id: 2, value: 87, label: "iOS Users", icon: FaApple },
  { id: 3, value: 58, label: "Android Users", icon: DiAndroid },
  { id: 4, value: 58, label: "Tablet Users", icon: FaTabletAlt },
];

const Platforms = () => {
  return (
    <div className="p-4 bg-[#1e293b] rounded-xl  border border-slate-700 shadow-lg shadow-black/20">
      <h1 className="text-2xl font-bol text-indigo-500">Platforms</h1>

      <div className="p-2 grid grid-cols-2 gap-8">
        {platformData.map((item) => (
          <div key={item.id} className="space-y-3">
            <h1 className="text-2xl font-bold text-green-400">{item.value}</h1>

            <p className="flex items-center space-x-2 text-white">
              <item.icon />
              <span>{item.label}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;