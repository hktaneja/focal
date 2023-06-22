const args = process.argv;
let sum = 0;
for (let i = 2; i < args.length; i++) {
  if (! isNaN(Number(args[i]))) {
    sum += Number(args[i]);
  }
}
console.log("The sum is " + sum);
  


 
