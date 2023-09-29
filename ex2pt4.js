const ages = [25, 31, 42, 77];

let partd = ages.map((item)=>{
    if (item < 70) {
        return item * 2;
    } else {
        return item;
    }

    return item*2;
});
console.log(partd);
//multiplies each number by 2 except for numbers over 70