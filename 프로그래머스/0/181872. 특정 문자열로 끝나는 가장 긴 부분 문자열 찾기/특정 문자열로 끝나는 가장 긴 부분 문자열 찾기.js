function solution(myString, pat) {
    let index = 0;
    let count = 0; 
    const modified_myString_arr = myString.replaceAll(new RegExp(pat, 'g'),'*').split('');

    modified_myString_arr.map((str,idx)=>{
        if(str==='*') {
            count+=1;
            index=idx;
        }
    });
    
    return myString.substring(0,index+(pat.length-1)*count+1);
}