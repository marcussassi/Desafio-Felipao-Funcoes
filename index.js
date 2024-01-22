function getScore(wins,looses){
    return (wins - looses)
}

function getName(name){
    return name
}

    
let resultGetScore = getScore(10,0);
let heroName = getName("Marcus");
let levelName = "";

if (resultGetScore <=10){levelName = "Ferro"};
if (resultGetScore >=11 && resultGetScore <=20 ){levelName = "Bronze"};
if (resultGetScore >=21 && resultGetScore <=50 ){levelName = "Prata"};
if (resultGetScore >=51 && resultGetScore <=80 ){levelName = "Ouro"};
if (resultGetScore >=81 && resultGetScore <=90 ){levelName = "Diamante"};
if (resultGetScore >=91 && resultGetScore <=100 ){levelName = "Lendário"};
if (resultGetScore >=101 ){levelName = "Imortal"};


switch(levelName){
    case "Ferro":
        console.log("O heroi " + heroName + " está no nível " + levelName);
    break;
    case "Bronze":
        console.log("O heroi " + heroName + " está no nível " + levelName);
    break;
    case "Prata":
        console.log("O heroi " + heroName + " está no nível " + levelName);
    break;
    case "Ouro":
        console.log("O heroi " + heroName + " está no nível " + levelName);
    break;
    case "Diamante":
        console.log("O heroi " + heroName + " está no nível " + levelName);
    break;
    case "Lendário":
        console.log("O heroi " + heroName + " está no nível " + levelName);
    break;
    case "Imortal":
        console.log("O heroi " + heroName + " está no nível " + levelName);
    break;


    default:
}
    