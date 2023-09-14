import Link from "next/link"

const NavBar = () => {
  return (
    <div className="flex w-full h-20 bg-orange-500 justify-between items-center px-10">
        <h1>PLEARN</h1>
         
        <Link href={'/'}>Report Bug</Link>
    </div>
  )
}

export default NavBar