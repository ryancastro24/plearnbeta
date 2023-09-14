import Link from "next/link"

const NavBar = () => {
  return (
    <div className="flex w-full h-20  justify-between items-center px-10">
        <h1 className="font-bold ">PLEARN</h1>
         
        <Link className="text-[#E58E27]" href={'/'}>Report Bug</Link>
    </div>
  )
}

export default NavBar