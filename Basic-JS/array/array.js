let round = 0;
let jackpotCount = 0;

const costOneRound = 0.5;
const randomRange = 6;
const jackPotWon = 10;

while (jackpotCount < jackPotWon) {
  jackpotCount++;
  win = false;

  while (win === false) {
    round++;
    let a = [];
    /* a[0] = Math.floor(Math.random() *2)
  a[1] = Math.floor(Math.random() *2)
  a[2] = Math.floor(Math.random() *2)
  a[3] = Math.floor(Math.random() *2)
  a[4] = Math.floor(Math.random() *2) */

    let count = 0;

    while (count < 5) {
      a[count] = Math.floor(Math.random() * randomRange);
      console.log(a[count] === 1 ? 1 : 0);
      count++;
    }
    console.log(
      a
    ); /* while (count) {
      count--;
      console.log(a[count]);
     */ /* if (a[count] === 1) {
        console.log("1");
      } else {
        console.log("0");
      }
    
      if (count === 0) {
        break;
      } */ //}

    /* while (true) {
      a[count] = Math.floor(Math.random() * 2);
      count++;
      if (count === 5) {
          break;
      }
    }
     */ let oneCount = 0;
    let zeroCount = 0;

    while (count) {
      count--;

      if (a[count] === 1) {
        oneCount++;
      } else {
        zeroCount++;
      }
    }

    console.log(`Found ${oneCount} ones and ${zeroCount} zeroes`);

    if (oneCount === 5) {
      win = true;
    } else if (zeroCount === 5) {
      console.log("Congrats but no win");
    } else if (oneCount > 3 && zeroCount < 5) {
      console.log("Small prize");
    } else {
      console.log("Nothing");
    }

    if (win) {
      break;
    }
  }
}

let expend = costOneRound * round;
console.log(`${round} rounds was played til jackpot won`);
console.log(`${expend} euro was spent til jackpot`);
console.log(
  `${
    expend / jackPotWon
  } euro is average spending money to won ${jackpotCount} Jackpots`
);
