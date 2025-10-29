function solution(id_list, report, k) {
    var answer = [];
    const newReport = [...new Set(report)];
    const map = new Map();
    
    for(id of id_list) {
        map.set(id, {error:[], cnt: 0});
    }
    
    for(reportItem of newReport) {
        const [reporter, error] = reportItem.split(" ");
        const reporterVal = map.get(reporter);   
        const errVal = map.get(error);   
        
        map.set(reporter, {...reporterVal, error: [...reporterVal.error, error]});
        map.set(error, {...errVal, cnt: errVal.cnt + 1});
    }
    
    const warningId = [];
    for([key, value] of map){
        if(value.cnt >= k) {
            warningId.push(key);
        }
    }
    
    for(id of id_list) {
        let count = 0;
        if(map.get(id) && map.get(id).error.length > 0) {
            map.get(id).error.map((errId) => {
                if(warningId.includes(errId)) {
                    count += 1;
                }
            })
        }
        answer.push(count);
    }
    
    return answer;
}