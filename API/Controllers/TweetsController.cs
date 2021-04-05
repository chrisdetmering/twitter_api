using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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

        // GET: api/values
        [Route("search/{searchValue}")]
        [HttpGet]
        public Task<TweetsModel> GetSearch(string searchValue)
        {
            return _tweetProcessor.GetTweetsSearch(searchValue);
        }

        // GET api/values/5
        [Route("user/{user}")]
        [HttpGet]
        public Task<UserModel> GetUser(string user)
        {
            return _tweetProcessor.GetUserData(user);
        }

        [Route("random/{user}")]
        [HttpGet]
        public Task<TweetsModel> GetRandom(string user)
        {
            return _tweetProcessor.GetRandomTweet(user);
        }
    }
}
