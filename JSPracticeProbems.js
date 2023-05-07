//UC1 ability to check employee present or not

const Is_absent=0;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==Is_absent)
{
    console.log("Employee Absent");
}
else{
    console.log("Employee Present");
}

//UC2 ability to check Employee full time or part time

const Is_Part_Time=1;
const Is_Full_Time=2;
const Part_Time_Hrs=4;
const Full_Time_Hrs=8;
const Wage_Per_hrs=20;

{
    let empHrs=0;
    let empCheck=0;
    empCheck =Math.floor(Math.random()*10)%3;
    console.log(empCheck);
    switch(empCheck)
    {
        case Is_Full_Time:
            empHrs=Full_Time_Hrs;
            break;
        case Is_Part_Time:
            empHrs=Part_Time_Hrs;
            break;
        default:
        empHrs=0;
    }
    let empWage=empHrs*Wage_Per_hrs;
    console.log("UC2- EmpWage: "+empWage);
    
}

//uc3-Fefactor daily working hours
let empHrs=0;
console.log(empCheck);
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case Is_Full_Time:
            return Full_Time_Hrs;
        case Is_Part_Time:
            return Part_Time_Hrs;
        default:
            return 0;
    }
}
 empHrs=getWorkingHours(empCheck);
 empWage=empHrs*Wage_Per_hrs;
 console.log("UC3-Emp Wage: "+empWage);

//UC4-Calculating monthly wages

const Numofworkingdays=2;
for(let day=0;day<Numofworkingdays;day++);
{
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck);
}
empWage=empHrs+Wage_Per_hrs;
console.log("UC4-Total Hrs: "+empHrs +"Emp Wages :"+empWage);