import Image from 'next/image'
import React from 'react'

interface MetricProps {
    imgUrl:string ,
    alt:string ,
    value:number ,
    title:string ,
    otherClasses:string,

}


const Metric = ({imgUrl,alt,value,title,otherClasses}:MetricProps) => {
    return (
        <div className='flex-center flex-wrap gap-1'>
            <Image src={imgUrl} alt={alt} height={16} width={16} className='invert-colors' />
            <p className={`${otherClasses} flex items-center gap-1`}><span className='small-regular line-clamp-1'>{value}</span> {title}</p>

        </div>
    )
}

export default Metric