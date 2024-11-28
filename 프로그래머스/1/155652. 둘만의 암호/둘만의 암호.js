function solution(s, skip, index) { 
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter((item)=> !skip.includes(item));

    return s.split('').map((item)=>alphabet[(alphabet.indexOf(item) + index)%alphabet.length]).join('');
}