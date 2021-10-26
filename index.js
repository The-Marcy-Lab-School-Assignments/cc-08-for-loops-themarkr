//1
function countToTwenty(){
  for (let i =1; i<21; i++){
      console.log(i);
  }
}
//countToTwenty();
//2
function countFromTwenty(){
  for(let i = 20; i>0; i--){
      console.log(i);
  }
}
//countFromTwenty();
//3
function countToN(num){
  for(let i=1;i<num+1;i++){
      console.log(i);
  }
}
//countToN(10);

//4
function countFromN(num){
  for(let i=num; i>0;i--){
      console.log(i);
  }
}
//countFromN(10);
//5
function countEveryOdd(num){
  for (let i = 1; i<=num;i++){
      if(i%2 != 0){
          console.log(i);
      }
    }
}

countEveryOdd(10);