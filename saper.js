/* Saper */

var t = [];

function ukryj()
{
	
}


function sasiad(x,y)
{
	/* z lewej strony */
	if(x > 0 && t[y][x-1] != -1)
		t[y][x-1] += 1;
	/* z prawej */
	if(x < 8 && t[y][x+1] != -1)
		t[y][x+1] += 1;
	/* z dołu */
	if(y < 8 && t[y+1][x] != -1)
		t[y+1][x] += 1;
	/* z góry */
	if(y > 0 && t[y - 1][x] != -1)
		t[y - 1][x] += 1;
	/*górny lewy róg */
	if(y > 0 && x > 0 && t[y - 1][x - 1] != -1)
		t[y - 1][x - 1] += 1;
	/* górny prawy róg */
	if(y > 0 && x < 8 && t[y - 1][x + 1] != -1)
		t[y - 1][x + 1] += 1;
	/* dolny lewy róg */
	if(y < 8 && x > 0 && t[y + 1][x - 1] != -1)
		t[y+1][x-1] += 1;
	/* dolny prawy róg */
	if(y < 8 && x < 8 && t[y + 1][x + 1] != -1)
		t[y + 1][x + 1] += 1;
}

function postawBomby(ile)
{
	while(ile > 0)
	{
		var y = Math.round(Math.random() * 8);
		var x = Math.round(Math.random() * 8);
		if(t[y][x] != -1)
		{
			t[y][x] = -1;
			ile--;
			sasiad(x,y);
		}
	}
}

function schowaj()
{
	$('span').hide();	
}

function dodajOnclickBomba()
{
	var bombowo = document.querySelectorAll('.bomba');
	
	for(var i = 0; i < bombowo.length; i++)
	{
		bombowo[i].addEventListener('click', function(){
			$('span').show();
			console.log("Przegrales");
		});
	}
}

function pokaz()
{
	var text = "<table>";
	for(y = 0; y <= 8; y++)
	{
		text += "<tr>";
		for(x = 0; x <= 8; x++)
		{
			text += "<td><div class =&#34;";
			if(t[y][x] == -1)
				text += "bomba&#34>" + "<span>" + "*";
			else
				text += "brakbomby&#34>" + "<span>" + t[y][x];
			text += "</span></td></div>";
		}
		text += "</tr>";
	}
	text += "</table>";
	var elem = document.getElementById("plansza");
	elem.innerHTML = text;
	
}

function start()
{
	t=[];
	for(var y = 0; y <= 8; y++)
	{
		t[y] = [];
		for(var x = 0; x <=8; x++)
		{
			t[y][x] = 0;
		}
	}
	postawBomby(22);
	pokaz();
	
	dodajOnclickBomba();
}