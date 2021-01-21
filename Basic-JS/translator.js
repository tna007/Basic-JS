let result = "";

const myNumber = Math.round(Math.random() * 1000);

console.log(myNumber);

if (myNumber >= 0 && myNumber <= 10) {
  switch (myNumber) {
    case 0:
      result = "nolla";
      break;
    case 1:
      result = "yksi";
      break;
    case 2:
      result = "kaksi";
      break;
    case 3:
      result = "kolme";
      break;
    case 4:
      result = "neljä";
      break;
    case 5:
      result = "viisi";
      break;
    case 6:
      result = "kuusi";
      break;
    case 7:
      result = "seitsemän";
      break;
    case 8:
      result = "kahdeksän";
      break;
    case 9:
      result = "yhdeksän";
      break;
    case 10:
      result = "kymmenen";
      break;
    default:
      break;
  }
} else if (myNumber > 10 && myNumber <= 19) {
  let remainder = myNumber - 10;
  switch (remainder) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksän";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }
  result += "toista";
} else if (myNumber > 20 && myNumber <= 99) {
  let module = Math.floor(myNumber / 10);
  let remainder = myNumber % 10;
  switch (module) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksän";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }
  result += "kymmentä";

  switch (remainder) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksän";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }

} else if (myNumber == 100) {
  result = "sata";
  
} else if (myNumber > 100 && myNumber <= 1000) {
  let module = Math.floor(myNumber / 100);
  let remainder = myNumber % 100;
  let remainder2 = remainder % 10;

  switch (module) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksän";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }
  result += "sataa";
  
  switch (remainder) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksän";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }
  result += "kymmentä";

  switch (remainder2) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksän";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }

} else {
  result = "tuhat";
}

console.log(result);
