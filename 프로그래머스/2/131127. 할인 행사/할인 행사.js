function solution(want, number, discount) {
    var answer = 0;
    const wantLength = want.length;
    const wantObj = {};
    
    want.map((item,idx)=> wantObj[item] = number[idx]);
    
    for(let i = 0; i < discount.length - 9; i++) {
        const saleObj = {};
        const newArr = discount.slice(i, i + 10);

        newArr.map((item, idx) => saleObj[item] = (saleObj[item] ?? 0) + 1);

        let cnt = 0;
        for(let j = 0; j < want.length; j++) {
            if(wantObj[want[j]] - saleObj[want[j]] <= 0) {
                cnt += 1;
            }
        }
        
        if(cnt === wantLength) answer += 1;
    }
    
    return answer;
}