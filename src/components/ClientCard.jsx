const ClientCard = ({client}) => {
  return (
    <div className='p-6 bg-[#1e293b] rounded-xl space-y-4 border border-slate-700 shadow-lg shadow-black/20'>
      <div>
        <h1 className='text-xl text-white font-semibold'>{client.firstName} {client.lastName}</h1>
        <p className='text-sm text-gray-400'>{client.company.department}</p>
      </div>

      <p className='text-xs text-gray-300'>{client.email}</p>
    </div>
  )
}

export default ClientCard
