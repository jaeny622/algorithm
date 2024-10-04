function solution(sizes) {
    const w = [];
    const h = [];
    
    sizes.map((size)=>{
        w.push(Math.max(...size));
        h.push(Math.min(...size));
    });
    
    
    return Math.max(...w) * Math.max(...h);
}