
fizzBuzz(120);


function fizzBuzz(num){
       for(var i=0;i<num;i++){
            if(i % 12 === 0 ) console.log('FizzBuzz');
            else if(i % 2 === 0) console.log('Fiz');
            else if(i % 6 === 0) console.log('Buzz');
            else console.log(i);
       }
}
