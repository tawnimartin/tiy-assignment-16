var minilib = {
	////////////////////////////
	//string-related functions//
	////////////////////////////

	//Converts number to string
	convertNumberToString: function(num) {
		return num.toString();
	},
	//Gets first name
  getFirstName: function(fullName) {
   var nameArray = fullName.split(' ');
   var firstName = nameArray[0];
   return firstName;
  },
  //Truncates a string, adds elipsis
  truncateString: function (string, length){
   if (string.length > length) {
      return string.substring(0,length)+'...';
   }
   else
   return string;
	},
	//Finds the index number of a character in a string
	findIndex: function(string, char) {
	return string.lastIndexOf(char);
	},
	//Removes everything after a certain character
	removeAfter: function(string, char) {
		return string.substring(0, string.indexOf(char));
	},
	//Removes everything before a certain character
	removeBefore: function(string, char) {
		indexofChar = this.findIndex(string, char);
		return string.slice(0, indexofChar);
	},
	//Adds an extension you provide
	appendExtension: function(string, ext) {
		return string += ext;
	}

};