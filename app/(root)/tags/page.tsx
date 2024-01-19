import React from 'react'
import LocalSearch from '@/components/shared/search/LocalSearch'
import NoResults from '@/components/shared/NoResults'
import { TagFilters } from '@/constants/filters'
import Filter from '@/components/shared/search/Filter'
import { getAllTags } from '@/lib/actions/tag.action'
import Link from 'next/link'



const Tags = async () => {
    // const result = { 
    //     users : [
    //         {
    //             _id: "12",
    //             name: 'Rohit Kewate',
    //             username: "Rohit751",
    //             tags: [{ _id: "1", name: "Web" }, { _id: "2", name: "Next.js" }],
    //             imageurl: "/assets/images/defaultuser.png"
    //         },
    //         {
    //             _id: "13",
    //             name: 'Jayesh Shinde',
    //             username: "Shinde123",
    //             tags: [{ _id: "4", name: "Django" }, { _id: "5", name: "Dev" }],
    //             imageurl: "/assets/images/defaultuser.png"
    //         },
    //         {
    //             _id: "14",
    //             name: 'Prem Patel',
    //             username: "Prem1308",
    //             tags: [{ _id: "4", name: "Django" }, { _id: "5", name: "Dev" }],
    //             imageurl: "/assets/images/defaultuser.png"
    //         }

    //     ],

    // }

    const result = await getAllTags({})
    console.log(result.tags)






    return (
        <section className="">
            <h1 className="h1-bold text-dark100_light900">All Tags</h1>
            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center lg:flex-col">
                <LocalSearch placeholder="Search fot tags..." route="/tags" iconPosition="left" imgSrc="/assets/icons/search.svg" otherClasses="flex-1" />

                <Filter filters={TagFilters} otherClasses="flex-1 w-full" />


            </div>
            <div className="mt-12 flex flex-wrap gap-4">
                {result && result?.tags.length > 0 ?
                    result?.tags.map((tag: any) => (
                        <Link href={`/tags/${tag._id}`} key={tag._id} className='shadow-light100_darknone'>
                            <article className='background-light900_dark200 light-border flex w-full flex-col rounded-2xl border px-8 py-10 sm:w-[260px]'>
                                <div className='background-ligh800_dark400 w-fit rounded-sm px-5 py-1.5 '>
                                    <p className='paragraph-semibold text-dark300_light900'>{tag.name}</p>

                                </div>
                                <p className='small-medium text-dark400_light500 mt-3.5'>
                                    <span className='body-semibold primary-text-gradient mr-2.5'>{tag.questions.length}+</span> Questions
                                </p>
                            </article>

                        </Link>






                    )) :
                    <NoResults title="There&apos;s no tags yet" description="Join to be the first! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡" link="/" linkText="Tags" />
                }



            </div>



        </section>
    )
}

export default Tags