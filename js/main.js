function log(str){
    console.log(str);
}
window.onload=function(){
    InsertNode(new Words({w:'apple',wc:'蘋果'}));   
    InsertNode(new Words({w:'app',wc:'應用程式'}));   
    InsertNode(new Words({w:'banana',wc:'香蕉'}));   
    InsertNode(new Words({w:'cat',wc:'貓'}));   
    InsertNode(new Words({w:'dog',wc:'狗'}));   
    log(Head);
}