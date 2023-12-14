import React from 'react'
import Link from 'next/link'

interface TagType {
  _id: number,
  name: string,
  totalQuestions?: number,
  showCount: boolean

}

const RenderTag = ({ _id, name, totalQuestions, showCount }: TagType) => {
  return (
    <Link href="/" id={String(_id)} className=" text-dark300_light900 flex items-center justify-between gap-4 rounded-lg bg-transparent py-4 text-light-900">
      <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'><p>{name}</p></div>
      {showCount ? <p className='small-medium text-dark500_light700'>{totalQuestions}</p> : <p className='small-medium text-dark500_light700'>0</p>}

    </Link>
  )
}

export default RenderTag