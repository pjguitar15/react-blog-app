import NoPending from '../../../../../assets/no-pending.png'

const NoPendingItem = () => {
  return (
    <main className='flex flex-col items-center'>
      <img src={NoPending} alt='' />
      <h6 className='poppins-semibold text-3xl text-slate-500'>
        You have no Pending Items
      </h6>
      <p className='text-slate-400 poppins-regular w-3/6 text-center mt-1 leading-relaxed'>
        Create your own blog and submit to send a request to admin. Once your
        blog gets accepted, you will be able to view your blog on the internet!
      </p>
    </main>
  )
}

export default NoPendingItem
