function solution(today, terms, privacies) {
    var answer = [];
    const date = new Date(today);
    const expired = {};
    
    
    terms.map((item)=>{
        const splitItem = item.split(' ');
        expired[splitItem[0]] = splitItem[1];
    });
    
    privacies.map((privacy,idx)=>{
        const splitItem = privacy.split(' ');
        const modiDate = new Date(splitItem[0]);
        const newDate = new Date(modiDate.setMonth(modiDate.getMonth()+ +expired[splitItem[1]]));
        
        if(newDate <= date) answer.push(idx+1);
    });
    
    return answer;
}