// Code your solutions in this file
function countDown(start){
    while (start >= 0 ){
        console.log(start);
        start--;
    }
}
countDown(10);

function writeCards(names, event) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}