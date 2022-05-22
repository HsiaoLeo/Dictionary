function log(str){
    console.log(str);
}
function eventBind(){

}
function start(){
    // InsertNode(new Words({w:'apple',wc:'蘋果'}));   
    // InsertNode(new Words({w:'app',wc:'應用程式'}));   
    // InsertNode(new Words({w:'banana',wc:'香蕉'}));   
    // InsertNode(new Words({w:'cat',wc:'貓'}));   
    InsertNode(new Words({w:'dog',wc:'狗',pos:'n',s:"",sc:"",sw:"",rw:""}));
    InsertNode(new Words({w:'dog',wc:'狗',pos:'n',s:"",sc:"",sw:"",rw:""},true));
    let node=searchNode("dog");
    cardGenerator(node,$$("body").element);
    
    log(Head);
}
window.addEventListener("load",start);