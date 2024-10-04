function solution(bandage, health, attacks) {
    const length = attacks.length;
    let att_idx = 0;
    let relay = 0;
    let hp = health;
    
    for(let i = 0; i <= attacks[length-1][0]; i++){
        if(hp >= health) {
            hp = health;
            relay = 0;
        }
        
        if(relay === bandage[0]) {
            relay = 0;
            hp += bandage[2]; 
        }
        
        if(i === attacks[att_idx][0]){
            relay = 0;
            hp -= attacks[att_idx][1];
            att_idx += 1;
        } else if(i!==0 && hp < health) {
            hp += bandage[1];
            relay += 1;
        }
        
        if(hp <= 0) return -1;
    }
    
    return hp;
}