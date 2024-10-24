import React from 'react'
import WrapComponentsUp from '../WrapComponentsUp'
import { Cursor1 } from './Cursor1'
import { Cursor2 } from './Cursor2'
import { Cursor3 } from './Cursor3'


const AllCursor = () => {
  const childrens = [
    {
      title: 'Cursor with image and spring',
      component: <Cursor1 />
    },
    {
      title: 'Cursor with custom component',
      component: <Cursor2 />
    },
    {
      title: 'Cursor with image and spring',
      component: <Cursor3 />
    }
  ]
  return (
    <WrapComponentsUp>
      {childrens}
    </WrapComponentsUp>
  )
}

export default AllCursor