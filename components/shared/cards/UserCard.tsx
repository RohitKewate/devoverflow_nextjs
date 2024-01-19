"use client"
import Image from 'next/image'
import React, { useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import getTopInteractedTag from '@/lib/actions/tag.action'
import { Badge } from '@/components/ui/badge'
import Tag from '../Tag'
import NoResults from '../NoResults'



interface UserProps {
    _id: string,
    name: string,
    tags: { _id: string, name: string }[],
    username: string,
    imageurl: string

}

const UserCard = ({ _id, name, tags, username, imageurl }: UserProps) => {

    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    const [toptags, setToptags] = useState([{ _id: '', name: '' }])

    useLayoutEffect(() => {
        setInitialRenderComplete(true);
        async function getTags() {
            const interactedTag = await getTopInteractedTag({ userId: _id, limit: 3 });
            console.log(interactedTag)
            if (interactedTag === undefined) {
                setToptags([{ _id: '', name: '' }])


            } else {
                setToptags(interactedTag)
            }


        }

        getTags()


    }, [])

    if (!initialRenderComplete) {
        return (
            <NoResults title="There&apos;s no users yet" description="Join to be the first! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡" link="/" linkText="Community" />
        );
    } else {
        return (

            <div className='shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]'>
                <Link href={`/profile/${_id}`} className='flex-col text-center '>
                    <div className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
                        <Image src={imageurl} alt='User' height={100} width={100} className='rounded-full' />

                        <div className='mt-4 flex-col gap-1'>




                            <h2 className='h3-bold text-dark200_light900 line-clamp-1'>{name}</h2>
                            <p className='body-regular text-dark500_light500 mt-2'>@{username}</p>


                        </div>
                        <div className='flex w-full flex-col items-center'>


                            <div className='flex flex-wrap gap-2'>
                                {/* {tags.map((tag) => (
                                    <Tag key={tag._id} _id={tag._id} name={tag.name} route={`/tag/${tag._id}`} />
    
                                ))} */}

                                {toptags.length > 0 ? (

                                    <div className='flex items-center gap-2'>
                                        {toptags?.map((tag) => (
                                            <Tag key={tag._id} _id={tag._id} name={tag.name} route={`/tag/${tag._id}`} />

                                        ))}

                                    </div>

                                ) : (

                                    <Badge>No Tags Yet</Badge>

                                )}




                            </div>

                        </div>

                    </div>



                </Link>


            </div>

        )


    }









}

export default UserCard