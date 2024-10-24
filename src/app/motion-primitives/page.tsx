/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */


import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='flex flex-col'>
      <Link target="_blank" href="https://motion-primitives.com/docs/animated-number">docs</Link>
      <Link href="/motion-primitives/animated-numbers">animated-numbers</Link>
      <Link href="/motion-primitives/animated-groups">animated-groups</Link>
      <Link href="/motion-primitives/accordion">accordion</Link>
      <Link href="/motion-primitives/border-trail">border-trail</Link>
      <Link href="/motion-primitives/cursor">cursor</Link>
      <Link href="/motion-primitives/text-effect">text-effect</Link>
      <Link href="/motion-primitives/text-morph">text-morph</Link>
      <Link href="/motion-primitives/text-shimmer">text-shimmer</Link>
      <Link href="/motion-primitives/infinite-slider">infinite-slider</Link>
      <Link href="/motion-primitives/dock">dock</Link>
      <Link href="/motion-primitives/toolbar">toolbar</Link>
      <Link href="/motion-primitives/popover">popover</Link>
      <Link href="/motion-primitives/scroll-progress">scroll-progress</Link>
      <Link href="/motion-primitives/spinning-text">spinning-text</Link>

    </main>
  )
}
// 'dock' | 'toolbar' | 'popover' | 'scroll-progress' | 'spinning-text'
export default page