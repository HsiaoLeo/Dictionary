//querySelector addEventListener 簡化
function $$(css){
    return new Elem(css);
}
class Elem{
    #nodes =[]
    constructor(css){
        try{
            this.#nodes = Array.from(document.querySelectorAll(css));
        }
        catch(e){
            this.#nodes = [];
        }
    }
    get element(){
        switch(this.#nodes.length){
            case 0:
                return null;
            case 1:
                return this.#nodes[0]
            default:
                return this.#nodes;
        }
    }
    on(event,func,triggerState = false){
        this.#nodes.forEach(function(elem){
            elem.addEventListener(event,func,triggerState);
        })
        return this;
    }
}

class Words{
    word =""
    word_cn =[] //array
    sentance =""
    sentance_cn=""
    similar_word=[] //array
    reverse_word=[] //array
    part_of_speech=""
	#isSub
    #delimeter=';'
	static #wordCount = 0
	static get wordCount(){
		return Words.#wordCount.valueOf();
	}
	static countDecrease(){
		Words.#wordCount.decrease();
	}
    get isSubWord(){
        return this.#isSub;
    }
    get wordCN(){
        return this.word_cn.join(this.#delimeter);
    }
    get wordSimilar(){
        return this.similar_word.join(this.#delimeter);
    }
    get wordReverse(){
        return this.reverse_word.join(this.#delimeter);
    }
    constructor({w,wc,s,sc,sw,rw,pos},issub=false){
        this.word=w.toLowerCase();
        this.word_cn=wc.split(this.#delimeter);
        this.sentance=s;
        this.sentance_cn=sc;
        this.similar_word=sw.split(this.#delimeter);
        this.reverse_word=rw.split(this.#delimeter);
        this.part_of_speech=pos;
		this.#isSub = issub;
		if(!Words.#wordCount){
			Words.#wordCount = new Counter()
		}
		if(!this.isSub)Words.#wordCount.increment();
        return Object.seal(this);
    }
}
class Linked{
    A
    B
    C
    D
    E
    F
    G
    H
    I
    J
    K
    L
    M
    N
    O
    P
    Q
    R
    S
    T
    U
    V
    W
    X
    Y
    Z
    constructor(){
        return Object.seal(this);
    }
    clear(){
        Object.keys(this).forEach((key)=>{
            this[key]=undefined;
        })
    }
}
class WordNode{
    data
	subData = []
    isText=false
    isLeaf=false
    next
    constructor(word){
        if(word){
            this.isText=true;
            this.data=word;
        }
        else{
            this.isText=false;
        }
        this.next=new Linked();
        return Object.seal(this);
    }
    insert(word){
        if(!word) throw new Error("word is null");
        if(!word.isSubWord)this.data=word;
		else this.subData.push(word)
        this.isText=true;
    }
    remove(){
        this.data=undefined;
		this.subData=[];
        this.isText=false;
		Words.countDecrease();
    }
    nextNode(c){
        return this.next[c.toUpperCase()];
    }
    setNextNode(c){
        this.next[c.toUpperCase()]=new WordNode();
    }
}
class Counter{
    #val
    constructor(){
        this.#val=0;
    }
    increment(){
        this.#val ++;
        return this;
    }
	decrease(){
		this.#val --;
        return this;
	}
    valueOf(){
        return this.#val;
    }
}