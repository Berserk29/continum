// This Debounce will first activate the callbackFun (1st time) 
// but will activate again if the interval between is bigger than the delay
export const homeDebounce = (callbackFn, delay = 250) => {
    let readyToCall = true;
    let timeout;

    return (...args) => {
        if(readyToCall) callbackFn(...args)

        readyToCall = false;
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            readyToCall = true
        }, delay)
    }
}