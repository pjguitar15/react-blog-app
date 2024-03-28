import React, { Dispatch, SetStateAction } from 'react'
import { FiUser } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoHelpBuoyOutline } from 'react-icons/io5'
import { RiLockPasswordLine } from 'react-icons/ri'

const SettingsLinks: React.FC<{
  activeLink: string
  setActiveLink: Dispatch<SetStateAction<string>>
}> = ({ activeLink, setActiveLink }) => {
  const SETTINGS_LINKS = [
    {
      icon: <FiUser />,
      text: 'Account',
    },
    {
      icon: <RiLockPasswordLine />,
      text: 'Password',
    },
    {
      icon: <IoMdNotificationsOutline />,
      text: 'Notifications',
    },
    {
      icon: <IoHelpBuoyOutline />,
      text: 'Help',
    },
  ]

  return (
    <div className='border-r p-8 flex flex-col gap-6 w-3/12'>
      {SETTINGS_LINKS.map((item, index) => (
        <div
          onClick={() => setActiveLink(item.text)}
          className='flex gap-4 items-center cursor-pointer'
          key={index}
        >
          <div
            className={`${item.text === activeLink ? 'text-blue-600 font-bold' : 'text-slate-500'} text-lg`}
          >
            {item.icon}
          </div>
          <h6
            className={`text-md ${item.text === activeLink ? 'font-semibold text-black' : 'font-regular text-slate-500'}`}
          >
            {item.text}
          </h6>
        </div>
      ))}
    </div>
  )
}

export default SettingsLinks
