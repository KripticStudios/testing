var money = 0;
var makemoney = 0;


function cookieClick(number){
    money = money + number;
    document.getElementById("money").innerHTML = money;
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,makemoney));     //works out the cost of this cursor
    if(money >= cursorCost){                                   //checks that the player can afford the cursor
        makemoney = makemoney + 1;                                   //increases number of cursors
    	money = money - cursorCost;                          //removes the cookies spent
        document.getElementById('makemoney').innerHTML = makemoney;  //updates the number of cursors for the user
        document.getElementById('money').innerHTML = money;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,makemoney));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	cookieClick(makemoney);
	
}, 500);