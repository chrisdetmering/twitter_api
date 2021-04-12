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

        [Route("username/{user}")]
        [HttpGet]
        public IActionResult GetUserTweets(string user)
        {
            try
            {
                return Ok(_tweetProcessor.GetTweetsByUser(user));
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [Route("keyword/{keyword}")]
        [HttpGet]
        public IActionResult GetKeywordTweets(string keyword)
        {
            try
            {
                return Ok(_tweetProcessor.GetTweetsByKeyword(keyword));
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [Route("user/{user}")]
        [HttpGet]
        public IActionResult GetUser(string user)
        {
            try
            {
                return Ok(_tweetProcessor.GetUserData(user));
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [Route("random/{user}")]
        [HttpGet]
        public IActionResult GetRandom(string user)
        {
            try
            {
            return Ok(_tweetProcessor.GetRandomTweet(user));
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
