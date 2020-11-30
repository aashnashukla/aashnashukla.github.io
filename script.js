function setCookie(cname, cvalue, exdays) 
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) 
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) 
    {
        var c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) 
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie() 
{
    var user = getCookie("username");
    if (user != "") 
    {
        document.getElementById("username").innerHTML = user;
    } 
    else 
    {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) 
        {
            setCookie("username", user, 365);
            document.getElementById("username").innerHTML = user;
        }
    }
}

setTimeout(checkCookie, 100);

var spot_costs_native = {
    "RedFort":20,
    "JamaMasjid":0,
    "ChandniChowk":500,
    "Akshardham":30,
    "HumanyunTomb":50,
    "LodhiGarden":0,
    "QutubMinar":50,
    "RajGhat":0,
    "IndiaGate":20,
    "LotusTemple":0
};

var spot_costs_foreigner= {
    "RedFort":500,
    "JamaMasjid":0,
    "ChandniChowk":500,
    "Akshardham":300,
    "HumanyunTomb":500,
    "LodhiGarden":0,
    "QutubMinar":500,
    "RajGhat":0,
    "IndiaGate":600,
    "LotusTemple":0
};

function CalculateCost()
{
    var india = document.getElementsByName("country")[0].value;
    var which = Object.keys(spot_costs_native);
    var cpp = 0;
    if(india == 'india')
    {
        for(var i = 0; i < which.length; i++)
        {
            if(document.getElementsByName(which[i])[0].checked)
            {
                cpp += spot_costs_native[ which[i] ];
            }
        }
        console.log(cpp);
    } 
    else 
    {
        for(var i = 0; i < which.length; i++)
        {
            if(document.getElementsByName(which[i])[0].checked)
            {
                cpp += spot_costs_foreigner[ which[i] ];
        
            }
        }
        console.log(cpp);        
    }
    var ppl = document.getElementById("quantity").value;
    document.getElementById("cost").innerHTML = ppl * cpp;
}

var trivia = {
    1:{
        "head":"New Delhi and Delhi are two different places",
        "text":"Surprising fact about Delhi right? But yes it’s true, New Delhi and Delhi are two different places altogether. With  New Delhi serving as the capital of the country and Delhi being the more substantial city within which New Delhi is a ‘territory’ designed by the British while shifting the money from Calcutta to Delhi. New Delhi is known to be a seat to the three arms of the Government of India – Legislative, Executive and the Judiciary."
    },
    2:{
        "head":"The Red Fort used to be white in colour",
        "text":"You heard it right, the magnificent Red Fort which defines the almightiness of Delhi, used to be white initially. According to a survey conducted for archaeology, related research unravelled that the Fort was made up of limestone and when the stone started to wither away, the British painted it Red to preserve it."
    },
    3:{
       "head":"Delhi is the home to the largest market of spices in Asia",
       "text":"The Khari Baori market, established in the 17th Century, still holds its reputation to date. Situated very close to the Fatehpuri Masjid, this market has a fantastic fragrance spread across the area, attracting the tourists and city dwellers to its doorstep."
    },
    4:{
        "head":"Delhi is the leading commercial center of India",
        "text":"Being the capital of the country, Delhi is one of the leading commercial centres within the northern part of India. Along with the manufacturing and sales, Delhi also has vast and rapidly growing retail industries."
    },
    5:{
        "head":"The Delhi Transport Corporation along with other public transport services in Delhi is entirely run on Compressed Natural Gas (CNG)",
        "text":"From the well known DTC buses to the auto rickshaws, all are fuelled with CNG, to keep the pollution in check."
    },
    6:{
        "head":"Delhi is home to a unique Museum of Toilets",
        "text":"As ludicrous as this fact about Delhi sounds, the museum of toilets offers a perfect message on the history of sanitation. It is known as the Sulabh international museum and is managed by Sulabh International, which aims to spread the word of hygiene across the globe. The museum was established in 1992 by Dr Bindeshwar Pathak."
    },
    7:{
        "head":"Delhi was once bound by 14 gates",
        "text":"Delhi was surrounded by 14 gates initially out of which only five still stand. ‘The Kashmere gate’ built in 1835 by Robert Smith is the northernmost gate of the city. ‘The Ajmeri gate’ constructed in 1644 considerably faces Ajmer. ‘The Lahori gate’ is the main entrance into the Red Fort.  ‘The Delhi gate’ also known as the ‘Dilli Darwaza’ is another way into the Red Fort. Lastly, ‘The Turkman gate’ built during the 13th Century is located in Shahjahanabad."
    },
    8:{
        "head":"Delhi hosted the most expensive host of Commonwealth Games to date",
        "text":"The 2010 Commonwealth Games held in Delhi is the most expensive which hasn’t beaten by any country yet."
    },
    9:{
        "head":"Delhi is currently the second most populated city in the world",
        "text":"Well, being the capital of the country, which holds the second position in being the most populous country after China, this fact isn’t a shocker. The population of Delhi comes around 25 million according to the 2015 census."
    },
    10:{
        "head":"Delhi is home to the tallest minaret in the world",
        "text":"Yes! You guessed it correctly, it’s Qutub Minar! The construction of this beautiful Minaret began in 1200 AD by the Delhi Sultanate - Qutub al-Din Aibak and still stands gracefully within the city."
    }
};
var curr_trivia = Math.floor(Math.random() * 10) + 1;
setTimeout(StartTrivia, 100);
function StartTrivia(){
    document.getElementById("trivia_head").innerHTML = trivia[curr_trivia]['head'];
    document.getElementById("trivia_text").innerHTML = trivia[curr_trivia]['text'];
}

function UpdateTrivia()
{
    curr_trivia += 1;
    if(curr_trivia > 10)
    {
        curr_trivia = 1;
    }
    document.getElementById("trivia_head").innerHTML = trivia[curr_trivia]['head'];
    document.getElementById("trivia_text").innerHTML = trivia[curr_trivia]['text'];
}

setInterval(UpdateTrivia, 1000*20);