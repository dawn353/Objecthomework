function read(a, t){
return{
author: a,
title: t,
alread: r,
explain:function(){
  if true console.log(this.title + " by " + this.author + " has been read")
  else console.log("You still need to read" + this.title + "by " + this.author) }
 }
}


var Gates = new read('Bill Gates','The Road Ahead',true);
var Jobs = new read('Steve Jobs', "Walter Isaacson", true);
var Collins = new read("Suzanne Collins", "Mockingjay: The Final Book of The Hunger Games", false);

Gates.explain();
Jobs.explain();
Collins.explain();