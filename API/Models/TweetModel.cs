using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace API.Models
{
    public class TweetsModel
    {
        public List<TweetUserModel> statuses { get; set; }
    }

    public class TweetUserModel
    {
        public long Id { get; set; }

        public string created_at { get; set; }

        public string full_text { get; set; }

        public int retweet_count { get; set; }

        public int favorite_count { get; set; }

        public TweetUser user { get; set; }

        public TweetEntities entities { get; set; }

        public TweetExtendedEntities extended_entities { get; set; }

        public override string ToString() => JsonSerializer.Serialize<TweetUserModel>(this);
    }

    public class TweetUser
    {
        public string profile_image_url_https { get; set; }

        public string name { get; set; }

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

    public class TweetExtendedEntities
    {
        public List<TweetExtendedMedia> media { get; set; }
    }

    public class TweetExtendedMedia
    {
        public string type { get; set; }

        public TweetVideoInfo video_info { get; set; }
    }

    public class TweetVideoInfo
    {
        public List<TweetVariants> variants { get; set; }
    }

    public class TweetVariants
    {
        public string url { get; set; }
    }

}
