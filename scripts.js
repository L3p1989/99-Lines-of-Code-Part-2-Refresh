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
        //Create h3
        const h3 = document.createElement('h3');
        //Add friend as text
        const h3Text = document.createTextNode(friend);
        //Add h3Text to h3
        h3.appendChild(h3Text);
        //Insert h3 into div
        div.appendChild(h3);
        //create p
        const p = document.createElement('p');
        //give p id of i
        p.id = i;
        //insert into div
        div.appendChild(p);
        // creates loop that counts down from 99
        for (n = 99; n > 0; n--) {
            // assigns minusOne as current loop number - 1
            let minusOne = n - 1;
            //create song
            const song = document.createTextNode(`${n} lines of code in the file, ${n} lines of code; I strike one out, clear it all out, ${minusOne} lines of code in the file.`)
            // if loop number is greater than 0 log song in console
            n > 0 ? document.getElementById(i).appendChild(song) : null
        }
    };
});