import Image from "next/image"
import { FaHeart, FaReact } from "react-icons/fa"
import { RiDashboardFill, RiNextjsFill } from "react-icons/ri"
import { SidebarMenuItem } from ".."
import { BsArrowCounterclockwise } from "react-icons/bs"
import { MdCatchingPokemon } from "react-icons/md"

const menuItems = [
  {
    path: "/dashboard/main",
    title: "Dashboard",
    subtitle: "All options",
    icon: <RiDashboardFill size={25} />
  },
  {
    path: "/dashboard/counter",
    title: "Counter",
    subtitle: "Counter Cliente Side",
    icon: <BsArrowCounterclockwise size={25} />
  },
  {
    path: "/dashboard/pokemons",
    title: "Pokemons",
    subtitle: "Pokemons API",
    icon: <MdCatchingPokemon size={25} />
  },
  {
    path: "/dashboard/pokemons/favorites",
    title: "Favorite Pokemons",
    subtitle: "Pokemons API",
    icon: <FaHeart size={25} />
  }
]

export const Sidebar = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0">
      <div id="logo" className="my-4 px-6">
        <h1 className="flex gap-2 text-lg md:text-2xl font-bold text-white">
          <FaReact className="text-blue-500" />
          <RiNextjsFill className="text-white" />
          <div>
            <span>Dash</span>
            <span className="text-blue-500">8</span>.
          </div>
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8" width={50} height={50} alt="User avatar"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Edward Tompson
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          menuItems.map(item => (
            <SidebarMenuItem key={item.path} {...item} />
          ))
        }
      </div>
    </div>
  )
}