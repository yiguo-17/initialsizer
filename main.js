/*******************************************************************************
 * Your code here!
 ******************************************************************************/
 // asign variaes store first and last name.
const fstnm = getInput(0);
const lstnm = getInput(1);
// create function for initials and call it
function inis(fn, ln){
  return fn[0] +'.' +ln[0] + '.';
}
const nmini = inis(fstnm, lstnm);
      //
// create function for name lenth and call it.
function nmlen(fn, ln){
  return fn.length + ln.length;
}
const namelen = nmlen(fstnm, lstnm);
// genetate message and print.

const msg = 'Hey, ' +nmini +' Mind if I call you that? Your full name is '+ namelen + 'letters long!';
console.log(msg);


/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  It takes a number as a parameter and returns the argument with that index, as
  a string.

  If no argument with that index exists, undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string.
  Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined
 ******************************************************************************************/

function getInput(n) {
  return process.argv[n + 2];
}
