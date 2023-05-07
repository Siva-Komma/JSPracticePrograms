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