let name = 'muhtasim an nafi';
let result = name.split(' ');
let final = [];
console.log(result);
for(let resul of result){
    let uppercase = resul[0].toUpperCase()+resul.slice(1);
    final.push(uppercase);
    // console.log(uppercase);
}
console.log(final.join(' ')); 