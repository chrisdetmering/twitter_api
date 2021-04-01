using System;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.Extensions.Configuration;

namespace API.Services
{
    public interface IApiHelper
    {
        HttpClient InitializeClient();
    }

    public class ApiHelper : IApiHelper
    {

        public ApiHelper(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        private readonly IConfiguration _configuration;

        public HttpClient InitializeClient()
        {
            var BearerToken = _configuration["BearerToken"];

            var apiClient = new HttpClient();

            apiClient.DefaultRequestHeaders.Accept.Clear();

            apiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            apiClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", BearerToken);

            return apiClient;
        }
    }
}
