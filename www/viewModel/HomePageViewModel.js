/// <reference path="..//intellisense.js" />

/*globals $ application ko localStorage SearchResultsViewModel TweetViewModel*/

function HomePageViewModel() {

  var that = this;

  /// <summary>
  /// A view model for searching twitter for a given term
  /// </summary>
    //console.log('homePageViewModel');
    this.template = "homePageView";

    this.snellenEyeExam = function(){
        application.navigateTo(new SnellenExamViewModel());
    };
    this.tokyoEyeExam = function(){
        application.navigateTo(new TokyoExamViewModel());
    };
    this.eEyeExam = function(){
        application.navigateTo(new EExamViewModel());
    };
    this.twitterSearch = function(){
        var viewModel = new TwitterSearchViewModel();
        viewModel.loadState();
        application.navigateTo(viewModel);
    };
}
