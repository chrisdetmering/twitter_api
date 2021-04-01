using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace API.Models
{
    public class TweetsModel
    {
        [JsonPropertyName("statuses")]
        public List<TweetModel> data { get; set; }
    }

    public class TweetModel
    {
        [JsonPropertyName("id")]
        public long Id { get; set; }

        [JsonPropertyName("user.profile_image_url_https")]
        public string UserImageUrl { get; set; }

        [JsonPropertyName("user.name")]
        public string UserName { get; set; }

        [JsonPropertyName("user.screen_name")]
        public string ScreenName { get; set; }

        [JsonPropertyName("created_at")]
        public string CreatedAt { get; set; }

        [JsonPropertyName("text")]
        public string TweetBody { get; set; }

        [JsonPropertyName("retweet-count")]
        public int Retweets { get; set; }

        [JsonPropertyName("favorite-count")]
        public int Likes { get; set; }

        public override string ToString() => JsonSerializer.Serialize<TweetModel>(this);
    }
}
