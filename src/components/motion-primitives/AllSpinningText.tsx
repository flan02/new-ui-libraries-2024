import WrapComponentsUp from "../WrapComponentsUp"
import { SpinningTextBasic } from "./SpinningTextBasic"
import { SpinningTextCustomTransition } from "./SpinningTextCustomTransition"
import { SpinningTextCustomVariants } from "./SpinningTextCustomVariants"


const AllSpinningText = () => {
  const childrens = [{
    title: 'Spinning Text Basic',
    component: <SpinningTextBasic />
  }, {
    title: 'Custom Transition',
    component: <SpinningTextCustomTransition />
  }, {
    title: 'Custom Variants',
    component: <SpinningTextCustomVariants />
  }]
  return (
    <WrapComponentsUp>
      {childrens}
    </WrapComponentsUp>
  )
}

export default AllSpinningText