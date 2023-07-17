var Player1={
    name:"Player1",
    p1_count:0,
    p1_val:[]
};
var Player2={
    name:"Player2",
    p2_count:0,
    p2_val:[]
};
var count=0;
function playEvenOdd(){
    var p1=Math.floor(Math.random()*25+1);
    var p2=Math.floor(Math.random()*25+1);
    Player1.p1_val.push(p1);
    Player2.p2_val.push(p2);
    console.log(p1,p2);
    if(count==5)
    {
        if(Player1.p1_count==Player2.p2_count)
        {
            document.getElementById("result").textContent="Match-Draw";
        }
        else if(Player1.p1_count>Player2.p2_count)
        {
            document.getElementById("result").textContent=Player1.name+"Wins";
        }
        else
        {
            document.getElementById("result").textContent=Player2.name+"Wins";
        }
    }
    else
    {
        count++;
        if(p1%2==0)
        {
            Player1.p1_count++;
            document.getElementById("Player_Score1").textContent=Player1.p1_count;
        }
        if(p2%2==0)
        {
            Player2.p2_count++;
            document.getElementById("Player_Score2").textContent=Player2.p2_count;
        }
        updateCircle();
    }
}
    function updateCircle()
    {
        var p1_circle=document.getElementById("Player1").children;
        Player1.p1_val.forEach((run,value)=>
        {
            if(run%2==0)
            {
                p1_circle[value].style.backgroundColor="green";
            }
            else
            {
                p1_circle[value].style.backgroundColor="red";
            }
        });
        var p2_circle=document.getElementById("Player2").children;
        Player2.p2_val.forEach((run,value)=>
        {
            if(run%2==0)
            {
                p2_circle[value].style.backgroundColor="green";
            }
            else
            {
                p2_circle[value].style.backgroundColor="red";
            }
        });
}