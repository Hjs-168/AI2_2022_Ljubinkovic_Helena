const text = document.querySelector(".collaboration"); // postavljamo na koji tekst se radnja odnosi, ovdje je to tekst iz klase collaboration, ali ce nama ispisati citav h1 element
const stringText = text.textContent; // ovdje mu omogucavamo da se fokusira na PRAVI SADRZAJ text elementa, a to je sadrzaj tag-a
//console.log(stringText); = provjera da vidimo da li ucitava tekst koji je sadrzina h1 tag-a

// sada hocemo da nam taj niz rijeci bude podijeljen na slova, kako bismo ga animirali
const splitText = stringText.split("");

//console.log(splitText); = provjerava da li su rijeci sada podijeljene na slova
//ne treba nam dupli tekst, pa ce sadrzaj elementa h1 biti postavljen na nista
text.textContent = "";
for(let i = 0; i < splitText.length; i++)
{
	text.innerHTML += "<span>" + splitText[i] + "</span>"; //sada ce IN COLLABORATION WITH biti duplo napisano
} //tekst ce postati niz od slova, pri cemu je svako u span tag-u
// <span>"i"</span>, <span>"n"</span>, <span>"c"</span>, <span>"o"</span>, <span>"l"</span> ...

let char = 0;
let timer = setInterval(onTick, 150);

function onTick() {
	const span = text.querySelectorAll('span')[char]; //dodajemo klasu na span koji okruzuje slovo da bismo uticali na izgled slova
	span.classList.add('fade'); //klasa koju dodajemo na SPAN se zove FADE
	char++; //na svakih 50 ms se na svako slovo dodaje dejstvo fade i klasa span
	if(char === splitText.length) { //uslov za kada dodje do posljednjeg slova
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}

