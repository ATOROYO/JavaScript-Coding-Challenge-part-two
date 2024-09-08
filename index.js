'use strict';
// JavaScript Fundamentals – Part 2
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (soone average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// SOLUTION
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphins = calcAverage(85, 54, 41);
const koalas = calcAverage(23, 34, 27);
console.log(koalas);

const checkWinner = function (avgDolpins, avgKoalas) {
  if (avgDolpins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolpins} vs. ${avgKoalas})"`);
  } else if (avgKoalas >= 2 * avgDolpins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolpins})"`);
  }
};
console.log(checkWinner(dolphins, koalas));

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. Use functionss this time.

// SOLUTION
const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
  return tip;
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips);
console.log(total);

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// SOLUTION
const mark = {
  fullName: 'Mark Miller',
  weight: 78,
  height: 1.69,
  calBMI: function () {
    const markBMI = this.weight / (this.height * this.height);
    return markBMI;
  },
};

const john = {
  fullName: 'John Smith',
  weight: 92,
  height: 1.95,
  calBMI: function () {
    const johnBMI = this.weight / (this.height * this.height);
    return johnBMI;
  },
};

console.log(john.calBMI());

if (mark.calBMI() > john.calBMI()) {
  console.log(
    `Mark's BMI (${mark.calBMI()}) is higher than John's (${john.calBMI()})!`
  );
} else {
  console.log(
    `John's BMI (${john.calBMI()}) is higher than Mark's (${mark.calBMI()})!`
  );
}
