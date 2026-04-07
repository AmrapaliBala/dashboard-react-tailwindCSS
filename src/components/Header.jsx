import {GoBell} from "react-icons/go";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#0f172a]">
      <div className="text-white">
        <h1 className="text-xs">Welcome Back</h1>
        <p className="text-xl font-semibold">Riya</p>
      </div>

      <div className="flex items-center space-x-5"> 
        <div className="hidden md:flex">
            <input type="text" placeholder="Search..." className="bg-slate-800 text-white placeholder-gray-400 border border-slate-700 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-600"/>
        </div>

        <div className="flex items-center space-x-5">
            <button className="relative text-2xl text-gray-600">
                <GoBell size={28} className="text-green-400"/>
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-green-400 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">9</span>
            </button>

            <img className="w-8 g-8 rounded-full border-4 border-indigo-400" src="/fruit8.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
