const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});



test("One euro should be 1.206 dollars", function(){
    const dollars = fromEuroToDollar(5);
    const expectedDollars = 5 * 1.2;
    expect(dollars).toBe(expectedDollars);
})

test("3 USD should be 319.75 yens", function(){
    const yens = fromDollarToYen(3);
    const expectedYens= (3 / 1.2) * 127.9;
    expect(yens).toBe(expectedYens);   
})

test("One Hundred JPY should be 0.625 pounds", function(){
    const pounds = fromYenToPound(100);
    const expectedPounds = (100/127.9) * 0.8;
    expect(pounds).toBe(expectedPounds);
})
