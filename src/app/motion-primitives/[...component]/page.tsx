import { MotionPrimitives } from '@/types'
import ComponentSelector from '@/components/ComponentSelector'
import Link from 'next/link'
type Props = {
  params: {
    component: MotionPrimitives
  }
}

const page = async ({ params }: Props) => {
  const { component } = await params
  return (
    <main className='space-y-4'>
      <h1 className="bg-black opacity-65 w-max p-4 text-zinc-400 rounded-lg ml-2">
        Current component:<span className="font-bold text-amber-300"> {component}</span>
      </h1>

      <article className="px-4">
        <ComponentSelector selector={component} />
      </article>
      <div className="text-center">
        <Link href="/" className="bg-black uppercase px-4 py-2 rounded-lg text-yellow-200">back</Link>
      </div>
    </main>
  )
}

export default page