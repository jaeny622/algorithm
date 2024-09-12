function solution(rny_string) {
    const regex = /m/ig;
    return rny_string.replaceAll(regex, 'rn');
}