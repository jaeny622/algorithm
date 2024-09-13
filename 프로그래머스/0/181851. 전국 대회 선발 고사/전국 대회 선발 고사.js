function solution(rank, attendance) { 
    const attendanceIdx = [];
    attendance.map((item,idx)=>{ 
        if(item) attendanceIdx.push(idx);
    });
    
    let rankItem = [];
    attendanceIdx.map((idx)=> rankItem.push(rank[idx]));
    
    const high = [];
    while(high.length < 3){
        const minVal = Math.min.apply(null,rankItem)
        high.push(minVal);
        
        rankItem = rankItem.filter(item=>item !== minVal);
    }
    
    const highIdx = high.map((highVal)=>rank.findIndex(item => item===highVal));
    
    return 10000 * highIdx[0] + 100 * highIdx[1] + highIdx[2];
}