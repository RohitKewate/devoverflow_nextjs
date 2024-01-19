"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, useClerk } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { sidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'




const NavContent = () => {
    const pathname = usePathname()

    return (
        <section className='sticky flex h-full flex-col pt-8'>
            {sidebarLinks.map((item) => {
                const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
                return (
                    <div key={item.route}>
                        <Link href={item.route} className={`${isActive ? 'primary-gradient rounded-lg text-light-900 max-lg:w-14' : 'text-dark300_light900'} flex items-center justify-start gap-4 bg-transparent p-4`}>
                            <Image src={item.imgURL} alt={item.label} height={20} width={20} className={`${isActive ? "" : "invert-colors"}`} />
                            <p className={`${isActive ? "base-bold" : "base-medium"} text-sm max-lg:hidden`}>{item.label}</p>
                        </Link>


                    </div>

                )

            })}

        </section>
    )
}


const LeftSideBar = () => {
    const { signOut } = useClerk();
    const router = useRouter()
    return (
        <div className='custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'>
            <div className='mt-0 w-full border-none '>
                <NavContent />

            </div>
            <SignedOut>
                <div className='flex flex-col gap-3'>
                    <div>
                        <Link href="/sign-in">
                            <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none max-lg:hidden'>
                                <span className='primary-text-gradient'>Sign In</span>
                            </Button>
                        </Link>
                        <Link href="/sign-in">
                            <Button className='small-medium btn-secondary hidden min-h-[41px] w-14 rounded-lg  px-4 py-3 shadow-none max-lg:block'>
                                <Image src="/assets/icons/account.svg" alt="Sign In" height={20} width={20} className="invert-colors" />
                            </Button>
                        </Link>

                    </div>

                    <div>
                        <Link href="/sign-up">
                            <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none max-lg:hidden'>
                                Sign Up
                            </Button>
                        </Link>
                        <Link href="/sign-up">
                            <Button className='small-medium btn-tertiary text-dark400_light900 hidden min-h-[41px] w-14 rounded-lg px-4 py-3 shadow-none max-lg:block'>
                                <Image src="/assets/icons/sign-up.svg" alt="Sign Up" height={20} width={20} className="invert-colors" />
                            </Button>
                        </Link>

                    </div>

                </div>
            </SignedOut>
            <SignedIn>
                <div >
                    <Button onClick={() => signOut(() => router.push("/"))} className=" text-dark300_light900 flex items-center justify-start gap-4 rounded-lg bg-transparent p-4 text-light-900">
                        <Image src="/assets/icons/arrow-left.svg" alt="Logout" height={20} width={20} className="invert-colors" />
                        <p className="text-dark300_light900 base-medium text-sm max-lg:hidden">Log Out</p>
                    </Button>


                </div>

            </SignedIn>


        </div>
    )
}

export default LeftSideBar