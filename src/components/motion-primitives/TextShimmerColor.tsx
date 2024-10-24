import { TextShimmer } from '@/components/core/text-shimmer';

//! Remarks
/* 
You can use the [--base-color] and [--base-gradient-color] CSS variables to customize the color of the shimmer effect.
*/

export function TextShimmerColor() {
  return (
    <TextShimmer
      duration={1.2}
      className='text-xl font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
    >
      Hi, how are you?
    </TextShimmer>
  );
}
