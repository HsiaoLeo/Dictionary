const compose = (...fns) => data => fns.reduceRight((result,fn)=> fn(result),data);
const curry = fn => (...args) => args.length>1?fn.bind(this,...args.slice(-args.length)):fn.bind(this,args[0]);
const map = (predicate,data)=>data.map(predicate);
const filter = (predicate,data)=>data.filter(predicate);
const reduce = (predicate,init,data)=>data.reduce(predicate,init);
const log = data => {
    console.log("data:",data);
    return data;
}
