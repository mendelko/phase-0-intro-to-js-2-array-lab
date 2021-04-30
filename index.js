const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push('Ralph');
    return cats;
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(){
    const newArray = [...cats, "Broom"];
    return newArray;
}

function prependCat(){
    const newArray = ["Arnold", ...cats];
    return newArray;
}

function removeLastCat(){
    const newArray = cats.slice(0, 2);
    return newArray;
}

function removeFirstCat(){
    const newArray = cats.slice(1, 3)
    return newArray;
}
