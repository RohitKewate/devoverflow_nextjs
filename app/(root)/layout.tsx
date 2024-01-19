import LeftSideBar from '@/components/shared/navbar/LeftSideBar'
import Navbar from '@/components/shared/navbar/Navbar'
import RightSideBar from '@/components/shared/navbar/RightSideBar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='background-light850_dark100 relative '>
      <Navbar />
      <div className='flex justify-between'>
        <LeftSideBar/>
        <section className='flex min-h-screen w-full flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'>
            {children}
          </div>
        </section>
        <RightSideBar/>

      </div>
    </main>
  )
}

export default Layout