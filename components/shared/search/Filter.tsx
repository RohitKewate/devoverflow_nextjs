
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import HomeFilters from "@/components/home/HomeFilters"

interface FilterType {
    filters:{
        name:string,
        value:string
    }[],
    otherClasses?: string
}



const Filter = ({ filters,otherClasses }: FilterType) => {
    return (
        <div className={` relative  ${otherClasses} `}>
            <HomeFilters/>
            <div className='background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 lg:hidden'>

                <Select>
                    <SelectTrigger className="text-dark100_light900 w-[240px] border-none max-sm:w-full">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent className='text-dark100_light900 mt-3 rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300 '>
                        {filters.map((filter,index) => (
                            <SelectItem key={index} value={filter.value} >{filter.name}</SelectItem>
                        )

                        )}
                        
                        
                    </SelectContent>
                </Select>
            </div>

        </div>
    )
}

export default Filter