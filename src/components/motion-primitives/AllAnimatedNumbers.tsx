import { AnimatedNumberBasic } from "./AnimatedNumberBasic"
import { AnimatedNumberCounter } from "./AnimatedNumberCounter"
import { AnimatedNumberInView } from "./AnimatedNumberInView"


const AllAnimatedNumbers = () => {
  return (
    <section className="space-y-8 font-bold">
      <div>
        <span>Number Basic</span><AnimatedNumberBasic />
      </div>
      <div>
        <span>Number Counter</span>
        <AnimatedNumberCounter />
      </div>
      <div>
        <span>Number InView</span>
        <AnimatedNumberInView />
      </div>
    </section>
  )
}

export default AllAnimatedNumbers