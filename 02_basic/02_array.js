const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) //marvel_heros array ke ander dc_heros array ko daal dega 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros) //LIMITAION :- we can pass only one array at a time 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] /*{spread oprator ka use krke ham 
                                                        multiple arrays ko concat kr sakte
                                                        hain }
                                                     */   
                                                     

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //{ager hame nested array ko single 
                                                        // array mein convert krna hain to  
                                                        //ham flat ka use kr sakte hai}
//console.log(real_another_array);



 console.log(Array.isArray("Hitesh"))
 console.log(Array.from("Hitesh"))
 console.log(Array.from({name: "hitesh"})) // interesting{from:- ager ham dictionary as
                                           //  a element denge to hame batana padega ki
                                           //  keys ki array banani hai ya fir values ki}

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //return a array from set of elements 


