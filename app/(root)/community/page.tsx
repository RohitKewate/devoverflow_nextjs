import React from 'react'
import LocalSearch from '@/components/shared/search/LocalSearch'
import NoResults from '@/components/shared/NoResults'
import UserCard from '@/components/shared/cards/UserCard'
import { UserFilters } from '@/constants/filters'
import Filter from '@/components/shared/search/Filter'
import { getAllUser } from '@/lib/actions/user.action'



const  Community = async () => {
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

    const result = await getAllUser({})
    console.log(result)

        

    


    return (
        <section className="">
            <h1 className="h1-bold text-dark100_light900">All Users</h1>
            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center lg:flex-col">
                <LocalSearch placeholder="Search Questions" route="/" iconPosition="left" imgSrc="/assets/icons/search.svg" otherClasses="flex-1" />

                <Filter filters={UserFilters} otherClasses="flex-1 w-full" />


            </div>
            <div className="mt-12 flex flex-wrap gap-4">
                {result && result?.users.length > 0 ?
                    result?.users.map((user: any) => (

                        <UserCard
                            key={user._id}
                            _id={user._id}
                            tags={user.tags}
                            name={user.name}
                            username={user.username}
                            imageurl={user.picture}

                        />




                    )) :
                    <NoResults title="There&apos;s no users yet" description="Join to be the first! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡" link="/" linkText="Community" />
                }



            </div>



        </section>
    )
}

export default Community