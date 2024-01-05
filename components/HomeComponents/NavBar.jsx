import Link from "next/link"
import Image from "next/image"
const NavBar = () => {
  return (
    <div className="flex w-full h-20  justify-between items-center px-10">
        <Image alt="logo" src={'/plearn_logo.png'} width={50} height={50}/>
         
        <Link className="text-[#E58E27]" href={'/'}>Report Bug</Link>
    </div>
  )
}

export default NavBar