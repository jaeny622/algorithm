function solution(babbling) {
    const possible = ["aya", "ye", "woo", "ma"];
    
    possible.map((item)=>{
        babbling.map((bab,idx)=>{
            if(bab.includes(item)) babbling[idx] = bab.replaceAll(item,'-')
        });
    });
    
    return babbling.filter((bab)=>bab.replaceAll('-','')==='').length;
}