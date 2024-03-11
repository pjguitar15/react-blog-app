const HeroDetailItem = ({
  roundColor,
  detailName,
  titleName,
}: {
  roundColor: string
  detailName: string
  titleName: string
}) => {
  return (
    <div className='px-6'>
      <div className='flex gap-2 items-start'>
        <div className={`size-2 rounded-full mt-2 ${roundColor}`}></div>
        <div className='flex flex-col justify-start'>
          <h6 className='text-white poppins-medium uppercase'>{detailName}</h6>
          <h6 className='text-slate-500 poppins-regular uppercase text-end'>
            {titleName}
          </h6>
        </div>
      </div>
    </div>
  )
}

export default HeroDetailItem
