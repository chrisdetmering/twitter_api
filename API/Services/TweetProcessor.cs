using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace API
{
    public interface ITweetProcessor
    {
        Task LoadTweet(string search);

    }

    public class TweetProcessor : ITweetProcessor
    {
        private readonly HttpClient _client;

        public TweetProcessor(IApiHelper apiHelper)
        {
            _client = apiHelper.InitializeClient();
        }

       public async Task LoadTweet(string search)
        {
            string url = $"https://api.twitter.com/1.1/search/tweets.json?q={search}&result_type=popular";

            using (HttpResponseMessage response = await _client.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine(response.Content.ReadAsStringAsync());
                }
            }
        }
    }
}
