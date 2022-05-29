export function throttle(f, t) {
    let isThrottling = false;
    let hasTrailingCall = false;
    let lastContext, lastArgs;

    const invokeFunc = (contenxt, args) => {
        f.apply(this, args);
        isThrottling = true;

        setTimeout(() => {
            isThrottling = false;
            if(hasTrailingCall) {
                invokeFunc(lastContext, lastArgs)
                lastContext = undefined
                lastArgs = undefined
                hasTrailingCall = false
            }
        }, t);
    }

    return function (...args) {
        if (!isThrottling) {
            invokeFunc(this, args)
        } else {
            hasTrailingCall = true
            lastContext = this
            lastArgs = args
        }
    };
}