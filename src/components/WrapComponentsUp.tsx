/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import React from "react"

interface Component {
  title: string
  component: React.ReactNode
}

// TODO: Simpliest way to define the type
type ChildrenProps = {
  children: Component[]
}

// ! Alternative way to define the type more explicitly
/*
type ChildrenPropsAlt = {
  children: Array<{
    title: string
    component: React.ReactNode
  }>
}
*/

const WrapComponentsUp = ({ children }: ChildrenProps) => {
  return (
    <section className='max-w-2xl h-max mx-auto py-4 space-y-12 flex flex-col items-center border'>
      {
        children.map((child: { title: string; component: React.ReactNode }, index: number) => (
          <div className='text-center space-y-4 flex flex-col' key={index}>
            <span className='font-bold'>{child.title}</span>
            {child.component}
          </div>
        ))
      }
    </section>
  )
}

export default WrapComponentsUp

