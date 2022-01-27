import { ReactNode } from 'react';
import { BreakpointKey, BreakpointsProps } from './breakpoints';
import { useBreakpoints } from './useBreakpoints';

/**
 * Props for Media Component
 */
export interface MediaProps<K extends BreakpointKey> {
  children(value: BreakpointsProps<K>): React.ReactNode;
}

/**
 * React Component providing breakpoints using Render Props
 */
export function Media<K extends BreakpointKey>(
  props: MediaProps<K>,
): ReactNode {
  const breakpoints = useBreakpoints<K>();
  return props.children(breakpoints);
}
