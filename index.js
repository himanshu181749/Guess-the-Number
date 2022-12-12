function getRandom() {
    return Math.floor(Math.random() * 100 +1);;
  }

  let num=getRandom();
  let count=0;
  let score=100;
  let userNo=201;

  while(userNo!=num){
    userNo = prompt("Enter the Your guess");
    userNo = Number.parseInt(userNo);

    if(userNo<num){
        console.log("Your Guess is Greater than no") ;
        score-=1 ;
        count+=1 ;
    }
    else{
       console.log("Your Guess is Smaller than no")
       score-= 1;
       count+= 1;
    }

  }

    console.log("Great Work You Got it")
    console.log("Your Score is =",score)
    console.log("No of Guess it Take = ",count)
