function solution(a, b) {
    const op_result = `${a}${b}`;
    
    return Number(op_result) >= (2*a*b) ? Number(op_result) : 2*a*b;
}