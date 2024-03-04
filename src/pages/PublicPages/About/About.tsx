const About = () => {
  const STAT_BLOCK_CONTENT = [
    { number: '3.5', description: 'Years of Experience' },
    { number: '23', description: 'Project Challenge' },
    { number: '830+', description: 'Positive Reviews' },
    { number: '100K', description: 'Trusted Blogs' },
  ]

  const StatBlocks = ({
    number,
    description,
  }: {
    number: string
    description: string
  }) => {
    return (
      <div className='bg-gray-100 p-5 rounded-lg'>
        <h4 className='text-xl poppins-semibold'>{number}</h4>
        <h6 className='poppins-regular text-xs text-slate-500'>
          {description}
        </h6>
      </div>
    )
  }
  return (
    <main className='bg-slate-100 py-7'>
      <div className='container mx-auto flex gap-3'>
        <div className='bg-white rounded-xl p-7 flex gap-7'>
          <div className='flex flex-col justify-between'>
            <div>
              <p className='text-orange-500 font-semibold capitalize mb-3'>
                How it Started
              </p>
              <h2 className='text-4xl poppins-semibold mb-3'>
                Our Dream is Global Learning Transformation
              </h2>
            </div>
            <p className='text-slate-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              veniam veritatis voluptatem rerum velit incidunt perferendis,
              labore voluptatibus porro id tenetur iste, nam necessitatibus
              reprehenderit nostrum. Qui numquam atque excepturi?
            </p>
          </div>
        </div>
        <div className='flex gap-7'>
          <div className='flex flex-col gap-2'>
            <img
              className='rounded-lg'
              src='https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
            <div className='bg-white rounded-lg p-6 grid grid-cols-2 gap-2'>
              {STAT_BLOCK_CONTENT.map((item, index) => (
                <StatBlocks
                  number={item.number}
                  description={item.description}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
