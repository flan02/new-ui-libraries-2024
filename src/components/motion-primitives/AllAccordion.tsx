/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { AccordionBasic } from './AccordionBasic'
import { AccordionIcons } from './AccordionIcons'
import { AccordionVariant } from './AccordionVariants'

type Props = {}

const AllAccordion = (props: Props) => {
  return (
    <section className='max-w-xl mx-auto space-y-4'>
      <div className='flex flex-col space-y-4 p-4 border border-slate-300'>
        <span className='text-center'>Accordion Basic</span>
        <AccordionBasic />
      </div>
      <div className='flex flex-col space-y-4 p-4 border border-slate-300'>
        <span className='text-center'>Accordion Icons</span>
        <AccordionIcons />
      </div>
      <div className='flex flex-col space-y-4 p-4 border border-slate-300'>
        <span className='text-center'>Accordion Variants</span>
        <AccordionVariant />
      </div>
    </section>
  )
}

export default AllAccordion