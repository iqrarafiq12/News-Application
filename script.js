let nav = document.getElementById("scroll-wrap");
let sticky = nav.offsetTop;
window.onscroll = function() {sticker()};
function sticker() {
   if (window.pageYOffset >= sticky) {
      nav.classList.add("sticky")
   } else {
      nav.classList.remove("sticky");
   }
}
// Let's fetch some data and add it into the console:

let fetchData = fetch("https://newsdata.io/api/1/news?apikey=pub_18331403a2251a60b2cda22c5b6c24bab0586&q=cricket")
fetchData.then((value1)=>{
  return value1.json()
}).then((value2)=>{
  console.log({value2}) //TODO: Check the console you can see an Object we will add it Later on our News App
})
