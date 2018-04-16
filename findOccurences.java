int firstDuplicate(int[] a) {
 LinkedHashSet set = new LinkedHashSet();
        for (int i : a) {
           if (set.add(i)== false){
               return i;
           }
        }
        return -1;
}

int firstDuplicate(int[] a) {
    Map visited = new HashMap();
    
    for(int i=0; i<a.length; i++){
        int number=a[i];
        if(visited.containsKey(number)){
            return number;
        }else{
            visited.put(number,"1");
        }
    };
        return -1;
    
}



