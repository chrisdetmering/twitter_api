using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using API.Models;
using System.Text.Json.Serialization;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace API.Services
{
    public interface ITweetProcessor
    {
        Task<List<TweetModel>> GetTweetsByUser(string search);

        TweetStatusesModel GetTweetsByKeyword(string keyword);

        UserModel GetUserData(string search);

        TweetStatusesModel GetRandomTweet(string user);
    }

    public class TweetProcessor : ITweetProcessor
    {
        private readonly HttpClient _client;

        public TweetProcessor(IApiHelper apiHelper)
        {
            _client = apiHelper.InitializeClient();
        }

       public async Task<List<TweetModel>> GetTweetsByUser(string search)
        {
            var response = await _client.GetAsync($"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={search}&tweet_mode=extended&count=15");

            if (response.IsSuccessStatusCode)
            {
                var twitterResponse = await response.Content.ReadAsStringAsync();

                return JsonConvert.DeserializeObject<List<TweetModel>>(twitterResponse);
            }
                throw new Exception("error in TweetProcessor");
        }

        private async Task<string> GetTweets(string url)
        {
            using var response = await _client.GetAsync(url);

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadAsStringAsync();

            throw new Exception("error in TweetProcessor");
        }

        public TweetStatusesModel GetTweetsByKeyword(string keyword)
        {
            var url = $"https://api.twitter.com/1.1/search/tweets.json?q={keyword}&lang=en&result_type=popular&tweet_mode=extended&count=15";

            var twitterResponse = GetTweets(url);

            return JsonSerializer.Deserialize<TweetStatusesModel>(twitterResponse.Result);
        }

        public UserModel GetUserData(string search)
        {
            var url = $"https://api.twitter.com/1.1/users/show.json?screen_name={search}";

            var twitterResponse = GetTweets(url);

            return JsonSerializer.Deserialize<UserModel>(twitterResponse.Result);
        }

        public TweetStatusesModel GetRandomTweet(string search)
        {
            var url = $"https://api.twitter.com/1.1/search/tweets.json?q=from:{search}&lang=en&count=50&include_entities=true&tweet_mode=extended&expansions=attachments.media_keys";

            var twitterResponse = GetTweets(url);

             return JsonSerializer.Deserialize<TweetStatusesModel>(twitterResponse.Result);

        }

        //private async Task<string> GetTweets(string url)
        //{
        //    using var response = await _client.GetAsync(url);

        //    if (response.IsSuccessStatusCode)
        //        return await response.Content.ReadAsStringAsync();

        //    throw new Exception("error in TweetProcessor");
        //}
    }
}
