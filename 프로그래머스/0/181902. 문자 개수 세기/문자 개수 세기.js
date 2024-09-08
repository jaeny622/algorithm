function solution(my_string) {
    
    const answer = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    my_string.split('').map((character,idx)=>{
        console.log(my_string.charCodeAt(idx))
        if(/^[a-z]+$/.test(character)) answer[my_string.charCodeAt(idx)-71]+=1;
        else answer[my_string.charCodeAt(idx)-65]+=1;
    })
    return answer;
}