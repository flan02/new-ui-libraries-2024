import React from 'react'
import WrapComponentsUp from '../WrapComponentsUp'
import { InfiniteSliderBasic } from './InfiniteSliderBasic'
import { InfiniteSliderHoverSpeed } from './InfiniteSliderHoverSpeed'
import { InfiniteSliderVertical } from './InfiniteSliderVertical'



const AllInfiniteSlider = () => {
  const childrens = [
    {
      title: 'Infinite Slider Basic',
      component: <InfiniteSliderBasic />
    },
    {
      title: 'Infinite Slider hover speed',
      component: <InfiniteSliderHoverSpeed />
    },
    {
      title: 'Infinite Slider Vertical',
      component: <InfiniteSliderVertical />
    }
  ]
  return (
    <WrapComponentsUp>
      {childrens}
    </WrapComponentsUp>
  )
}

export default AllInfiniteSlider