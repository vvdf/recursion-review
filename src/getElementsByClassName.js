// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];

  var findElementClassList = function(element) {
    if (element.classList && Array.from(element.classList).includes(className)) {
      result.push(element);
    } 

    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
        findElementClassList(element.childNodes[i]);
      }
    }
  };

  findElementClassList(document.body);

  return result;
};
