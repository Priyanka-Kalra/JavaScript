let maxVal=parseInt(prompt("Enter a Maximum number"));
while (!maxVal) maxVal = parseInt(prompt("Enter a valid number!!!!"));

let target=Math.floor(Math.random()*maxVal)+1;

let i=1;
let guess=prompt(`Enter your ${i}st guess or \'q\' to quit`);
while(parseInt(guess)!=target){
    i++;
    if(guess==='q'){
        console.log('Exiting.....');
        break;
    }
    if (parseInt(guess) > target) guess = prompt('Value larger,Enter next guess');
    else if (parseInt(guess) < target) guess = prompt('Value smaller,Enter next guess');
    
}

if(guess=='q')console.log('You quit,Come back again!!!1')
else console.log(`You won by making  total ${i} guesses.Target value was ${target}`);
