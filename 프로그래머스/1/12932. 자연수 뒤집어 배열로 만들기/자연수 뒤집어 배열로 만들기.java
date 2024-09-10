class Solution {
    public int[] solution(long n) {
        String text = Long.toString(n);
        
        int[] answer = new int[text.length()];
        
        int idx = 0;
        while(n!=0){
            answer[idx] = (int)(n%10);
            n = n/10;
            idx++;
        }
        
        return answer;
    }
}