using System;
using System.Threading.Tasks;
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
        public async Task<IActionResult> GetUserTweets(string user)
        {
            try
            {
                return Ok(await _tweetProcessor.GetTweetsByUser(user));
            }
            catch (Exception e)
            {
                return StatusCode(404, e.Message);
            }
        }

        [Route("keyword/{keyword}")]
        [HttpGet]
        public async Task<IActionResult> GetKeywordTweets(string keyword)
        {
            try
            {
                return Ok(await _tweetProcessor.GetTweetsByKeyword(keyword));
            }
            catch (Exception e)
            {
                return StatusCode(404, e.Message);
            }
        }

        [Route("user/{user}")]
        [HttpGet]
        public async Task<IActionResult> GetUser(string user)
        {
            try
            {
                return Ok(await _tweetProcessor.GetUserData(user));
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [Route("random/{user}")]
        [HttpGet]
        public async Task<IActionResult> GetRandom(string user)
        {
            try
            {
            return Ok(await _tweetProcessor.GetRandomTweet(user));
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
