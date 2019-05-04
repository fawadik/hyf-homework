function translateOneByOne() {
    var greenBox = moveElement(document.querySelector('ul.marks > li:nth-child(1)'), {x: 20, y: 300})
    .then(() => {
        console.log('Red box moved');
        var redBox = moveElement(document.querySelector('ul.marks  > li:nth-child(2)'), {x: 400, y: 300});
        return redBox;
    })
    .then(() => {
        console.log('Blue box moved');
        var blueBox = moveElement(document.querySelector('ul.marks > li:nth-child(3)'), {x: 400, y: 20});
        return blueBox;
    })
    .then(() => {
        console.log('Green box moved');
        return greenBox;
    })
    .catch((error) => {
        console.log(error);
      });
}

translateOneByOne();