import { TabsContent } from "../ui/tabs"
import { ServiceTabs } from "./ServiceTab"
import { MotionDiv } from "../home/MotionDiv"
import { variants } from "../animation"

const TabsContentContainer = () => {
    return (
        <>
            {
                ServiceTabs.map(item => (
                    <TabsContent key={item.id} value={item.title} className="w-full h-screen">
                        <MotionDiv variants={variants} initial='initial' animate='whileInView'>
                            {item.content}
                        </MotionDiv>
                    </TabsContent>
                ))
            }


        </>
    )
}

export default TabsContentContainer