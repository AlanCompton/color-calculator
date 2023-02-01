const prompt = require(`prompt-sync`)({signt: true});

let init = prompt(`Enter a color you would like to deconstruct or colors you would like to combine: `);
let x = init.toLowerCase();

if(x === "purple"){
    console.log(`Deconstructed: red + blue`);
}else if(x === "orange"){
    console.log(`Deconstructed: red + yellow`);
}else if(x === "green"){
    console.log(`Deconstructed: blue + yellow`);
}else if(x === "red blue" || x === "blue red" || x === "red + blue" || x === "blue + red"){
    console.log(`Combined: purple`);
}else if(x === "red yellow" || x === "yellow red" || x === "red + yellow" || x === "yellow + red"){
    console.log(`Combined: orange`);
}else if(x === "yellow blue" || x === "blue yellow" || x === "yellow + blue" || x === "blue + yellow"){
    console.log(`Combined: green`);
}else{
    console.log(`error`);
}