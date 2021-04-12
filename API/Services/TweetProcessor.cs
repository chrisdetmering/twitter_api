using System;
using System.Net.Http;
using System.Threading.Tasks;
using API.Models;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Net;

namespace API.Services
{
    public interface ITweetProcessor
    {
        Task<List<TweetModel>> GetTweetsByUser(string search);

        Task<TweetStatusesModel> GetTweetsByKeyword(string keyword);

        Task<UserModel> GetUserData(string search);

        Task<TweetStatusesModel> GetRandomTweet(string user);
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

            if (response.StatusCode == HttpStatusCode.NotFound)
            {
                throw new Exception($"User '{search}' was not found. Please try again.");
            }
            throw new Exception($"Access Denied. '{search}' is not available. Please try again.");
        }

        public async Task<TweetStatusesModel> GetTweetsByKeyword(string keyword)
        {
            var response = await _client.GetAsync($"https://api.twitter.com/1.1/search/tweets.json?q={keyword}&lang=en&result_type=popular&tweet_mode=extended&count=15");

            if (response.IsSuccessStatusCode)
            {
                var twitterResponse = await response.Content.ReadAsStringAsync();

                return JsonConvert.DeserializeObject<TweetStatusesModel>(twitterResponse);
            }

            throw new Exception("error in TweetProcessor");
        }

        public async Task<UserModel> GetUserData(string search)
        {
            var response = await _client.GetAsync($"https://api.twitter.com/1.1/users/show.json?screen_name={search}");

            if (response.IsSuccessStatusCode)
            {
                var twitterResponse = await response.Content.ReadAsStringAsync();

                return JsonConvert.DeserializeObject<UserModel>(twitterResponse);
            }

            throw new Exception("error in TweetProcessor");
        }

        public async Task<TweetStatusesModel> GetRandomTweet(string search)
        {
            var response = await _client.GetAsync($"https://api.twitter.com/1.1/search/tweets.json?q=from:{search}&lang=en&count=50&include_entities=true&tweet_mode=extended&expansions=attachments.media_keys");

            if (response.IsSuccessStatusCode)
            {
                var twitterResponse = await response.Content.ReadAsStringAsync();

                return JsonConvert.DeserializeObject<TweetStatusesModel>(twitterResponse);
            }

            throw new Exception("error in TweetProcessor");
        }
    }
}
