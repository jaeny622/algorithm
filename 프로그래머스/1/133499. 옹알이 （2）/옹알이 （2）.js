function solution(babbling) {
    const possible = ["aya", "ye", "woo", "ma" ];
    
    possible.map((item,i)=>{
        babbling.map((bab,idx)=>{
            if(!/(aya){2,}|(ye){2,}|(woo){2,}|(ma){2,}/.test(bab) && bab.includes(item)) babbling[idx] = babbling[idx].replaceAll(item,'-'); 
        });
    });

    
    return babbling.filter((bab)=>bab.replaceAll('-','')==='').length;
}