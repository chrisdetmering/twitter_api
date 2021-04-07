using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [Route("api/[controller]")]
    public class TweetsController : Controller
    {
        public TweetsController(ITweetProcessor tweetProcessor)
        {
            _tweetProcessor = tweetProcessor;
        }

        private readonly ITweetProcessor _tweetProcessor;

        [Route("search/{user}")]
        [HttpGet]
        public TweetModel GetUserTweets(string user)
        {
            return _tweetProcessor.GetTweetsByUser(user);
        }

        [Route("user/{user}")]
        [HttpGet]
        public UserModel GetUser(string user)
        {
            return _tweetProcessor.GetUserData(user);
        }

        [Route("random/{user}")]
        [HttpGet]
        public TweetModel GetRandom(string user)
        {
            return _tweetProcessor.GetRandomTweet(user);
        }
    }
}
