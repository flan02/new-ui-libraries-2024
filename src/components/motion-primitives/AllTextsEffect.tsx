
import WrapComponentsUp from "../WrapComponentsUp"
import { TextEffectPerChar } from "./TextEffectPerChar"
import { TextEffectPerLine } from "./TextEffectPerLine"
import { TextEffectPerWord } from "./TextEffectPerWord"
import { TextEffectWithCustomDelay } from "./TextEffectWithCustomDelay"
import { TextEffectWithCustomVariants } from "./TextEffectWithCustomVariants"
import { TextEffectWithExit } from "./TextEffectWithExit"
import { TextEffectWithPreset } from "./TextEffectWithPreset"




const AllTextsEffect = () => {
  const childrens = [{
    title: 'Text Effect per character',
    component: <TextEffectPerChar />
  }, {
    title: 'Text Effect per word',
    component: <TextEffectPerWord />
  },
  {
    title: 'Text Effect with preset',
    component: <TextEffectWithPreset />
  },
  {
    title: 'Text Effect with custom variants',
    component: <TextEffectWithCustomVariants />
  },
  {
    title: 'Text Effect with custom delay',
    component: <TextEffectWithCustomDelay />
  },
  {
    title: 'Text Effect per line',
    component: <TextEffectPerLine />
  },
  {
    title: 'Text Effect with exit animation',
    component: <TextEffectWithExit />
  }

  ]
  return (
    <WrapComponentsUp>
      {childrens}
    </WrapComponentsUp>
  )
}

export default AllTextsEffect