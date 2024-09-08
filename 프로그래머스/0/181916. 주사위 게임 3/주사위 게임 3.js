function solution(a, b, c, d) {
    const array = [a,b,c,d];
    const modifyArr = [];
    
    for(let i = 0; i <4; i++){
        const valArr = modifyArr.map((item)=>item.val);
        if(!valArr.includes(array[i])) modifyArr.push({cnt:1,val:array[i]});
        else{
            const index = valArr.findIndex((val)=>val===array[i]);
            modifyArr[index].cnt = modifyArr[index].cnt+1;
        }
    }
    
    const length = modifyArr.length;
    switch(length){
        case 1:
            return 1111*modifyArr[0].val;
        case 2:
            if(modifyArr[0].cnt === 1 || modifyArr[0].cnt === 3){
                return modifyArr[0].cnt === 1 ? Math.pow((10*modifyArr[1].val+modifyArr[0].val),2) : Math.pow((10*modifyArr[0].val+modifyArr[1].val),2)
            }
            else return (modifyArr[0].val+modifyArr[1].val)*Math.abs(modifyArr[0].val-modifyArr[1].val);
        case 3:
            const index = modifyArr.map((item)=>item.cnt).findIndex((item)=>item === 2);
            let answer = [];
            for(let i = 0; i < 3; i++){
                if(i!==index) answer.push(modifyArr[i].val);
            }
            return answer[0] * answer[1]
        case 4:
            const valArr = modifyArr.map((item)=>item.val);
            return Math.min.apply(null,valArr);
    }
}