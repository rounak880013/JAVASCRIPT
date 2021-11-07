function confirmEnding(str, target) {
    let arr=str.split('');
    let arr1=target.split('');
    let j=target.length-1;
    let i=str.length-1;
    let ans=true;
    if(j>i)
    {
      return false;
    }
    while(i>=0 && j>=0)
    {
      if(arr[i]!=arr[j])
      {
        return false;
      }
      i--;
      j--;
    }
    return ans;
  }
confirmEnding("Bastian", "n");