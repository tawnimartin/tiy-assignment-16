var minilib = {

	//string-related functions//

	convertNumberToString: function(num) {
		return num.toString();
	},

	//get first name
  getFirstName: function(fullName) {
   var nameArray = fullName.split(' ');
   var firstName = nameArray[0];
   return firstName;
  },

  //truncate a string, add elipsis
  truncateString: function (string, length){
   if (string.length > length) {
      return string.substring(0,length)+'...';
   }
   else
   return string;
	},

};