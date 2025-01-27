# React Native useEffect Infinite Loop Bug

This repository demonstrates a common bug in React Native involving the `useEffect` hook and function dependencies.  The bug causes infinite re-renders, leading to app crashes or unexpected behavior.

## Bug Description
The issue arises when a function is included in the dependency array of the `useEffect` hook. Since functions are recreated on every render, React detects a change in the dependency, triggering another render, and creating an infinite loop.

## Solution
The solution involves using `useCallback` to memoize the function, preventing unnecessary recreations. This ensures that React only triggers the effect when the memoized function's dependencies actually change.

## How to reproduce the bug and solution
1. Clone the repo.
2. Run `npm install`
3. Run `npx react-native run-android` or `npx react-native run-ios`
4. Observe the console logs for the infinite loop and the successful memoization solution.