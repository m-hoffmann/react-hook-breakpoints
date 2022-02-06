import type {
  BreakpointMap,
  BreakpointUnit,
  SortedBreakpointQueries,
} from '../breakpoints';

import { sortBreakpoints } from './sortBreakpoints';

function minWidth(value: number, unit: BreakpointUnit): string {
  return `(min-width: ${value}${unit})`;
}

function maxWidth(value: number, unit: BreakpointUnit): string {
  return `(max-width: ${value}${unit})`;
}

/**
 * Creates sorted array of breakpoints
 * @param breakpoints
 * @param breakpointUnit
 * @returns
 */
export function createBreakpointQueryArray<K extends string>(
  breakpoints: BreakpointMap<K>,
  breakpointUnit: BreakpointUnit,
): SortedBreakpointQueries<K> {
  const sortedBreakpoints = sortBreakpoints(breakpoints);

  const queryArray: SortedBreakpointQueries = sortedBreakpoints.map(
    (breakpoint, breakpointIndex) => {
      const smallerBreakpoint = sortedBreakpoints[breakpointIndex + 1];
      const largerBreakpoint = sortedBreakpoints[breakpointIndex - 1];
      const queries: string[] = [];

      if (smallerBreakpoint != null) {
        // larger than the current one
        queries.push(minWidth(breakpoint[1], breakpointUnit));
      }

      if (largerBreakpoint != null) {
        // smaller than the larger one
        queries.push(maxWidth(largerBreakpoint[1], breakpointUnit));
      }

      // if there is no previous and no next
      // then there is a single breakpoint that matches
      if (queries.length === 0) {
        // we need to use all, empty string fails on some browsers
        queries.push('all');
      }

      return [breakpoint[0], queries.join(' and ')];
    },
  );

  return queryArray as SortedBreakpointQueries<K>;
}