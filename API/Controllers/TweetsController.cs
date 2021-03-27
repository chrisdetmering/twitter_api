using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{

    [Route("api/[controller]")]
    public class TweetsController : Controller
    {
        public TwitterResponse TwitterResponse = new TwitterResponse
        {
            Data = new List<TwitterData>
        {
            new TwitterData { AuthorId = "12345", Id = "67890", Text = "hello world 1"},
            new TwitterData { AuthorId = "24680", Id = "08642", Text = "hello world 2"},
            new TwitterData { AuthorId = "13579", Id = "97531", Text = "hello world 3"}
        }
        };

    // GET: api/values
    [HttpGet]
        public IEnumerable<TwitterData> Get()
        {
            return TwitterResponse.Data;
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


    public class TwitterResponse
    {
        public List<TwitterData> Data { get; set; }
    }

    public class TwitterData
    {
        public string AuthorId { get; set; }
        public string Id { get; set; }
        public string Text { get; set; }
    }


}
