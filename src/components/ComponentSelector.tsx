/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Aceternity, MotionPrimitives } from '@/types'
import React from 'react'
import { ThreeDCardDemo } from './aceternity/ThreeDCardDemo'
import { AnimatedPinDemo } from './aceternity/AnimatedPinDemo'
import { AnimatedModalDemo } from './aceternity/AnimatedModalDemo'
import AllAnimatedNumbers from './motion-primitives/AllAnimatedNumbers'
import AllAnimatedGroups from './motion-primitives/AllAnimatedGroups'
import AllAccordion from './motion-primitives/AllAccordion'
import AllBorderTrail from './motion-primitives/AllBorderTrail'
import AllCursor from './motion-primitives/AllCursor'
import AllTextsEffect from './motion-primitives/AllTextsEffect'
import AllTextMorph from './motion-primitives/AllTextMorph'
import AllInfiniteSlider from './motion-primitives/AllInfiniteSlider'
import AllTextShimmer from './motion-primitives/AllTextShimmer'

import { AppleStyleDock } from './motion-primitives/AppleStyleDock'
import AllToolBarExpandable from './motion-primitives/AllToolBarExpandable'
import Popover from './motion-primitives/Popover'

import AllScrollProgress from './motion-primitives/AllScrollProgress'
import AllSpinningText from './motion-primitives/AllSpinningText'


type Props = {
  selector: Aceternity | MotionPrimitives
}

// TODO: This is a better optimized code because it renders only the selected component
const componentsMap: Record<string, JSX.Element> = {
  'threed-card': <ThreeDCardDemo />,
  'animated-pin': <AnimatedPinDemo />,
  'animated-modal': <AnimatedModalDemo />,
  'animated-numbers': <AllAnimatedNumbers />,
  'animated-groups': <AllAnimatedGroups />,
  'accordion': <AllAccordion />,
  'border-trail': <AllBorderTrail />,
  'cursor': <AllCursor />,
  'text-effect': <AllTextsEffect />,
  'text-morph': <AllTextMorph />,
  'infinite-slider': <AllInfiniteSlider />,
  'text-shimmer': <AllTextShimmer />,
  'dock': <AppleStyleDock />,
  'toolbar': <AllToolBarExpandable />,
  'popover': <Popover />,
  'scroll-progress': <AllScrollProgress />,
  'spinning-text': <AllSpinningText />,
};


const ComponentSelector = ({ selector }: Props) => {
  return componentsMap[selector] || <div>Component not found</div>;
};

export default ComponentSelector;


// ! Bad optimized code because it renders all the components at once
/* 
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
      {
        selector == 'accordion' && <AllAccordion />
      }
      {
        selector == 'border-trail' && <AllBorderTrail />
      }
      {
        selector == 'cursor' && <AllCursor />
      }
      {
        selector == 'text-effect' && <AllTextsEffect />
      }
      {
        selector == 'text-morph' && <AllTextMorph />
      }
      {
        selector == 'infinite-slider' && <AllInfiniteSlider />
      }
      {
        selector == 'text-shimmer' && <AllTextShimmer />
      }
      {
        selector == 'dock' && <AppleStyleDock />
      }
      {
        selector == 'toolbar' && <AllToolBarExpandable />
      }
      {
        selector == 'popover' && <Popover />
      }
      {
        selector == 'scroll-progress' && <AllScrollProgress />
      }
      {
        selector == 'spinning-text' && <AllSpinningText />
      }

    </>
  )
}

export default ComponentSelector
*/