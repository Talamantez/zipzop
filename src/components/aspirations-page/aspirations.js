define(["knockout", "text!./aspirations.html"], function(ko, aspirationsTemplate) {

  var Aspiration = function(content){
    self=this;
    self.content = content;
  }

  function AspirationsViewModel(route) {
    var self = this;
    self.message = ko.observable('What do you ASPIRE to do?');
    self.aspiration = ko.observable();
    self.aspirations = ko.observableArray([
        new Aspiration('Build a sustainable future for humanity')
      ]);

    self.addAspiration = function(content){
        console.log('adding aspiration');
        self.aspirations.push(new Aspiration(self.aspiration()));
        console.log(self.aspirations());
      }
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