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

    </main>
  )
}

export default page