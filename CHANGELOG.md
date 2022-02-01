# Changelog

## Unreleased

### Added

- Added component `MatchBreakpoint`

### Changed

- Always changes in breakpoints if a new object reference is passed (breaking)

### Removed

- Removed property `detectBreakpointsObjectChanges` in `ReactBreakpointsProps`

## [4.0.2] - 2022-01-31

### Fixed

- Fixed compatibility with ES5 browsers (object destructuring support)

## [4.0.1] - 2022-01-29

### Fixed

- Fixed path to repo in package.json

## [4.0.0] - 2022-01-28

### Added

- Added hook `useBreakpoints`

### Changed

- Convert to typescript
- Refactor to use function components and hooks
- `ReactBreakpoints` does not trigger re-renders when the `breakpoints` object changes by default

### Removed

- Removed undocumented `snapMode` property