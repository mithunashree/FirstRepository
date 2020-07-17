using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Myproject.Model;
using Myproject.Repository;
using Myproject.Entities;

namespace Myproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class AuthController : ControllerBase
    {
        private readonly IUserRepository Repuser;

        public AuthController(IUserRepository Repuser1)
        {
            Repuser = Repuser1;
        }


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Repuser.Get());
        }

        [HttpPost]
        public async Task<IActionResult> Post(Employee data)
        {
            if (data != null)
            {
                Repuser.AddUser(data);
                if (await Repuser.SaveChanges())
                {
                    return Created($"api/Authcontroller/{data.Id}", data);
                }
            }
            return BadRequest("Failed");

        }

        [HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id){
    if(id > 0){
    Employee  data= Repuser.Get(id);
    Repuser.Delete(data);
    if(await Repuser.SaveChanges())
    {
    return Created($"api/employeedetailcontroller/{data.Id}",data);
    }
    }
   return BadRequest("Failed");
}


[HttpGet("{id}")]
public IActionResult Get(int id){
    return Ok(Repuser.Get(id));
}

[HttpPut("{id}")]

public async Task<IActionResult> Update(int id,Employee data)
{
   Employee data1=Repuser.Get(id);
   data1.Address=data.Address;
   data1.FirstName=data.FirstName;
   data1.LastName=data.LastName;
   data1.PhoneNumber=data.PhoneNumber;
   if(await Repuser.SaveChanges())
   {
       return NoContent();
   }
   else
   {
   return BadRequest("failed");
   }
}

        // [HttpGet("Id/{ID}")]
        // public IEnumerable<Employee> ListEmployeeById(int ID)
        // {
        //      IEnumerable<Employee> Value =
        //         from g in EmployeeList 
        //         where g.Id.Equals(ID) 
        //         select g;

        //     return Value;

        // }
    }

}
// Employee[] employees=new Employee[]
// {
//     new Employee
//         {
//             Id=1,
//             FirstName="Mithuna",
//             LastName="shree",
//             Address="exalca technologies",
//             PhoneNumber="12345"
//         },
//          new Employee
//          {
//             Id=2,
//             FirstName="Raghul",
//             LastName="sabari",
//             Address="sri sabari steels",
//             PhoneNumber="698745"
//         },
//          new Employee
//          {
//             Id=3,
//             FirstName="Pavithra",
//             LastName="Palanisamy",
//             Address="Kanjikovil",
//             PhoneNumber="2564789"
//         }

// };

//  [HttpGet]
// public IEnumerable<Employee> ListAllEmployee()
// {
//     return employees;
// }

// List<Employee> EmployeeList;
// public AuthController()
// {

//     List<Employee> EmployeeList = new List<Employee>{
//         new Employee
//         {
//             Id=1,
//             FirstName="Mithuna",
//             LastName="shree",
//             Address="exalca technologies",
//             PhoneNumber="12345"
//         },
//          new Employee
//          {
//             Id=2,
//             FirstName="Raghul",
//             LastName="sabari",
//             Address="sri sabari steels",
//             PhoneNumber="698745"
//         },
//          new Employee
//          {
//             Id=3,
//             FirstName="Pavithra",
//             LastName="Palanisamy",
//             Address="Kanjikovil",
//             PhoneNumber="2564789"
//         }

// };
// }