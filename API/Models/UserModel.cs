using System;
namespace API.Models
{
    public class UserModel
    {
        public long id { get; set; }

        public string name { get; set; }

        public string screen_name { get; set; }

        public string profile_image_url_https { get; set; }
    }
}
