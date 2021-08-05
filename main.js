/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/
let node1 = document.getElementById("node1");
node1.textContent ="I used the getElementById('node1') method to access this";
// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");
node2[0].textContent =" I used the getElementByClassName('node2') method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3s = document.getElementsByTagName("h3");
for(let el of h3s){
    el.textContent ="By Tag Name";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method
let p = document.createElement("p");
p.textContent ="I am a P element";
let parent= document.getElementById ("parent");
parent.appendChild(p);
// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
// BONUS: Add a link href to the <a>
let a = document.createElement("a");
a.textContent= "I am p tag";
parent.insertBefore(a,p);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// TODO: Remove the "New Child Node"

let oldNode= document.getElementById("N1");
let ex = document.getElementById("exercise3")
ex.removeChild(oldNode);
/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */
let box = document.getElementById("box");
let x =0;
let interval =setInterval(move,30);
function move(){
    x++;
    if(x >100){
        clearInterval(interval);
    } else{
        box.style.left = x +"px";
    }
}
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
let btn = document.getElementById("btn");

btn.addEventListener("click", function (show) {
alert("Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user")
});