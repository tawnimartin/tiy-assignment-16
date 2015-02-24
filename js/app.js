var App = (function() {

  function App(data) {
    this.data = data;
    this.renderSection();
    this.addListeners();
    this.hideAll();
  }

  App.prototype = {

    renderSection: function() {
       
      var str = "";

      _.each(this.data, function(sect) {

        //get section id
        var sectId = sect.section_id;
        str += "<div class='section-header' data-sect-name='" + sectId + "'>";

        //get section name
        var sectName = sect.section_name;
        str += sectName + "</div>"; 

        //get section id and text
        var sectText = sect.section_text;
        str += "<div class='section-body' data-sect-name='" + sectId + "'>";  
        
        str += sectText + "</div>";
        
      });

      str += "</div>"
      $(".section").html( str );

    },

    hideAll: function() {
      $(".section-body").slideUp();
    },

    addListeners: function() {
      
      var that = this;

      $(".section").on("click", ".section-header", function(e){
        //e.preventDefault();
        $clicked = $(e.currentTarget);

        that.hideAll();

        var sectID = $clicked.data("sect-name");

        var targetBody = ".section-body[data-sect-name=" + sectID +"]";

        $(targetBody).slideDown();


      });

    }
  }

  return App;

})();