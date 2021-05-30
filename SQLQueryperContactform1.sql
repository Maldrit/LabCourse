use EmployeeDB
 
create table dbo.ContactForm(
Id int identity(1,1),
Name varchar(500),
Email varchar(500),
message varchar(500)
) 