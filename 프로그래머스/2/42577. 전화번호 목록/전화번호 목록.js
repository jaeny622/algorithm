function solution(phone_book) {
    const map = new Map();
    phone_book.map((item)=>{
        map.set(item,'');
    });
    
    for(let [key,] of map){
        for(let i = 1; i < key.length; i++){
            if(map.has(key.slice(0,i))) return false;
        }
    }
    
    return true;
}