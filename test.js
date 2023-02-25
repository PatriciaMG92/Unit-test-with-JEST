const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});



test("One euro should be 1.206 dollars", function(){

    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("OneEuroIs.USD should be 127.9 yens", function(){
    
    expect(fromDollarToYen(1)).toBe(127.9);   
})

test("OneEuroIs.JPY should be 0.8 pounds", function(){
    
    expect(fromYenToPound(1)).toBe(0.8);
})
