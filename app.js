const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// ES6 feature called assignment destructuring
// In basic terms, it assigns elements of an array to variable names in a single expression, as shown here:
const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});