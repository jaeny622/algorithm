const new_set = (arr)=>{
    const set = []
    arr.map((item)=>{
        const setValue = set.map((setItem)=>setItem.value);
        if(setValue.includes(item)){
            const idx = set.findIndex((setItem)=>setItem.value===item);
            set[idx].count += 1;
        }else set.push({value:item,count:1});
    });
    
    return set;
}

function solution(before, after) {
    const bSet = new_set(before.split(''));
    const aSet = new_set(after.split(''));
    
    
    const aSetVal = aSet.map((item)=>item.value);
    
    for(let i=0; i<bSet.length; i++){
        if(aSetVal.includes(bSet[i].value)){
            const index = aSet.findIndex((item)=>item.value===bSet[i].value);
            if(aSet[index].count !== bSet[i].count) return 0; 
        }else return 0;
         
    }
    
    return 1;
}