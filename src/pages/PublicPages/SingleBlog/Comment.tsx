import { FaRegHeart } from 'react-icons/fa'

const Comment = () => {
  return (
    <div className='bg-white px-4 py-6 flex flex-col gap-5 rounded-lg border border-slate-20'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
          <img
            className='size-12 rounded-full'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
          <div>
            <h6 className='poppins-medium text-md'>@philcobsuzuki</h6>
            <p className='poppins-regular text-xs text-slate-500'>2 days ago</p>
          </div>
        </div>
        <div className='flex gap-2 items-center border rounded-full border-slate-600 px-4 py-2'>
          <FaRegHeart className='text-xl text-slate-500' />
          {/* <FaHeart className='text-xl' /> */}
          <h6 className='poppins-regular text-slate-600 text-sm'>55</h6>
        </div>
      </div>
      <p className='text-md text-slate-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda
        dicta sapiente error ad corrupti fugit modi perferendis consequatur, in
        maxime deserunt eius quasi laboriosam quo ducimus? Ipsum, sit dolore?
      </p>
    </div>
  )
}

export default Comment
