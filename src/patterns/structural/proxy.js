/**
 * Proxy
 * 
 * Something like middleware for caching
 */
function networkFetch(url) {
    return `${url} - response from server`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0];
        if ( cache.has(url) ) {
            return `${url} - response from cache`;
        }

        cache.add(url);
        return Reflect.apply(target, thisArg, args);
    }
});

console.log(proxiedFetch('vuejs.org'));
console.log(proxiedFetch('react.com'));
console.log(proxiedFetch('vuejs.org'));
console.log(proxiedFetch('nuxt.com'));