define(["knockout", "text!./aspirations.html"], function(ko, aspirationsTemplate) {

  function AspirationsViewModel(route) {
    this.message = ko.observable('What do you ASPIRE to do?');
    this.aspiration = ko.observable();
    this.aspirations = ko.observableArray([]);
    this.addAspiration = function(){
        console.log('adding aspiration');
        this.aspirations.push(
          this.aspiration()
          );
        console.log(this.aspirations());
      }
  }


  AspirationsViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
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