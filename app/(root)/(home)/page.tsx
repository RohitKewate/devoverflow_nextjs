import NoResults from "@/components/shared/NoResults";
import QuestionCard from "@/components/shared/cards/QuestionCard";
import Filter from "@/components/shared/search/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestion } from "@/lib/actions/question.action";
import Link from "next/link";



export default async function Home() {
  
  const result = await getQuestion({});
  



  
  return (
    <section className="">
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex flex-row justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>

        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center lg:flex-col">
        <LocalSearch placeholder="Search Questions" route="/" iconPosition="left" imgSrc="/assets/icons/search.svg" otherClasses="flex-1" />

        <Filter filters={HomePageFilters} otherClasses="flex-1 w-full" />


      </div>
      <div className="mt-10 flex w-full flex-col gap-6">
        {result && result?.questions.length > 0 ?
          result?.questions.map((question:any) => (

            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.upvotes}
              answers={question.answers}
              createdAt={question.createdAt}

            />




          )) :
          <NoResults title="There&apos;s no question to show" description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡" link="/" linkText="Ask a Question" />
        }



      </div>



    </section>
  )
}