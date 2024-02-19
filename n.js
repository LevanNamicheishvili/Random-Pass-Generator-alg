const characterSets = {
  upCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZz0123456789',
  lowCharacters: 'abcdefghijklmnopqrstuvwxy',
  nums: '0123456789',
  symbols: '!@#$%^&*()_+{}|?><>',
};

let passwordLength = prompt("Enter the length of the password:");
let password = '';
let selectedSets = [];

Object.keys(characterSets).forEach(set => {
  if (prompt(`Do you want to include ${set}? (yes/no)`) === 'yes') {
    selectedSets.push(characterSets[set]);
  }
});

for (let i = 0; i < passwordLength; i++) {
  let randomSet = selectedSets[Math.floor(Math.random() * selectedSets.length)];
  password += randomSet.charAt(Math.floor(Math.random() * randomSet.length));
}

alert("Your password is: " + password);