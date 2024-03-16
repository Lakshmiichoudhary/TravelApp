import Image from "next/image"
import Link from "next/link"
import { Nav_Links } from "../Constants/Index"

const Navbar = () => {
  return (
    <nav className=" relative z-30 flex justify-between lg:px-12 shadow-slate-300 shadow-md">
        <Link href="/">
          <Image src="/logo.jpg" alt="logo" width={80} height={40} className="mx-4" />
        </Link>
        <div>
          <ul className="hidden h-full gap-12 lg:flex">
              {Nav_Links.map((link)=>(
                <Link href={link.href} key={link.key} 
                className="pb-1.5 text-gray-600 flex justify-center hover:font-bold mt-8">
                  {link.label}
                </Link>
              ))}
          </ul>
        </div>
        <div className="lg:flex hidden hover:bg-orange-600 bg-purple-700 px-7 py-2 text-white my-4 mx-8 rounded-full">
          <button>
            Login
          </button>
        </div>
          <Image
            src="/menu.png"
            alt="menu"
            width={50}
            height={20}
            className="inline-block cursor-pointer lg:hidden mx-6 mt-2 h-12">
          </Image>
    </nav>
  )
}

export default Navbar
