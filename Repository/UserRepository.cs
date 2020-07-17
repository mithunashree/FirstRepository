using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Myproject.Model;


namespace Myproject.Repository
{
public class UserRepository: IUserRepository
    {
public DataContext dbdata;
public UserRepository(DataContext data){
dbdata=data;
          }

public List<Employee> Get()
        {
return dbdata.UserData.ToList();
    }
      public void AddUser(Employee data){
        dbdata.UserData.Add(data);
    }
   public async Task<bool> SaveChanges(){
       return await dbdata.SaveChangesAsync()>0;
   }

    public void Delete(Employee data){
     dbdata.UserData.Remove(data);
}

public Employee Get(int id){
       return dbdata.UserData.FirstOrDefault(p=>p.Id==id);
   }

    }
}
