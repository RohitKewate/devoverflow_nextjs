"use client"
import Image from 'next/image';
import React from 'react'

interface Params {
    type: string;
    itemId: string;
    userId: string;
    upvotes: number;
    hasupVoted: boolean;
    downvotes: number;
    hasdownVoted: boolean;
    hasSaved?: boolean;

}

const Votes = ({ type, itemId, userId, upvotes, hasupVoted, downvotes, hasdownVoted, hasSaved }: Params) => {
    return (
        <div className='flex gap-5'>
            <div className='flex-center gap-2.5'>
                <div className='flex-center gap-1.5'>
                    <Image src={hasupVoted ? '/assets/icons/upvoted.svg' : '/assets/icons/upvote.svg'} height={18} width={18} alt='upvote' className='cursor-pointer' onClick={()=>{}}/>
                    <div className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
                        <p className='subtle-medium text-dark400_light900'>
                            {upvotes}
                        </p>

                    </div>

                </div>
                <div className='flex-center gap-1.5'>
                    <Image src={hasdownVoted ? '/assets/icons/downvoted.svg' : '/assets/icons/downvote.svg'} height={18} width={18} alt='downvote' className='cursor-pointer' onClick={()=>{}}/>
                    <div className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
                        <p className='subtle-medium text-dark400_light900'>
                            {downvotes}
                        </p>

                    </div>

                </div>
                <Image src={hasSaved ? '/assets/icons/star-filled.svg' : '/assets/icons/star-red.svg'} height={18} width={18} alt='star' className='cursor-pointer' onClick={()=>{}}/>

            </div>

        </div>
    )
}

export default Votes