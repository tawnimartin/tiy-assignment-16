var App = (function() {

  function App(data) {
    this.data = data;
    this.renderSection();
    this.addListeners();
    this.hideAll();
  }

  App.prototype = {

    renderSection: function() {  
    //str to hold html output    
    var str = "";
    _.each(this.data, function(sect) {
      //get section id, and put in header div data
      var sectId = sect.section_id;
      str += "<div class='section-header' data-sect-name='" + sectId + "'>";

      //get and add section name
      var sectName = sect.section_name;
      str += sectName + "</div>"; 

      //get and add section text, with section id in data as well
      var sectText = sect.section_text;
      str += "<div class='section-body' data-sect-name='" + sectId + "'>";  
      str += sectText + "</div>";
      });
      //close
      str += "</div>"
      //output in .section container div
      $(".section").html( str );

    },

    hideAll: function() {
      //hides all section bodies
      $(".section-body").slideUp();
    },

    addListeners: function() {
      //make this available to the listener function so we can call hideAll()
      var that = this;
      //listener for section headers
      $(".section").on("click", ".section-header", function(e){
        $clicked = $(e.currentTarget);
        //hide all the section-bodies
        that.hideAll();
        //get section id from header data
        var sectID = $clicked.data("sect-name");
        //create a string to reference the specific section in question, by way of data id
        var targetBody = ".section-body[data-sect-name=" + sectID +"]";
        //show with animation!
        $(targetBody).slideDown();
      });
    }
  }
  
  return App;

})();