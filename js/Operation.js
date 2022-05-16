const AtoZ=Array.from({length:26},(_,i)=>String.fromCharCode(i+65)) ;
const Head=new WordNode();
function InsertNode(data){
    let targetNode = arriveNodePos(data.word);
    targetNode.insert(data);
}
function removeNode(wordStr){
    let targetNode = searchNode(wordStr);
    if(targetNode.isText)targetNode.remove();
}
function arriveNodePos(wordStr){
    let node = Head;
    for(let c of [...wordStr]){
        let nextNode=node.nextNode(c);
        if(!nextNode) {
            node.setNextNode(c)
        }
        node = node.nextNode(c);
    }
    return node;
}
function searchNode(wordStr){
    let node=Head;
    for(let c of [...wordStr]){
        node=node.nextNode(c);
        if(!node)return false;
    }
    return node;
}
function search(workStr){
    let targetNode=searchNode(workStr);
    return targetNode.isText?targetNode.data:false;
}
function walkThroughNode(Node = Head,maxCount=Infinity){
    return walkThrough(Node,maxCount,new Counter())
}
function walkThrough(Node,maxCount,counter){
    return counter>=maxCount
        ? []
        : AtoZ
            .map(key=>Node.next[key])
            .filter(node=>node)
            .reduce((arr,node)=>counter>=maxCount
                ? arr
                : node.isText
                    ?[...arr,node.data,...walkThrough(node,maxCount,counter.increment())]
                    :[...arr,...walkThrough(node,maxCount,counter)]
            ,[]);
}
function speak(wordStr){
    let u=new SpeechSynthesisUtterance();
    u.text=wordStr;
    speechSynthesis.speak(u)
}
function csvtoWorksArray(){

}
function cardGenerator(word){
    
}