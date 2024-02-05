import Link from "next/link"
import Image from "next/image"
const NavBar = () => {
  return (
    <div className="flex w-full h-20  justify-between items-center px-10">
        <Image alt="logo" src={'/HomePageAssets/plearnWebLogo.png'} width={100} height={100}/>
         
        <Link className="text-[#E58E27]" href={'/'}>Report Bug</Link>
    </div>
  )
}

export default NavBar