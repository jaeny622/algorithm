function solution(a, b, c) {
    switch(true){
        case a===b && b===c && c===a :
            return (a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2))*(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3));
        case a!==b && b!==c && c!==a :
            return a+b+c;
        default:
            return (a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2));        
    }
 }