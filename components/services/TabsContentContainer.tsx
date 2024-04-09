import { TabsContent } from "../ui/tabs"
import { ServiceTabs } from "./ServiceTab"
import { MotionDiv } from "../home/MotionDiv"
import { variants } from "../animation"

const TabsContentContainer = () => {
    return (
        <>
            {
                ServiceTabs.map(item => (
                    <TabsContent key={item.id} value={item.title} className="w-full h-screen bg-gray-100">
                        <MotionDiv variants={variants} initial='initial' whileInView='whileInView' viewport={{ once: true }}>
                            {item.content}
                        </MotionDiv>
                    </TabsContent>
                ))
            }


        </>
    )
}

export default TabsContentContainer