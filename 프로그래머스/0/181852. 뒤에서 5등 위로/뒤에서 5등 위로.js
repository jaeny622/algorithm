function solution(num_list) {
   return num_list.sort((a,b)=>{
      if(a > b) return 1;
      else if(a === b) return 0;
      else return -1;
    }).slice(5,num_list.length);
}