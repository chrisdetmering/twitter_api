using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using API.Models;
using System.Text.Json.Serialization;
using System.Linq;
using System.Collections.Generic;

namespace API.Services
{
    public interface ITweetProcessor
    {
        TweetModel GetTweetsByUser(string search);

        UserModel GetUserData(string search);

        TweetModel GetRandomTweet(string user);
    }

    public class TweetProcessor : ITweetProcessor
    {
        private readonly HttpClient _client;

        public TweetProcessor(IApiHelper apiHelper)
        {
            _client = apiHelper.InitializeClient();
        }

       public TweetModel GetTweetsByUser(string search)
        {
            var url = $"https://api.twitter.com/1.1/search/tweets.json?q=from:{search}&lang=en&count=15&include_entities=true&tweet_mode=extended&expansions=attachments.media_keys";

            var twitterResponse = GetTweets(url);

            return JsonSerializer.Deserialize<TweetModel>(twitterResponse.Result);
        }

        public UserModel GetUserData(string search)
        {
            var url = $"https://api.twitter.com/1.1/users/show.json?screen_name={search}";

            var twitterResponse = GetTweets(url);

            return JsonSerializer.Deserialize<UserModel>(twitterResponse.Result);
        }

        public TweetModel GetRandomTweet(string search)
        {
            var url = $"https://api.twitter.com/1.1/search/tweets.json?q=from:{search}&lang=en&count=50&include_entities=true&tweet_mode=extended&expansions=attachments.media_keys";

            var twitterResponse = GetTweets(url);

             return JsonSerializer.Deserialize<TweetModel>(twitterResponse.Result);

        }

        private async Task<string> GetTweets(string url)
        {
            using var response = await _client.GetAsync(url);

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadAsStringAsync();

            throw new Exception("error in TweetProcessor");
        }
    }
}
