function getFirstPython(list) {

  var answer = list.find(function(element){
    return element.language = 'Python';
  });

  if (answer){
    `${answer.firstName}, ${answer.country}`;
  } else {
    return 'There will be no Python Developer';
  }

}
