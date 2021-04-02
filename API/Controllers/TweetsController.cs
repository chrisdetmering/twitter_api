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

    [Route("api/[controller]/{search}")]
    public class TweetsController : Controller
    {
        public TweetsController(ITweetProcessor tweetProcessor)
        {
            _tweetProcessor = tweetProcessor;
        }

        private readonly ITweetProcessor _tweetProcessor;

        // GET: api/values
        //[Route("api/[controller]/{search}")]
        [HttpGet]
        public Task<TweetsModel> Get(string search)
        {
            return _tweetProcessor.GetTweetsSearch(search);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
