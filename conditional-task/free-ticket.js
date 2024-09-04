/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 70;
const ticketPrice = 800;
const student = true;

if (age < 10) console.log("Ticket is free for children");
else if (age >= 60)
  console.log("Senior citizen get a 15% discount " + ticketPrice * 0.15);
else if (student)
  console.log("Student get a 50% discount " + ticketPrice * 0.5);
else console.log("Regular ticket fare" + ticketPrice);
