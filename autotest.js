describe("getValuesById(id)", function() {

  describe("Возвращает значение параметра value - Идентификатор значения этого параметра. либо строка, если у параметра нет массива значений. Принимает id - Уникальный идентификатор", function() {

    function makeTest(id,i) {
      let expected = [
      298,
      "Валидация параметров на подаче объявления",
      345,
      4931,
      646,
      7204,
      877,
      3627
      ];
      
      //for(let i in expected){
      it(`for id = ${id} value = ${expected[i]}`, function() {
 
      var found = getValuesById(id);
      assert.equal(found[0].value, expected[i]);
      
      });
      //}
    }

   var id = [
   34,
   146,
   73,
   230,
   122,
   1373,
   421,
   2128
   ];
   
   for (let i in id) {
    makeTest(id[i],i);
   }

  });

it("Если переменная 'id' = 777 т.е. несуществующий, результат будет 'undefined'", function() {
    var id = 777; 
    var found = getValuesById(id);
    assert.isUndefined(found[0], undefined );
  });
  
  it("Если переменная 'id' = '', результат будет 'undefined'", function() {
    var id = ''; 
    var found = getValuesById(id);
    assert.isUndefined(found, undefined );
  });
  
    it("Если переменная 'id' = 'NaN', результат будет 'undefined'", function() {
    var id = NaN; 
    var found = getValuesById(id);
    assert.isUndefined(found, undefined );
  });
  
    it("Если переменная 'id' = 'null', результат будет 'undefined'", function() {
    var id = null; 
    var found = getValuesById(id);
    assert.isUndefined(found, undefined );
  });
  
    it("Если переменная 'id' = '\\s', результат будет 'undefined'", function() {
    var id = ' '; //\s
    var found = getValuesById(id);
    assert.isUndefined(found, undefined );
  });

  it("Если переменная 'id' = '\\tab' , результат будет 'undefined'", function() {
    var id = '  '; //\t
    var found = getValuesById(id);
    assert.isUndefined(found, undefined );
  });
  
    it("Если переменная 'id' = isNaN, результат будет 'undefined'", function() {
    var id = 'qwerty'; 
    var found = getValuesById(id);
    assert.isUndefined(found, undefined );
  });
  
}); 


describe("функция fillWithValues()", function() {

  it("Функция fillWithValues() возвращает -  'OK', если работает корректно", function() {
    var VallError = fillWithValues();
    assert.equal(VallError, 'OK' );
  });

});
