
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci'
import Image from "next/image"
import Link from 'next/link'
import { LogoutButton, SidebarItem } from '..';
import { IoBackspaceOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoPerson, IoPersonOutline } from "react-icons/io5"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const menu = [
  {
    path: "/dashboard", 
    title:"Dashboard", 
    icon: <IoCalendarOutline size={30} />
  }, 
  {
    path: "/dashboard/rest-todos", 
    title:"Todos", 
    icon: <IoCheckboxOutline size={30} />
  },
  {
    path: "/dashboard/server-todos", 
    title:"Server Actions", 
    icon: <IoCheckboxOutline size={30} />
  },
  {
    path: "/dashboard/cookies", 
    title:"Cookies", 
    icon: <IoCodeWorkingOutline size={30} />
  },
  {
    path: "/dashboard/products", 
    title:"Products", 
    icon: <IoBackspaceOutline size={30} />
  },
  {
    path: "/dashboard/profile", 
    title:"Perfil", 
    icon: <IoPersonOutline size={30} />
  }

]


export const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  const avatarUrl = (session?.user?.image) ? session.user.image : "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
  
  const userName = session?.user?.name ?? "No name";
  const userRoles = session?.user?.roles ?? ['client'];

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
      <div className="-mx-6 px-6 py-4">
        <Link href="/dashboard" title="home">
          <Image width={50} height={50} src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" className="w-32" alt="tailus logo"/>
        </Link>
      </div>

      <div className="mt-8 text-center">

        <Image width={50} height={50} src={avatarUrl} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
        <span className="hidden text-gray-400 lg:block capitalize">{
          userRoles.join(', ')
          }</span>
      </div>
      <ul className="space-y-2 tracking-wide mt-8">
        {
          menu.map( item => (<SidebarItem {...item} key={item.path}/>))
        }
      </ul>
    </div>
    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <LogoutButton/>
    </div>
  </aside>
  )
}
