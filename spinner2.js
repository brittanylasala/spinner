let time = 100;
let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
spinner.forEach(function(line) {
  setTimeout(() => {
    process.stdout.write(`\r${line}   `);
  }, time);
  time += 200;
})
setTimeout(() => {
  process.stdout.write('\n');
}, 1900);