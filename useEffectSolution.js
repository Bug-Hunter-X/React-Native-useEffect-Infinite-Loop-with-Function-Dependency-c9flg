const memoizedFunc = useCallback(() => {
  // Your function code here
}, [/* dependencies of the function */]);

useEffect(() => {
  // Your effect code here. Now safe to use memoizedFunc
  memoizedFunc();
}, [memoizedFunc, /* other dependencies */]);