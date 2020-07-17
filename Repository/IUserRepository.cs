using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Myproject.Model;
using Myproject.Repository;



namespace Myproject.Repository
{
    public interface IUserRepository
    {
          public List<Employee> Get();
          public void AddUser (Employee data);
          public Task<bool> SaveChanges();

          public void Delete(Employee data);

          public  Employee Get(int id);


    }
}