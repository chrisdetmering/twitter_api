using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace API.Models
{
    public class TweetsModel
    {
        //[JsonPropertyName("statuses")]
        public List<TweetUserModel> statuses { get; set; }
    }

    public class TweetUserModel
    {
        //[JsonPropertyName("id")]
        public long Id { get; set; }

        //[JsonPropertyName("created_at")]
        public string created_at { get; set; }

        //[JsonPropertyName("text")]
        public string text { get; set; }

        //[JsonPropertyName("retweet_count")]
        public int retweet_count { get; set; }

        //[JsonPropertyName("favorite_count")]
        public int favorite_count { get; set; }

        public TweetUser user { get; set; }

        // public TweetEntities entities { get; set; }

        public override string ToString() => JsonSerializer.Serialize<TweetUserModel>(this);
    }

    public class TweetUser
    {
        //[JsonPropertyName("profile_image_url_https")]
        public string profile_image_url_https { get; set; }

        //[JsonPropertyName("name")]
        public string name { get; set; }

        //[JsonPropertyName("screen_name")]
        public string screen_name { get; set; }
    }

    public class TweetEntities
    {
        public List<TweetMedia> media { get; set; }
    }

    public class TweetMedia
    {
        public string media_url_https { get; set; }
    }

    // public class TweetMediaModel
    // {
    //     public string media_url_https { get; set; }
    // }
}
