import { TabsList, TabsTrigger } from "../ui/tabs"

const TabListContainer = () => {
    return (
        <TabsList className="flex-col bg-green-400 py-6 h-full lg:h-[110vh] relative z-10 items-start justify-start w-full lg:w-80 shrink-0 rounded-none overflow-hidden">
            <TabsTrigger value="account" className="relative p-4 text-gray-100 data-[state=active]:text-white w-full justify-start text-xl hover:text-white data-[state=active]:bg-transparent data-[state=active]:after:absolute data-[state=active]:after:size-4 after:rotate-45 after:-right-2 after:top-1/2 after:-translate-y-1/2 after:content-[''] after:bg-white">Account</TabsTrigger>
            <TabsTrigger value="password" className="relative p-4 text-gray-100 data-[state=active]:text-white w-full justify-start text-xl hover:text-white data-[state=active]:bg-transparent data-[state=active]:after:absolute data-[state=active]:after:size-4 after:rotate-45 after:-right-2 after:top-1/2 after:-translate-y-1/2 after:content-[''] after:bg-white">Password</TabsTrigger>
        </TabsList>
    )
}

export default TabListContainer