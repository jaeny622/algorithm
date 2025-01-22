
function solution(word) {
    const sort = ['A','E','I','O','U'];
    const dic = [];
    
    function dfs(current, length){
        if(length > 5) return;
        dic.push(current);
        
        for(let i = 0; i < sort.length; i++){
            dfs(current+sort[i], length+1);
        }
    }
    
    dfs("",0);
    
    return dic.indexOf(word);
}