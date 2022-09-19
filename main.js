const prompt = require(`prompt-sync`)({signt: true});

let init = prompt(`Do you wish to combine or deconstruct colors? `);

if(init === `combine`){
    let color1 = prompt(`What is your first color to combine? `);
    let color2 = prompt(`What is your second color to combine? `);
if(color1 === `red` && color2 === `blue`){
    console.log(`Your combined colors of red and blue equal to purople.`);
}else if(color1 === 'red' && color2 === `yellow`){
    console.log(`Your combined colors of red and yellow equal to orange.`);
}else if(color1 === `blue` && color2 === `yellow`){
    console.log(`Your combined colors of blue and yellow equal to green.`);
}else{
    console.log(`error`);
}
}

if(init === `deconstruct`){
    let initclr = prompt(`Which color would you like to deconstruct? purple, orange, green - `);
if(initclr === `purple`){
    console.log(`The deconstructed equivelant to purple is red combined with blue.`);
}else if(initclr === `orange`){
    console.log(`The deconstructed equivelant to orange is red combined with yellow.`);
}else if(initclr === `green`){
    console.log(`The deconstructed equivelant to green is blue combined with yellow.`);
}else{
    console.log(`error`);
}
}