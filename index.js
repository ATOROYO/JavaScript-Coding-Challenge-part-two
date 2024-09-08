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
