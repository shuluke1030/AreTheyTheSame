function comp(a, b) {
    if(a === null || b === null){
        return false;
    }
    for(let i = 0; i < a.length; i++){
    let aPow = Math.pow(a[i], 2);
    let bIndex = b.indexOf(aPow, 0);
    if(bIndex === -1){
        return false;
    }
    b.splice(bIndex,1);
   }
   return true;
  }
  
  console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
  

