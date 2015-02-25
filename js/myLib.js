var minilib = {

  makeMyDayBrighter: function() {
    var myArray = [];
    myArray.push("You got this girl!");
    myArray.push("Did you close that function?");
    myArray.push("Did you gulp less?");
    myArray.push("Tell the duck!");
    myArray.push("Keep going!");
    myArray.push("The greatest pleasure in life is doing what people say you cannot do.");
    myArray.push("When you think about quitting, think about why you started.");
    myArray.push("If it doesn't challenge you, it doesn't change you.");

    return alert(_.sample(myArray));
  }

};