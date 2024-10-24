/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='flex flex-col'>
      <Link target="_blank" href="https://ui.aceternity.com/docs">docs</Link>
      <Link href="/aceternity/threed-card">threed-card</Link>
      <Link href="/aceternity/animated-pin">animated-pin</Link>
      <Link href="/aceternity/animated-modal">animated-modal</Link>
    </main>
  )
}

export default page