using System.Collections.Generic;
using System.Text.Json;

namespace API.Models
{
    public class TweetStatusesModel
    {
        public TweetModel[] statuses { get; set; }
    }

    public class TweetModel
    {
        public long id { get; set; }

        public string created_at { get; set; }

        public string full_text { get; set; }

        public int retweet_count { get; set; }

        public int favorite_count { get; set; }

        public int[] display_text_range { get; set; }

        public TweetUser user { get; set; }

        public TweetEntities entities { get; set; }

        public TweetExtendedEntities extended_entities { get; set; }

        public override string ToString() => JsonSerializer.Serialize(this);
    }

    public class TweetUser
    {
        public string profile_image_url_https { get; set; }

        public string name { get; set; }

        public string screen_name { get; set; }

        public bool verified { get; set; }
    }

    public class TweetEntities
    {
        public List<TweetUrls> urls { get; set; }

        public List<TweetMedia> media { get; set; }
    }

    public class TweetUrls
    {
        public string url { get; set; }

        public string display_url { get; set; }

        public int[] indices { get; set; }
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
