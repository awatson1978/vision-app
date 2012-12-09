/// <reference path="intellisense.js" />

/*globals $ document window $ ApplicationViewModel ko TwitterSearchViewModel*/

$(document).ready(function () {
  initializeViewModel();
});

var application;

function initializeViewModel() {

  application = new ApplicationViewModel();
  ko.applyBindings(application);

  var homePageModel = new HomePageViewModel();
  application.navigateTo(homePageModel);
}
