import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RenderTag from '../RenderTag'

const RightSideBar = () => {
  return (
    <section className='custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
      <div>
        <h3 className='h3-bold text-dark200_light900 '>Top Questions</h3>

        <Link href="/" className=" text-dark300_light900 flex items-center justify-start gap-4 rounded-lg bg-transparent py-4 text-light-900">
          <p className=''>Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?</p>
          <Image src="/assets/icons/chevron-right.svg" alt="Chevron Right" height={20} width={20} className="invert-colors" />
        </Link>
        <Link href="/" className=" text-dark300_light900 flex items-center justify-start gap-4 rounded-lg bg-transparent py-4 text-light-900">
          <p className=''>Redux Toolkit Not Updating State as Expected</p>
          <Image src="/assets/icons/chevron-right.svg" alt="Chevron Right" height={20} width={20} className="invert-colors" />
        </Link>
        <Link href="/" className=" text-dark300_light900 flex items-center justify-start gap-4 rounded-lg bg-transparent py-4 text-light-900">
          <p className=''>Async/Await Function Not Handling Errors Properlyy</p>
          <Image src="/assets/icons/chevron-right.svg" alt="Chevron Right" height={20} width={20} className="invert-colors" />
        </Link>


      </div>
      <div className=''>
        <h3 className='h3-bold text-dark200_light900 '>Popular Topics</h3>
        <RenderTag _id={2} name="nextjs" totalQuestions={567} showCount={true} />

      </div>
    </section>
  )
}

export default RightSideBar