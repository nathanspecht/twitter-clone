jest.dontMock('../TweetStore');

describe('TweetStore', function() {

  var TweetConstants = require('../../constants/TweetConstants');

  var actionUpdateTweets = {
    actionType: TweetConstants.TWEETS_RECEIVED,
    tweets: [{}, {}, {}, {}],
    username: "one"
  };

  var actionSecondSearch = {
    actionType: TweetConstants.TWEETS_RECEIVED,
    tweets: [{}, {}],
    username: "two"
  };

  var AppDispatcher;
  var TweetStore;
  var TweetActions;
  var callback;

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    TweetStore   = require('../TweetStore');
    TweetActions = require('../../actions/TweetActions');
    //callback = AppDispatcher.register.mock.calls[0][0];
  });

  //it('registers an AppDispatcher.dispatch with the dispatcher', function() {
  //  expect(AppDispatcher.register.mock.calls.length).toBe(1);
  //});

  it('initializes with no tweets', function() {
    var tweets = TweetStore.current();
    expect(tweets).toEqual([]);
  });

  it('initializes with no recent searches', function() {
    var recents = TweetStore.recentSearches();
    expect(recents).toEqual([]);
  });

  // it('updates current tweets', function() {
  //  AppDispatcher.dispatch(actionUpdateTweets);
  //  TweetActions.receiveTweets('one', [{}, {}, {}, {}]);
  //  var tweets = TweetStore.current();
  //  expect(tweets.length).toBe(4);
  //});

  //it('adds the username to recent searches', function() {
  //  AppDispatcher.dispatch(actionUpdateTweets);
  //  TweetActions.receiveTweets('one', [{}, {}, {}, {}]);
  //  var recents = TweetStore.recentSearches();
  //  expect(recents).toEqual(['one']);
  //});
  
  //it('returns recent searches in order of most recent', function() {
  //  AppDispatcher.dispatch(actionUpdateTweets);
  //  AppDispatcher.dispatch(actionSecondSearch);
  //  TweetActions.receiveTweets('one', [{}, {}, {}, {}]);
  //  TweetActions.receiveTweets('one', [{}, {}, {}, {}]);
  //  var recents = TweetStore.recentSearches();
  //  expect(recents).toEqual(['two', 'one']);
  //});
});
