const Loading = () => {
  return (
    <div className='px-6 py-3 bg-white shadow rounded-lg flex gap-5 cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>
      {/* Left */}
      <div className='flex flex-col gap-3 justify-center'>
        <div className='object-cover size-20 rounded-full bg-slate-300 animate-pulse' />
        <div className='flex flex-col gap-1'>
          <div className='h-3 w-full bg-slate-300 rounded-full' />
          <div className='h-2 w-full bg-slate-300 rounded-full mt-1' />
          <div className='h-2 w-3/4 bg-slate-300 rounded-full' />
        </div>
      </div>

      {/* Right */}
      <div className='py-3 w-3/4'>
        <div className='h-4 bg-slate-300 rounded-full w-64' />
        <div className='poppins-regular bg-slate-300 text-white h-4 w-20 text-xs px-3 py-1 mb-1 inline-block rounded-full mt-1' />
        <div className='flex flex-col gap-2 mt-3'>
          <div className='h-3 w-full bg-slate-300 rounded-full' />
          <div className='h-3 w-full bg-slate-300 rounded-full' />
          <div className='h-3 w-3/4 bg-slate-300 rounded-full' />
        </div>

        <div className='h-3 w-1/4 bg-slate-300 rounded-full mt-5' />
        <div className='h-3 w-1/4 bg-slate-300 rounded-full mt-1' />
      </div>
    </div>
  )
}

export default Loading
