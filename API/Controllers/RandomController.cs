using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class RandomController : Controller
    {
        public TwitterResponse TwitterResponse = new TwitterResponse
        {
            Data = new List<TwitterData>
            {
                new TwitterData { AuthorId = "111111", Id = "22222", Text = "I walked to the park today"},
                new TwitterData { AuthorId = "121212", Id = "232323", Text = "The weather is beautiful outside"},
                new TwitterData { AuthorId = "4545454", Id = "565656", Text = "Don't tread on me, man!"},
                new TwitterData { AuthorId = "101010", Id = "1911919", Text = "Don't tread on me, man!"},
                new TwitterData { AuthorId = "232211", Id = "383838", Text = "Don't tread on me, man!"}
            }
        };

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
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
