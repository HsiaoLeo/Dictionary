class Words{
    word
    word_cn //array
    sentance
    sentance_cn
    similar_word //array
    part_of_speech
	static #wordCount = 0
	static get wordCount(){
		return Words.#wordCount.valueOf();
	}
	static countDecrease(){
		Words.#wordCount.decrease();
	}
    constructor({w,wc,s,sc,sw,pos}){
        this.word=w.toLowerCase();
        this.word_cn=wc;
        this.sentance=s;
        this.sentance_cn=sc;
        this.similar_word=sw;
        this.part_of_speech=pos;
		if(!Words.#wordCount){
			Words.#wordCount = new Counter()
		}
		Words.#wordCount.increment();
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
        this.data=word;
        this.isText=true;
    }
    remove(){
        this.data=undefined;
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