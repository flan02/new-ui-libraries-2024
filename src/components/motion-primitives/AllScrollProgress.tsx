import WrapComponentsUp from "../WrapComponentsUp"
import { ScrollProgressBasic1 } from "./ScrollPRogressBasic"
import { ScrollProgressBasic2 } from "./ScrollProgressBasic2"
import { ScrollProgressBasic3 } from "./ScrollProgressBasic3"


const AllScrollProgress = () => {
  const childrens = [{
    title: 'Scroll Progress Basic',
    component: <ScrollProgressBasic1 />
  },
  {
    title: "Scroll Progress Navigation",
    component: <ScrollProgressBasic2 />
  },
  {
    title: "Scroll Progress Gradient",
    component: <ScrollProgressBasic3 />
  }
  ]

  // ! Remarks: -> Pay attention last component shows the loading bar on the top of the page and cover the previous ones.
  // * Better way to make a demo is to show the components one by one.
  return (
    <WrapComponentsUp>
      {childrens}
    </WrapComponentsUp>
  )
}

export default AllScrollProgress