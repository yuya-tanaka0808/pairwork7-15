// document.getElementById("button").onclick = function(){
//   document.getElementById("chage").innerHTML = "送信完了";
// };

function exec() {     let comp = document.getElementById("change");
                      let now = new Date();  
                     let hour = now.getHours();
                      let min = now.getMinutes(); 
                     comp.innerHTML = "送信しました。 (" + hour +":" + min + ")"; } 
