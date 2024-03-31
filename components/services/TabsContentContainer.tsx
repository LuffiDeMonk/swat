'use client'
import { motion } from "framer-motion"
import { TabsContent } from "../ui/tabs"

const TabsContentContainer = () => {
    return (
        <>
            <TabsContent value="account" className="w-full h-screen bg-gray-100">
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Make changes to your account here.</motion.p>
            </TabsContent>
            <TabsContent value="password">
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Change your password here.</motion.p>
            </TabsContent>
        </>
    )
}

export default TabsContentContainer