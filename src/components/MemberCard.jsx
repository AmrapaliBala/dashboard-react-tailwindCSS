import { FaChevronRight } from 'react-icons/fa'
const MemberCard = ({ member }) => {
    return (
        <div className='p-6 bg-[#1e293b] rounded-xl space-y-4 border border-slate-700 shadow-lg shadow-black/20'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl text-white font-bold'>{member.total_members}</h1>
                <FaChevronRight className='text-white' />
            </div>

            <div>
                <p className='text-sm text-gray-400 mb-2'>{member.job}</p>
                <div className="relative">
                    <img src="/fruit8.jpg" alt="" className="w-8 h-8 rounded-full border-4 border-white" />
                    <img src="/fruit8.jpg" alt="" className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-4" />
                    <img src="/fruit8.jpg" alt="" className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-8" />
                </div>
            </div>
        </div>
    )
}

export default MemberCard
