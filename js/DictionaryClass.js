const AtoZ=Array.from({length:26},(_,i)=>String.fromCharCode(i+65)) 
class Words{
    word
    word_cn //array
    sentance
    sentance_cn
    similar_word //array
    part_of_speech
    constructor({w,wc,s,sc,sw,pos}){
        this.word=w;
        this.word_cn=wc;
        this.sentance=s;
        this.sentance_cn=sc;
        this.similar_word=sw;
        this.part_of_speech=pos;
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
    }
    insert(word){
        if(!word) throw new Error("word is null");
        this.data=word;
        this.isText=Text;
    }
    remove(){
        this.data=undefined;
        this.isText=false;
    }
    next(c){
        return this.next[c];
    }
}