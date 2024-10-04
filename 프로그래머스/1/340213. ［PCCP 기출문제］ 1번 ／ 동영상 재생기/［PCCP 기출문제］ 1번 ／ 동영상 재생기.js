const modifyTime = (str)=>{
    const time = str.split(':');
    return +time[0]*60 + +time[1];
}

function solution(video_len, pos, op_start, op_end, commands) {
    const video_time = modifyTime(video_len);
    const start_time = modifyTime(op_start);
    const end_time = modifyTime(op_end);
    
    let cur_pos = modifyTime(pos);
    
    
    commands.map((cmd)=>{
       if(cur_pos >= start_time && cur_pos <= end_time){
            cur_pos = end_time;
        }
        
        if(cmd === 'next'){
            if(cur_pos >= video_time - 10) cur_pos = video_time;        
            else cur_pos += 10;
        }
        else {
            if(cur_pos <= 10) cur_pos = 0;
            else cur_pos -= 10;
        }
    });
    
    if(cur_pos >= start_time && cur_pos <= end_time){
            cur_pos = end_time;
    }
    
    const hh = Number.parseInt(cur_pos / 60);
    const mm = cur_pos % 60;
    return `${hh < 10 ? `0${hh}`: hh}:${mm < 10 ? `0${mm}` : mm}`;
}