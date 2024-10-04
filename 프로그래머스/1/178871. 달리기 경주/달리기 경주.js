function solution(players, callings) {
    const map = new Map();
    players.map((player,idx)=>{
        map.set(player,idx);
    });
    
    
    callings.map((call)=>{
        const idx = map.get(call);
        const prev = players[idx-1];
        const cur = players[idx];
        
        players[idx-1] = cur;
        players[idx] = prev;
        map.set(call, idx-1);
        map.set(prev, idx);
    });
    
    return players;    
}