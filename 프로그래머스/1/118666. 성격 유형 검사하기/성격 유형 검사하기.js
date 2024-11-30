function solution(survey, choices) {
    let answer = '';
    const type = ['RT','CF','JM','AN'];
    const obj = {};
    
    type.map((item)=>{
        const splitArr = item.split('');
        obj[splitArr[0]] = (obj[splitArr[0]] || 0);
        obj[splitArr[1]] = (obj[splitArr[1]] || 0);
    })
    
    choices.map((choice,idx)=>{
        if(choice !== 4){
            const splitArr = survey[idx].split('');
            if(choice < 4) obj[splitArr[0]] += 4-choice;
            else obj[splitArr[1]] += choice-4;
        }
    });
    
    
    type.map((item)=>{
        const splitArr = item.split('');
        if(obj[splitArr[0]] >= obj[splitArr[1]] ) answer+=splitArr[0];
        else answer+=splitArr[1];
    })
    
    
    return answer;
}