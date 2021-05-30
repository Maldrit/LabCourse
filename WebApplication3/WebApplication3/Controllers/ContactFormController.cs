using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactFormController : Controller
    {
      
        private readonly IConfiguration _configuration;

        public ContactFormController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select Id, Name,Email, message from dbo.ContactForm";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(ContactForm contactForm)
        {
            string query = @"
                    insert into dbo.ContactForm 
                    (Name,Email ,message)
                    values 
                    (
                    '" + contactForm.Name + @"'
                    ,'" + contactForm.Email + @"'
                    ,'" + contactForm.message + @"'
                   
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        //[HttpPut]
        //public JsonResult Put(ContactForm contactForm)
        //{
        //    string query = @"
        //            update dbo.Department set 
        //            Name = '" + contactForm.Name + @"'

        //            where Id = " + contactForm.Id + @" 
        //            ";
        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
        //    SqlDataReader myReader;
        //    using (SqlConnection myCon = new SqlConnection(sqlDataSource))
        //    {
        //        myCon.Open();
        //        using (SqlCommand myCommand = new SqlCommand(query, myCon))
        //        {
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader); ;

        //            myReader.Close();
        //            myCon.Close();
        //        }
        //    }

        //    return new JsonResult("Updated Successfully");
        //}



    }
}
