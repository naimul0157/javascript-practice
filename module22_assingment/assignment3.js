let teams = [
{ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }

]

function bestTeams(team1, team2){
    if(typeof team1 == 'object' && typeof team2 == 'object'){
            
        let sum1 = team1.foul + team1.cardY + team1.cardR;
        let sum2 = team2.foul + team2.cardY + team2.cardR;
        if(sum1<sum2){
          return team1.name; 
        }
        else if(sum1>sum2){
            return team2.name;
        }
        else{
            return 'tie';
        }
    }
    else{
        return 'invalid';
    }
    }
console.log(bestTeams(teams[0], teams[1]));