let a = Math.floor(Math.random() * 2);
let b = Math.floor(Math.random() * 2);
let c = Math.floor(Math.random() * 2);
let d = Math.floor(Math.random() * 2);
let e = Math.floor(Math.random() * 2);
/* can't get 00000 to congrats phrase but went straight to default instead??? */
/* switch ((a, b, c, d, e)) {
  case 1:
    if (a == b && b == c && c == d && d == e && a !== 1) {
      console.log("Congrats!", a, b, c, d, e);
    }
    break;

  case 2:
    if (a === b && b === c && c === d && d === e && a === 1) {
      console.log(
        "Congrats! You have won a jackpot prize",
        a,
        b,
        c,
        d,
        e,
        "the probability is ",
        1 / 2 ** 5
      );
    }
    break;

  default:
    console.log("You have not won a jackpot prize", a, b, c, d, e);
    break;
} */
if (a == b && a == c && a == d && a == e) {
  if (a == 0) {
    console.log("Congrats!", a, b, c, d, e);
  } else {
    console.log(
      "Jackpot!",
      a,
      b,
      c,
      d,
      e,
      "/n Your probability is:",
      1 / 2 ** 5
    );
  }
} else {
  console.log("Good luck next time!", a, b, c, d, e);
}
