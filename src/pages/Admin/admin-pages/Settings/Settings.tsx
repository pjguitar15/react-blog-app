import { useState } from 'react'
import SettingsLinks from './SettingsLinks'
import SettingsContent from './SettingsContent'

const Settings = () => {
  const [activeLink, setActiveLink] = useState<string>('Account')
  return (
    <main className='bg-slate-100 w-full p-7'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <div>
            <h5 className='font-semibold text-2xl mb-1'>Account Settings</h5>
            <p className='text-sm text-slate-700 poppins-regular'>
              Change your profile and account settings
            </p>
          </div>
        </div>
      </div>

      <div className='mt-8 bg-white rounded-lg border flex w-3/4 h-[40rem]'>
        <SettingsLinks activeLink={activeLink} setActiveLink={setActiveLink} />
        <SettingsContent activeLink={activeLink} />
      </div>
    </main>
  )
}

export default Settings
