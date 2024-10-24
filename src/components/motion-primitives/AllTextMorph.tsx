import React from 'react'
import WrapComponentsUp from '../WrapComponentsUp'
import { TextMorphButton } from './TextMorphButton'
import { TextMorphInput } from './TextMorphInput'


const AllTextMorph = () => {
  const childrens = [{
    title: 'Text Morph Button',
    component: <TextMorphButton />
  }, {
    title: 'Text Morph Input',
    component: <TextMorphInput />
  }
  ]
  return (
    <WrapComponentsUp>
      {childrens}
    </WrapComponentsUp>
  )
}

export default AllTextMorph