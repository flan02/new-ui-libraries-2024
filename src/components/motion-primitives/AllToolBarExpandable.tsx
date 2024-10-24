import WrapComponentsUp from "../WrapComponentsUp"
import ToolbarDynamic from "./ToobarDynamic"
import ToolbarExpandable from "./ToolbarExpandable"


const AllToolBarExpandable = () => {
  const childrens = [{
    title: "Toolbar Expandable",
    component: <ToolbarExpandable />
  }, {
    title: "Toolbar Dynamic",
    component: <ToolbarDynamic />
  }]
  return (
    <WrapComponentsUp>
      {childrens}
    </WrapComponentsUp>
  )
}

export default AllToolBarExpandable