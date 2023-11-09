import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='px-3 py-2 rounded bg-orange-500 mt-5' href="/dashboard">Return Home</Link>
    </div>
  )
}