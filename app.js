const answer = ["router","picoCTF{th3_c0nsp1r4cy_l1v3s_6edb3f5f}","no comments simply waste","If you optimize everything, you will always be unhappy. (Donald Knuth)","entrepreneurship","104.244. 42.193","synchronization","passion","208.117.236.69","zoho", "authentication","208.65.153.253"];
//page variable
var i = 1;
let result=0;
var score = 10;
var totalScore = 0;





function liveScore(hintNumber)
{
    if(hintNumber == 'h1')
    {
        score-=2;
        console.log("score "+score)
        document.getElementById('LiveScore'+i).innerText = score;
        // document.getElementById("b1").disabled
        const button = document.getElementById(i+"h1");
        button.disabled="true";
        const button1 = document.getElementById(i+"h2");
           button1.disabled="";      

    }
    else if(hintNumber == 'h2')
    {
        score-=3;
        console.log(score);
        document.getElementById('LiveScore'+i).innerText = score;
        // document.getElementsByClassName('hint2')[0].style.disable = "true";
        const button = document.getElementById(i+"h2");
        button.disabled="true";
    }
    else if(hintNumber == 'h3')
    {
        score-=4;
        console.log(score);
        document.getElementsByClassName('LiveScore')[0].innerHTML = score;
        // document.getElementsByClassName('hint2')[0].style.disable = "true";
        const button = document.getElementById("b3");
        button.disabled="true";
    }
}


/* function starter()
{
    let score = 10;
} */


function validatedata(cls)
{
    const name = document.getElementById(cls).value;
   /* const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const name4 = document.getElementById("name4").value;
    const name5 = document.getElementById("name5").value;
    const name6 = document.getElementById("name6").value;
    const name7 = document.getElementById("name7").value;
    const name8 = document.getElementById("name8").value;
    const name9 = document.getElementById("name9").value;
    const name10 = document.getElementById("name10").value;*/

    
    /* if (name1 == "" || name2 == "" || name3 == "" || name4 == "" ||name5 == "" || name6 == "" || name7 == "" || name8 == "" || name9 == "" ||name10 == "")
    {
        alert("your box is empty");

    } */
    
        if(answer.indexOf(name) !== -1)  
        {  
            alert("Hurray!  you have Captured a Flag , Please enter OK to continue");   
            if(totalScore<=80)
            {
                totalScore += parseInt(document.getElementById("LiveScore" + i).innerText);                
            }
            document.getElementById("next").click();
                
        } 
      
        else{

            alert("Retry");
        }

    }

    



function firstHint(id)
{
    
    if(id== "1h1")
    {
        document.getElementsByClassName('hint1')[0].innerHTML = "Cryptography";
        liveScore("h1");
    }
    else if(id == "2h1")
    {
        console.log("inside else if id = 2h2");
        document.getElementsByClassName('2hint1')[0].innerText = "Create a connection between the words and numbers";
        liveScore("h1");
    }
    else if(id == "3h1")
    {
        document.getElementsByClassName('3hint1')[0].innerHTML = "Decrypt it!";
        liveScore("h1");
    }
    else if(id == "4h1")
    {
        document.getElementsByClassName('4hint1')[0].innerHTML = "Reallocate rows and columns";
        liveScore("h1");
    }
    else if(id == "5h1")
    {
        document.getElementsByClassName('5hint1')[0].innerHTML = "It allows users to know about today's biggest news and events";
        liveScore("h1");
    }
    else if(id == "6h1")
    {
        document.getElementsByClassName('6hint1')[0].innerHTML = "This enables anyone to view and edit a website's source code.";
        liveScore("h1");
    }
     else if(id == "7h1")
     {
         document.getElementsByClassName('7hint1')[0].innerHTML = "Convert it into binary or hexadecimal or letters";
         liveScore("h1");
     }
    else if(id == "8h1")
    {
        document.getElementsByClassName('8hint1')[0].innerHTML = "Inspect the factory for cookies";
        liveScore("h1");
    }
    // else if(id == "9h1")
    // {
    //     document.getElementsByClassName('9hint1')[0].innerHTML = "hint1";
    //     liveScore("h1");
    // }
    // else if(id == "10h1")
    // {
    //     document.getElementsByClassName('10hint1')[0].innerHTML = "hint1";
    //     liveScore("h1");
    // }
    
}

function secondHint(id)
{
    if(id== "1h2")
    {
        document.getElementsByClassName('hint2')[0].innerHTML = "It is a simple Caesar cipher used for obscuring text <br> by replacing each letter with the letter thirteen places down the alphabet";
        liveScore("h2");
    }
    else if(id == "2h2")
    {
        document.getElementsByClassName('2hint2')[0].innerHTML = "Each letter is hidden in each word";
        liveScore("h2");
    }
    else if(id == "3h2")
    {
        document.getElementsByClassName('3hint2')[0].innerHTML = "Related to networks.";
        liveScore("h2");
    }
    else if(id == "4h2")
    {
        document.getElementsByClassName('4hint2')[0].innerHTML = " Transposition Cipher";
        liveScore("h2");
    }
    else if(id == "5h2")
    {
        document.getElementsByClassName('5hint2')[0].innerHTML = "Jack Dorsey";
        liveScore("h2");
    }
    else if(id == "6h2")
    {
        document.getElementsByClassName('6hint2')[0].innerHTML = "It's handles your app startup,routing and other functions of your application.";
        liveScore("h2");
    }
     else if(id == "7h2")
     {
         document.getElementsByClassName('7hint2')[0].innerHTML = "Reshuffle the words.";
         liveScore("h2");
     }
     else if(id == "8h2")
     {
     document.getElementsByClassName('8hint2')[0].innerHTML = "The factory is always monitored by the admin and he always speaks the truth.";
     liveScore("h2");
 }
    // else if(id == "9h2")
    // {
    //     document.getElementsByClassName('9hint2')[0].innerHTML = "hint2";
    //     liveScore("h2");
    // }
    // else if(id == "10h2")
    // {
    //     document.getElementsByClassName('10hint2')[0].innerHTML = "hint2";
    //     liveScore("h2");
    // }
}



function swapping(ans)
{
    
    /* let ans,ne; */
    /* ans = document.getElementById("prev"); */
    /* console.log(ans); */
    /* ne = document.getElementById("next");
    console.log(ne); */
    console.log("hai");
    if(i==8)
    {
        totalScore += parseInt(document.getElementById("LiveScore" + i).innerText);
        totalScore -= 10;
        alert("Thanking you Your Score is "+totalScore);
    }
    else{
    if(ans == "prev")
    {

        i--;
        /* if(i == 1)
        {
            document.getElementById("prev").style.display = "none";
        } */
        if(i == 10)
        {
            document.getElementById("next").style.display = "none";
        }
         if(i > 1 )
        {
            document.getElementById("prev").style.display = "inline-block";
        } 
        if(i < 10)
        {
            document.getElementById("next").style.display = "inline-block";
        }
        var ele = document.getElementsByClassName('form');
        for (var j = 0; j < ele.length; j++ ) 
        {
                ele[j].style.display = "none";
        }
        var x = document.getElementById(`${i}`);
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
     /*    if(i <= 10)
    {
        document.getElementById("next").style.display = "block";
    } */
        console.log(i);
    }
    else if(ans == "next")
    {
       
        console.log("Inside the else if "+ totalScore);
        i++;
        
        score = 10;

        /* if(i == 1)
        {
            document.getElementById("prev").style.display = "none";
        } */
        if(i == 8)
        {
            document.getElementById("next").innerText="Total Score";
        }
        /* if(i > 1 )
        {
            document.getElementById("prev").style.display = "inline-block";
        } */
        if(i < 8)
        {
            document.getElementById("next").style.display = "inline-block";
        }
        var ele = document.getElementsByClassName('form');
        for (var j = 0; j < ele.length; j++ ) 
        {
                console.log(ele[j]);
                    ele[j].style.display = "none";
        }

        
            var x = document.getElementById(`${i}`);
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          
        
        console.log(i);
        var c = document.getElementById("LiveScore"+i);
        console.log("Class name "+c.innerText);
        c.innerText = 10;
    }
    


}
}


window.onload = (event) => {
    document.getElementsByClassName('LiveScore')[0].innerHTML = "10";
    console.log('page is fully loaded');
    console.log("File function called");

  };


  /* totalscore function */

