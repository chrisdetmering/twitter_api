using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using API.Models;
using System.Text.Json.Serialization;

namespace API.Services
{
    public interface ITweetProcessor
    {
        Task<TweetsModel> GetTweetsSearch(string search);
    }

    public class TweetProcessor : ITweetProcessor
    {
        private readonly HttpClient _client;

        public TweetProcessor(IApiHelper apiHelper)
        {
            _client = apiHelper.InitializeClient();
        }

       public async Task<TweetsModel> GetTweetsSearch(string search)
        {
            string url = $"https://api.twitter.com/1.1/search/tweets.json?q={search}&result_type=popular";

            using (HttpResponseMessage response = await _client.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    
                    TweetsModel tweet = await response.Content.ReadAsAsync<TweetsModel>();

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
