/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Aceternity, MotionPrimitives } from '@/types'
import React from 'react'
import { ThreeDCardDemo } from './aceternity/ThreeDCardDemo'
import { AnimatedPinDemo } from './aceternity/AnimatedPinDemo'
import { AnimatedModalDemo } from './aceternity/AnimatedModalDemo'
import AllAnimatedNumbers from './motion-primitives/AllAnimatedNumbers'
import AllAnimatedGroups from './motion-primitives/AllAnimatedGroups'

type Props = {
  selector: Aceternity | MotionPrimitives
}

const ComponentSelector = ({ selector }: Props) => {
  return (
    <>
      {
        selector == 'threed-card' && <ThreeDCardDemo />
      }
      {
        selector == 'animated-pin' && <AnimatedPinDemo />
      }
      {
        selector == 'animated-modal' && <AnimatedModalDemo />
      }
      {
        selector == 'animated-numbers' && <AllAnimatedNumbers />
      }
      {
        selector == 'animated-groups' && <AllAnimatedGroups />
      }
    </>
  )
}

export default ComponentSelector