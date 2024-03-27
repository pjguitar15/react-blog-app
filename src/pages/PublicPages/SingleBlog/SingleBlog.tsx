import { FaTwitter } from 'react-icons/fa'
import { TiSocialFacebook } from 'react-icons/ti'
import { TEST_CONTENT } from './TEST_CONTENT'
import { PiMagnifyingGlassLight } from 'react-icons/pi'
import HeroDetailItem from './HeroDetailItem'
import RecentPostItem from './RecentPostItem'
import { MdSend } from 'react-icons/md'
import Comment from './Comment'
import { useGetDocFromRoute } from '../../../helpers/hooks/useGetDocFromRoute'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const SingleBlog = () => {
  const param = useParams()
  const { data } = useGetDocFromRoute(`/${param.id}`)
  useEffect(() => {
    console.log(data)
  }, [data])

  const DETAIL_ITEMS = [
    {
      roundColor: 'bg-orange-500',
      detailName: 'author',
      titleName: data?.author,
    },
    {
      roundColor: 'bg-blue-500',
      detailName: 'publish date',
      titleName: data?.publishDate,
    },
    {
      roundColor: 'bg-cyan-500',
      detailName: 'last update',
      titleName: TEST_CONTENT.lastUpdate,
    },
    {
      roundColor: 'bg-lime-500',
      detailName: 'categories',
      titleName: data?.category,
    },
    {
      roundColor: 'bg-yellow-500',
      detailName: 'read time',
      titleName: data?.readTime,
    },
  ]
  return (
    <main>
      <section className='relative'>
        <div className='h-full bg-gradient-to-t from-slate-800 absolute inset-0 z-0'></div>
        <img
          className='object-cover w-full h-96 z-0'
          src={data?.featuredImage}
          alt=''
        />
        <div className='py-5 absolute bottom-0 w-full flex justify-center gap-12'>
          {DETAIL_ITEMS.map((item, index) => (
            <HeroDetailItem
              roundColor={item.roundColor}
              detailName={item.detailName}
              titleName={item.titleName}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className='container mx-auto flex gap-[150px] py-12'>
        <div className='w-4/6'>
          {/* blog content here */}
          <div className='flex gap-2 items-center text-xs mb-6'>
            <div className='poppins-medium text-yellow-500'>Home</div>
            <div className='size-1 bg-yellow-400 rounded-full'></div>
            <div className='poppins-medium text-yellow-500'>Blog</div>
            <div className='size-1 bg-yellow-400 rounded-full'></div>
            <div className='poppins-medium text-slate-400'>{data?.title}</div>
          </div>

          <div className='flex flex-col gap-6'>
            <h2 className='text-3xl text-sky-900 poppins-medium'>
              {data?.title}
            </h2>
            {data?.content.map((item: any, index: number) => (
              <div key={index}>
                {item.type === 'image' && (
                  <img className='w-3/4 h-auto' src={item.content} alt='' />
                )}
                {item.type === 'paragraph' && (
                  <p className='poppins-regular text-slate-500 text-sm leading-loose'>
                    {item.content}
                  </p>
                )}
                {item.type === 'heading' && (
                  <h5 className='text-lg poppins-medium text-slate-700'>
                    {item.content}
                  </h5>
                )}
              </div>
            ))}

            {/* Share and tags */}
            <div className='py-12 flex gap-12'>
              <div>
                <div className='flex gap-3 items-center'>
                  <div className='bg-orange-300 h-0.5 w-4'></div>
                  <h6 className='poppins-regular text-sm text-slate-500'>
                    SHARE
                  </h6>
                </div>
                <div className='flex gap-3 ps-5 mt-1'>
                  <TiSocialFacebook className='text-slate-400 text-xl' />
                  <FaTwitter className='text-slate-400 text-xl' />
                </div>
              </div>
              <div className='ms-12'>
                <div className='flex gap-3 items-center'>
                  <div className='bg-orange-300 h-0.5 w-4'></div>
                  <h6 className='poppins-regular text-sm text-slate-500'>
                    TAGS
                  </h6>
                </div>
                <div className='flex gap-3 ps-8 mt-1'>
                  {TEST_CONTENT.tags.map((item, index) => (
                    <h6 key={index} className='text-slate-400 text-sm'>
                      {item}
                    </h6>
                  ))}
                </div>
              </div>
            </div>
            <hr />
            {/* Comment Section */}
            <div>
              <div className='flex gap-3 items-center mb-3'>
                <div className='bg-orange-300 h-0.5 w-4'></div>
                <h6 className='poppins-regular text-sm text-slate-500'>
                  Comments
                </h6>
              </div>
              <div className='bg-slate-100 rounded-lg border relative overflow-hidden'>
                <input
                  className='outline-none border-0 bg-transparent focus:bg-white px-7 py-3 w-full'
                  placeholder='Leave a constructive comment..'
                  type='text'
                />
                <button className='absolute h-full right-0 top-0 px-4 flex items-center bg-blue-200 hover:bg-blue-500 hover:text-white transition duration-300'>
                  <MdSend className='text-2xl' />
                </button>
              </div>
              <div className='flex flex-col gap-4 py-5'>
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>
        <div className='w-2/6'>
          <div className='relative mb-7'>
            <input
              className='poppins-regular text-xs border px-4 py-3 border-slate-400 w-full outline-slate-300'
              type='text'
              placeholder='Search here'
            />
            <PiMagnifyingGlassLight className='absolute right-4 top-3 text-xl text-slate-600' />
          </div>

          <div className='flex gap-3 items-center mb-5'>
            <div className='bg-orange-300 h-0.5 w-4'></div>
            <h6 className='poppins-medium text-blue-900'>RECENT POST</h6>
          </div>

          <div className='flex flex-col gap-5'>
            {/* recent post contents */}
            <RecentPostItem />
            <RecentPostItem />
            <RecentPostItem />
            <RecentPostItem />
          </div>
        </div>
      </section>
    </main>
  )
}

export default SingleBlog
