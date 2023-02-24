const { sum, } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});



test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("1.2 Dollars should be 153.48 Yens", function(){
    const { fromDollarToYen } = require('./app.js')
    
    expect(fromDollarToYen(1.2)).toBe(153.48);
})

test("153.48 Yens should be 122.784 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    
    expect(fromYenToPound(153.48)).toBe(122.78399999999999);
})
