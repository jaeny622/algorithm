function solution(name, yearning, photo) {
    const pointArr = [];
    photo.map((item)=>{
        let point = 0;
        item.map((item_name)=>{
            if(name.includes(item_name)){
                const index = name.indexOf(item_name);
                point += yearning[index];
            }
        });
        pointArr.push(point);
    });
    
    return pointArr;
}