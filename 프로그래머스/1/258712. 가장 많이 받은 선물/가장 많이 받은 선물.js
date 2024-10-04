function solution(friends, gifts) {
    const giftArr = [];
    
    gifts.map((gift)=>{
        const arr = gift.split(' ');
        const nameArr = giftArr.map((item)=>item.name);
        if(nameArr.includes(arr[0])){
            const idx = giftArr.findIndex((item)=>item.name===arr[0]);
            giftArr[idx].give += 1;
            const giveNameArr = giftArr[idx].giveF.map((item)=>item.name) 
            if(giveNameArr.includes(arr[1])){
                const giftIdx = giftArr[idx].giveF.findIndex((item)=>item.name===arr[1]);
                giftArr[idx].giveF[giftIdx].count += 1;
            } else giftArr[idx].giveF.push({name: arr[1], count: 1});
        } else {
            giftArr.push({name : arr[0], give : 1, get : 0, giveF: [{name: arr[1], count: 1}], getF:[]});  
        }
        if (nameArr.includes(arr[1])){
            const idx = giftArr.findIndex((item)=>item.name===arr[1]);
            giftArr[idx].get += 1;
            const getNameArr = giftArr[idx].getF.map((item)=>item.name) 
            if(getNameArr.includes(arr[0])){
                const giftIdx = giftArr[idx].getF.findIndex((item)=>item.name===arr[0]);
                giftArr[idx].getF[giftIdx].count += 1;
            } else giftArr[idx].getF.push({name: arr[0], count: 1});
        } else {
            giftArr.push({name : arr[1], give : 0, get : 1, giveF:[], getF:[{name: arr[0], count: 1}]});
        }
    });
    
    // 아예 안주고 안받고
    const giftNameArr = giftArr.map((gift)=>gift.name);
    friends.map((fr)=>{
        if(!giftNameArr.includes(fr)){
            giftArr.push({name:fr, give:0, get:0, giftF:[{}], getF:[{}]});
        }
    })
    
    
    const getPoint = [];
    console.log(giftArr);
    giftArr.map((gift)=>{
        const myPoint = gift.give - gift.get;
        if(gift.giveF && Array.isArray(gift.giveF)){
            gift.giveF.map((give)=>{
                const idx = gift.getF.findIndex((getItem)=>getItem.name === give.name);
                // 서로 주고받은 수 판단
                if(idx!==-1 && gift.getF[idx].count < give.count){
                    const pointNameArr = getPoint.map((pt)=>pt.name);
                    if(pointNameArr.includes(gift.name)){
                        const ptIdx = getPoint.findIndex((pt)=> pt.name === gift.name);
                        getPoint[ptIdx].count += 1;
                    }else getPoint.push({name:gift.name, count:1});                    
                }

                // 한 사람만 줬을경우 판단
                else if(idx===-1){
                    const pointNameArr = getPoint.map((pt)=>pt.name);
                    if(pointNameArr.includes(gift.name)){
                        const ptIdx = getPoint.findIndex((pt)=> pt.name === gift.name);
                        getPoint[ptIdx].count += 1;
                    }else getPoint.push({name:gift.name, count:1});
                }

                // 선물 지수 판단 (기록 존재)
                if(idx!==-1 && gift.getF[idx].count === give.count){
                    const frIdx = giftArr.findIndex((item)=> item.name === gift.getF[idx].name);
                    if(frIdx!==-1){
                        const frPoint = giftArr[frIdx].give - giftArr[frIdx].get;
                        if(myPoint > frPoint){
                            const pointNameArr = getPoint.map((pt)=>pt.name);
                            if(pointNameArr.includes(gift.name)){
                                const ptIdx = getPoint.findIndex((pt)=> pt.name === gift.name);
                                getPoint[ptIdx].count += 1;
                            }else getPoint.push({name:gift.name, count:1});
                        }
                    }
                }
            });
            
            // 선물 지수 판단 (기록 없을 경우)
            const getNameArr = gift.getF.map((item)=>item.name);
            const giveNameArr = gift.giveF.map((item)=>item.name);
            friends.map((fr)=>{
                if(!getNameArr.includes(fr) && !giveNameArr.includes(fr)){
                    const frIdx = giftArr.findIndex((item)=>item.name === fr);
                    if(frIdx!==-1){
                        const frPoint = giftArr[frIdx].give - giftArr[frIdx].get;

                        if(myPoint > frPoint){
                            const pointNameArr = getPoint.map((pt)=>pt.name);
                            if(pointNameArr.includes(gift.name)){
                                const ptIdx = getPoint.findIndex((pt)=> pt.name === gift.name);
                                getPoint[ptIdx].count += 1;
                            }else getPoint.push({name:gift.name, count:1});
                        }
                    }       
                } 
            });
        }
    });
    
    const count = getPoint.map((item)=>item.count);
    return count.length > 0 ? Math.max(...count) : 0;
}