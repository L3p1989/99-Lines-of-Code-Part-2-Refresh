// Array of friends
let friends = ["Irish", "Siacca", "Glenn", "Lyndz", "Necco"];
//Grab body
const body = document.body;
//Grab button.friend-btn
const friendBtn = document.getElementById('friendBtn')
//Add click event listener to friendBtn
friendBtn.addEventListener('click', () => {
    // Loop to make friends array sing 99 lines of code
    for (i = 0; i < friends.length; i++) {
        // assigns friend to current position in friends array
        let friend = friends[i];
        //creates div
        const div = document.createElement('div');
        //give div className "friend"
        div.className = "friend"
        //Insert div into body
        body.appendChild(div);
        // creates loop that counts down from 99
        for (n = 99; n > 0; n--) {
            // assigns minusOne as current loop number - 1
            let minusOne = n - 1;
            // if loop number is greater than 0 log song in console
            if (n > 0) {
                console.log(`"${n} lines of code in the file, ${n} lines of code; ${friend} strikes one out, clears it all out, ${minusOne} lines of code in the file"`);
            }
        }
    };
});