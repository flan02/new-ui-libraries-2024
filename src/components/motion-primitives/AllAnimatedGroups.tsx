/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { AnimatedGroupPreset } from "./AnimatedGroupPreset"
import { AnimatedGroupCustomVariants } from "./AnimateGroupCustomVariants"


type Props = {}

const AllAnimatedGroups = (props: Props) => {
  return (
    <section className="font-bold space-y-8 text-center w-[50%] mx-auto">
      <div>
        <span>Animated with preset (fadind while appear)</span>
        <AnimatedGroupPreset />
      </div>
      <div>
        <span>Animated with custom variants (blur while appear)</span>
        <AnimatedGroupCustomVariants />
      </div>
    </section>
  )
}

export default AllAnimatedGroups