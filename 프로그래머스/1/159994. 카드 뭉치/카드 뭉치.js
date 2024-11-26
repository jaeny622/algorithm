function solution(cards1, cards2, goal) {
    var answer = '';
    
    const comp1 = [];
    const comp2 = [];
    
    goal.map((item)=>{
        if(cards1.includes(item)) comp1.push(item);
        else comp2.push(item);
    });
    
    return cards1.join('').includes(comp1.join('')) && cards2.join('').includes(comp2.join('')) ? 'Yes' : 'No';
}