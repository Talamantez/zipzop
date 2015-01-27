define(["knockout", "text!./aspirations.html"], function(ko, aspirationsTemplate) {

/*  var Aspiration = function(content){
    self=this;
    self.content = content;
  }
*/

// Enter key binding handler
ko.bindingHandlers.enterkey = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        $(element).keypress(function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                allBindings.enterkey.call(viewModel);
                return false;
            }
            return true;
        });
    }
};

  function AspirationsViewModel(route) {
    var self = this;
    
    self.message = ko.observable('What do you ASPIRE to do?');
    
    self.aspiration = ko.observable();
    
    self.aspirations = ko.observableArray([]);

    self.addAspiration = function(content){
        // console.log('adding aspiration: ' + self.aspiration() );
        self.aspirations.unshift( self.aspiration() );
        // console.log( self.aspirations() );
        self.aspiration('');
      }
    
    self.removeAspiration = function(seat){ self.aspirations.remove(aspiration)}
  }

  AspirationsViewModel.prototype.someFunction = function() {

  };

  return { viewModel: AspirationsViewModel, template: aspirationsTemplate };

});
  
/*function AppViewModel() {	
    this.firstName = "Bert";
    this.lastName = "Bertington";

    this.firstName = ko.observable("bert");
    this.lastName = ko.observable("berto");
    
    this.fullName = ko.computed(function(){
        return this.firstName() + " " + this.lastName();
    }, this);
    
    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };
}


// Activates knockout.js
ko.applyBindings(new AppViewModel());*/