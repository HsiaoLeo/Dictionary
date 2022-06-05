const AtoZ=Array.from({length:26},(_,i)=>String.fromCharCode(i+65)) ;
const speaker = new SpeechSynthesisUtterance();
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
    speechSynthesis.cancel();
    speechSynthesis.speak(u)
}
function csvtoWorksArray(){

}
function cardGenerator(wordNode,target){
    let wordCard=document.createElement("div");
    let mainWord=wordNode.data;
    let sentanceSpliter = new RegExp(`\b${mainWord.word}(?:ed|d)*\b`,"i");
    wordCard.innerHTML = `
        <div class="wordBody">
            <div class="wordMain"><span>${mainWord.word}</span><span class="volume" data-word="${mainWord.word}" onclick="speak(this.dataset.word)"></span></div>
            <div class="square ${mainWord.part_of_speech} wordMainCN"><span>${mainWord.wordCN}</span></div>
            ${mainWord.wordSimilar?`<div class="square anti similar wordSimilar"><span>${mainWord.wordSimilar}</span></div>`:""}
            ${mainWord.wordReverse?`<div class="square anti reverse wordReverse"><span>${mainWord.wordReverse}</span></div>`:""}
            <div class="wordSentance">${mainWord.sentance.split(sentanceSpliter).map(frag=>`<span${frag.toLowerCase()===mainWord.word.toLowerCase()?" class='main'":""}>${frag}</span>`).join('')}<span class="volume" data-word="${mainWord.sentance}" onclick="speak(this.dataset.word)"></span></div>
            <div class="wordSentanceCN">${mainWord.sentance_cn}</div>
        </div>
        ${wordNode.subData.map(subword => `
            <div class="wordDelimeter"></div>
                <div class="wordBody">
                <div class="square ${mainWord.part_of_speech} wordMainCN"><span>${mainWord.wordCN}</span></div>
                ${mainWord.wordSimilar?`<div class="square anti similar wordSimilar"><span>${mainWord.wordSimilar}</span></div>`:""}
                ${mainWord.wordReverse?`<div class="square anti reverse wordReverse"><span>${mainWord.wordReverse}</span></div>`:""}
                <div class="wordSentance">${mainWord.sentance.split(sentanceSpliter).map(frag=>`<span${frag.toLowerCase()===mainWord.word.toLowerCase()?" class='main'":""}>${frag}</span>`).join('')}<span class="volume" data-word="${mainWord.sentance}" onclick="speak(this.dataset.word)"></span></div>
                <div class="wordSentanceCN">${mainWord.sentance_cn}</div>
            </div>
        `)}
`;
    wordCard.classList.add("wordCard");
    target.appendChild(wordCard);
}

{/* <div class="wordCard">
            <div class="wordBody">
                <div class="wordMain"><span>abandoned</span><span class="volume" data-word="abandoned" onclick="speak(this.dataset.word)"></span></div>
                <div class="square adj wordMainCN"><span>被放棄的;被遺棄的;放蕩的</span></div>
                <div class="square anti similar wordSimilar"><span>deserted; desolate</span></div>
                <div class="square anti reverse wordReverse"><span>accepted</span></div>
                <div class="wordSentance"><span>The man who lived an </span><span class="main">abandoned</span><span> life was despised by his family.</span><span class="volume" data-word="The man who lived an abandoned life was despised by his family." onclick="speak(this.dataset.word)"></span></div>
                <div class="wordSentanceCN">那個過著放蕩生活的人被他的家人鄙視。</div>
            </div>
            <div class="wordDelimeter"></div>
            <div class="wordBody">
                <div class="square adj wordMainCN"><span>被放棄的;被遺棄的;放蕩的</span></div>
                <div class="square anti similar wordSimilar"><span>deserted; desolate</span></div>
                <div class="square anti reverse wordReverse"><span>accepted</span></div>
                <div class="wordSentance"><span>The man who lived an </span><span class="main">abandoned</span><span> life was dispised by his family.</span></div>
                <div class="wordSentanceCN">那個過著放蕩生活的人被他的家人鄙視。</div>
            </div>
        </div> */} 