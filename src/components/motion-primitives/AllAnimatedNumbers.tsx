import { AnimatedNumberBasic } from "./AnimatedNumberBasic"
import { AnimatedNumberCounter } from "./AnimatedNumberCounter"
import { AnimatedNumberInView } from "./AnimatedNumberInView"


const AllAnimatedNumbers = () => {
  return (
    <section className="space-y-8 font-bold text-center max-w-xl mx-auto">
      <div className="border border-slate-500 py-8">
        <span>Number Basic</span><AnimatedNumberBasic />
      </div>
      <div className="border border-slate-500  py-8">
        <span>Number Counter</span>
        <AnimatedNumberCounter />
      </div>
      <div className="border border-slate-500 py-8">
        <span>Number InView</span>
        <AnimatedNumberInView />
      </div>
    </section>
  )
}

export default AllAnimatedNumbers