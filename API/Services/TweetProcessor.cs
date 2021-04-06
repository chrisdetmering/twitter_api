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
        Task<TweetModel> GetTweetsByUser(string search);
        Task<UserModel> GetUserData(string search);
        Task<TweetModel> GetRandomTweet(string user);
    }

    public class TweetProcessor : ITweetProcessor
    {
        private readonly HttpClient _client;

        public TweetProcessor(IApiHelper apiHelper)
        {
            _client = apiHelper.InitializeClient();
        }

       public async Task<TweetModel> GetTweetsByUser(string search)
        {
            string url = $"https://api.twitter.com/1.1/search/tweets.json?q=from:{search}&lang=en&count=15&include_entities=true&tweet_mode=extended&expansions=attachments.media_keys";

            using (HttpResponseMessage response = await _client.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    TweetModel tweet = await response.Content.ReadAsAsync<TweetModel>();

                    return tweet;
                }
                else
                {
                    throw new Exception(response.ReasonPhrase);
                }
            }
        }

        public async Task<UserModel> GetUserData(string search)
        {
            string url = $"https://api.twitter.com/1.1/users/show.json?screen_name={search}";

            using (HttpResponseMessage response = await _client.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    UserModel tweet = await response.Content.ReadAsAsync<UserModel>();

                    return tweet;
                }
                else
                {
                    throw new Exception(response.ReasonPhrase);
                }
            }
        }

        public async Task<TweetModel> GetRandomTweet(string search)
        {
            string url = $"https://api.twitter.com/1.1/search/tweets.json?q=from:{search}&lang=en&count=50&include_entities=true&tweet_mode=extended&expansions=attachments.media_keys";

            using (HttpResponseMessage response = await _client.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    TweetModel tweet = await response.Content.ReadAsAsync<TweetModel>();

                    return tweet;
                }

                else
                {
                    throw new Exception(response.ReasonPhrase);
                }
            }
        }
    }
}
