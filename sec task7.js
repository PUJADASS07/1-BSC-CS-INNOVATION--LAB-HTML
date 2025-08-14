let sentence = "Hello world";
let result = sentence
  .split(" ")
  .map(w => w.split("").reverse().join(""))
  .join(" ");
console.log(result);



let numbers = [1, 2, 3, 2, 4, 3, 5];

let uniqueNumbers = numbers.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

console.log(uniqueNumbers); 


function countVowels(str) 
{
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) 
    {
        if (vowels.includes(char)) 
        {
            count++;
        }
    }
    return count;
}
let text = "JavaScript";
console.log(countVowels(text));  
