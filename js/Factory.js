const compose = (...fns) => data => fns.reduceRight((result,fn)=> fn(result),data);
const curry = fn => (...args) => args.length >= fn.length ? fn.call(null,...args) : curry(fn.bind(null,...args))
const map = (predicate,data)=>data.map(predicate);
const filter = (predicate,data)=>data.filter(predicate);
const reduce = (predicate,init,data)=>data.reduce(predicate,init);
const log = data => {
    console.log("data:",data);
    return data;
}
