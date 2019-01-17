function isTriangle(num1, num2, num3) {
  if((num1 + num2) > num3) {
    if((num1 + num3) > num2) {
      if((num2 + num3) > num1) {
        return true;
      }
    }
  } else {
    return false;
  }
}

function triangleType(num1, num2, num3) {
  if(num1 === num2 && num1 === num3) {
    return "Equilateral";
  }
  else if(num1 === num2 || num1 === num3 || num2 === num3) {
    return "Isosceles";
  }
  else {
    return "Scalene";
  }
}

$(function() {
  $(".btn").click(function(event){
    var sideOne = parseInt($("#num1").val());
    var sideTwo = parseInt($("#num2").val());
    var sideThree = parseInt($("#num3").val());

    if(isTriangle(sideOne, sideTwo, sideThree)) {
      $(".show").text(triangleType(sideOne, sideTwo, sideThree));
    } else {
      $(".show").text("Not a triangle");
    }
    event.preventDefault();
  });
});
