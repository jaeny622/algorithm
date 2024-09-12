function solution(binomial) {
    const binomial_arr = binomial.split(" ");
    const a = +binomial_arr[0];
    const b = +binomial_arr[2];
    
    switch (binomial_arr[1]){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
    }
}