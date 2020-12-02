function para()
{
    inputs = [];
    for (var i = 1 ; i <= 6 ; i++)
    {
        inputs.push(document.getElementById("para_in" +i).value);   
    }
   inputs.join(". ") 
    document.getElementById("score").innerHTML=inputs.join(". ");
}
function para1()
{
    inputs = [];
    for (var i = 7 ; i <=12 ; i++)
    {
        inputs.push(document.getElementById("para_in" +i).value);   
    }
   inputs.join(". ") 
    document.getElementById("score1").innerHTML=inputs.join(". ");
}
