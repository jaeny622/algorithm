function solution(a, b) {
    const a_sum_b = `${a}${b}`;
    const b_sum_a = `${b}${a}`;
    
    return +a_sum_b === +b_sum_a ? +a_sum_b : +a_sum_b > +b_sum_a ? +a_sum_b : +b_sum_a;
}