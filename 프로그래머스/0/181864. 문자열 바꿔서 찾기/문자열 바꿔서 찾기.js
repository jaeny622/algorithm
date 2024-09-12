function solution(myString, pat) {
    const regex_A = /A/g;
    const regex_B = /B/g;
    const regex_C = /C/g;
    
    myString = myString.replaceAll(regex_A,'C');
    myString = myString.replaceAll(regex_B,'A');
    myString = myString.replaceAll(regex_C,'B');
    
    return myString.includes(pat) ? 1: 0;
}