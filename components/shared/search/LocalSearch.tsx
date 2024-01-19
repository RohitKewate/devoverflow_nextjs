"use client"
import Image from 'next/image'
import { Input } from "@/components/ui/input"

interface LocalType {
  placeholder:string,
  route:string,
  iconPosition:string,
  imgSrc:string,
  otherClasses?:string,


}

const LocalSearch = ({placeholder,route,iconPosition,imgSrc,otherClasses}:LocalType) => {
  return (
    <div className={`relative w-full max-w-full ${otherClasses}`}>
        <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 " >
        <Image src={imgSrc} alt='search' width={24} height={24} className='cursor-pointer' />
        <Input type= "text" onChange={()=>{}} placeholder={placeholder} value="" className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none' />


        </div>


    </div>
  )
}

export default LocalSearch