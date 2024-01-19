import Image from 'next/image'
import React from 'react'
import Tag from '../Tag'
import Link from 'next/link'
import Metric from '../Metric'
import { timeAgo } from '@/utils'


interface QuestionProps {
    _id: string,
    title: string,
    tags: { _id: string, name: string }[],
    author: { _id: string, name: string, picture: string },
    upvotes: number,
    views: number,
    answers: number,
    createdAt: string,
}

const QuestionCard = ({ _id, title, tags, author, upvotes, views, answers, createdAt }: QuestionProps) => {
    console.log("question id",_id)
    return (
        <div className='card-wrapper rounded-[10px] p-9 sm:px-11'>
            <div className='flex flex-col-reverse items-center justify-between gap-5 '>
                <div className='text-dark100_light900 flex w-full justify-between max-sm:flex-col'>

                    <div className='flex gap-1'>

                        <Image src="/assets/icons/user.svg" alt='User' height={16} width={16} className='invert-colors' />


                        <Link href={`/profile/${author._id}`}>
                            <p className='body-medium text-dark400_light700 flex items-center gap-1'>{author.name} <span className='small-regular line-clamp-1 max-sm:hidden '>&#8226; asked {timeAgo(createdAt)}</span></p>
                        </Link>

                    </div>
                    <div className='flex items-center gap-3 max-sm:mt-4 max-sm:flex-wrap max-sm:justify-start'>
                        <Metric imgUrl="/assets/icons/like.svg" alt="Upvotes" value={upvotes} title="Votes" otherClasses="small-medium text-dark400_light800" />
                        <Metric imgUrl="/assets/icons/message.svg" alt="Answers" value={answers} title="Answers" otherClasses="small-medium text-dark400_light800" />
                        <Metric imgUrl="/assets/icons/eye.svg" alt="Views" value={views} title="Views" otherClasses="small-medium text-dark400_light800" />
                    </div>
                </div>
                <div className='flex w-full flex-col'>
                    <span className='small-regular mb-3 line-clamp-1 hidden max-sm:block '>{timeAgo(createdAt)}</span>
                    <div className=''>
                        <Link href={`/question/${_id}`}>
                            <p className='h3-semibold text-dark100_light900 line-clamp-1 overflow-hidden'>{title}</p>
                        </Link>

                    </div>

                    <div className='flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <Tag key={tag._id} _id={tag._id} name={tag.name} route={`/tag/${tag._id}`} />

                        ))}




                    </div>

                </div>

            </div>
        </div>
    )
}

export default QuestionCard