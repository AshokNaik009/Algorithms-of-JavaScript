function harmlessRansomNotes(nText,mText){
     var noteArr=nText.split(' ');

     var magArr=mText.split(' ');
     var magObj={};
     magArr.forEach(word => {
         if(!magObj[word]) magObj[word]=0;
         magObj[word]++;
     });
     //console.log(magObj);
     var noteisPossible=true;
   noteArr.forEach(word => {
  if(magObj[word]){
       magObj[word]--;
       if(magObj[word] < 0) noteisPossible=false;
  }else
      noteisPossible=false;
  
   
});
console.log(noteisPossible);
return noteisPossible;
}


harmlessRansomNotes('is This dope','This is algorithm searches words and is dope');