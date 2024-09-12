function solution(my_string) {
    const space_regex = /\s+/g;
    
    my_string = my_string.trim().replaceAll(space_regex,"/");
    
    return my_string.split("/");
}