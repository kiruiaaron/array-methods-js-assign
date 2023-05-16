

function funcFilter(array) {
    array = array.filter(testData);
    return array;
  }
  
  function testData(data) {
    if(data!== false || data!== null || data!== 0 || data!== "") {
      return data;
    }
  }
  
  console.log(funcFilter([58, '', 'abcd', true, null, false, 0]));
  //[58, "abcd", true]