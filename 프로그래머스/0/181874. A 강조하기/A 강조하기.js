function solution(myString) {
    let answer = '';
    
    const string_arr = myString.toLowerCase().split('');
    
    string_arr.map((string)=>{
        if(string==='a') answer+='A';
        else answer+=string;
    })
    return answer;
}