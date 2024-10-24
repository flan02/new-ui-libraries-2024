import React from 'react'
import WrapComponentsUp from '../WrapComponentsUp'
import { TextShimmerBasic } from './TextShimmerBasic'
import { TextShimmerColor } from './TextShimmerColor'



const AllTextShimmer = () => {
  const childrens = [
    {
      title: 'Text Shimmer Basic',
      component: <TextShimmerBasic />
    },
    {
      title: 'Text Shimmer Color',
      component: <TextShimmerColor />
    }
  ]
  return (
    <WrapComponentsUp>
      {childrens}
    </WrapComponentsUp>
  )
}

export default AllTextShimmer