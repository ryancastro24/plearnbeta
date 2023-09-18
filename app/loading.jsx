import React from 'react'
import '@/styles/globals.css'
const RootLoader = () => {
  return (
    <section className='flex items-center justify-center w-full h-screen'>
        <div className="loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
        </div>
    </section>
  )
}

export default RootLoader