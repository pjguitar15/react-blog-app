import AccountContent from './AccountContent'
import HelpContent from './HelpContent'
import NotificationsContent from './NotificationsContent'
import PasswordContent from './PasswordContent'

const SettingsContent: React.FC<{ activeLink: string }> = ({ activeLink }) => {
  return (
    <main className='py-8 px-10 w-full'>
      {activeLink === 'Account' && <AccountContent />}
      {activeLink === 'Password' && <PasswordContent />}
      {activeLink === 'Notifications' && <NotificationsContent />}
      {activeLink === 'Help' && <HelpContent />}
    </main>
  )
}

export default SettingsContent
