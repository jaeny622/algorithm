function solution(wallpaper) {
    const x = [];
    const y = [];
    wallpaper.map((item,xIdx)=>{
        const strArr = item.split('');
         strArr.map((file,yIdx)=>{
             if(file==='#'){
                 if(!x.includes(xIdx))
                    x.push(xIdx);
                 if(!y.includes(yIdx))
                    y.push(yIdx);
             }
         })
    });
    x.sort((a,b)=>a-b);
    y.sort((a,b)=>a-b);
    
    return [x[0],y[0],x[x.length-1]+1,y[y.length-1]+1];
}