/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react'
import { BorderTrailCard1 } from './BorderTrailCard1'
import { BorderTrailCard2 } from './BorderTrailCard2'
import { BorderTrailTextarea } from './BorderTrailTextarea'
import WrapComponentsUp from '../WrapComponentsUp'

type Props = {}

const AllBorderTrail = (props: Props) => {
  const childrens = [
    {
      title: 'Border Trail Card',
      component: <BorderTrailCard1 />
    },
    {
      title: 'Border Trail Loading Card',
      component: <BorderTrailCard2 />
    },
    {
      title: 'Border Trail Textarea',
      component: <BorderTrailTextarea />
    }
  ]

  return (
    <WrapComponentsUp>
      {childrens}
    </WrapComponentsUp>

  )
}

export default AllBorderTrail