/***

    if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
    if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const yourFriendScore = 80;
const yourScore = 20;
if(yourScore > 80)console.log("inside your friend score");
else if(yourFriendScore >= 80)console.log("go for a lunch");
else if(yourFriendScore >= 60)console.log("good luck next time");
else if(yourFriendScore >= 40)console.log("keep your friend's message unseen");
else if(yourFriendScore < 40)console.log("block your friend");
else console.log("go to home and sleep and act sad");

// using ternary operator
console.log(yourScore>80 ? 'inside your friend score' : yourFriendScore>=80 ? 'go for a lunch' : yourFriendScore>60 ? 'good luck next time ' : yourFriendScore>40 ? 'keep your friend\'s message unseen' : yourFriendScore<40 ? 'block your friend' : 'go to home and sleep and act sad');