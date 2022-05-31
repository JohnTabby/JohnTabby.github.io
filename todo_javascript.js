let bool = false;


function uncheckAll() {
    if (document.getElementById('todo').checked) {
        var todo = document.getElementById('todo');
        todo.checked = !todo.checked;
    } else {
        console.log("First todo is not checked");
    }

    if (document.getElementById('todo1').checked) {
        var todo1 = document.getElementById('todo1');
        todo1.checked = !todo1.checked;
    } else {
        console.log("Second todo is not checked");
    }

    if (document.getElementById('todo2').checked) {
        var todo2 = document.getElementById('todo2');
        todo2.checked = !todo2.checked;
    } else {
        console.log("Third todo is not checked");
    }

    if (document.getElementById('todo3').checked) {
        var todo3 = document.getElementById('todo3');
        todo3.checked = !todo3.checked;
    } else {
        console.log("Fourth todo is not checked");
    }

    if (document.getElementById('todo4').checked) {
        var todo4 = document.getElementById('todo4');
        todo4.checked = !todo4.checked;
    } else {
        console.log("Fifth todo is not checked");
    }

    if (document.getElementById('todo5').checked) {
        var todo5 = document.getElementById('todo5');
        todo5.checked = !todo5.checked;
    } else {
        console.log("Sixth todo is not checked");
    }

    if (document.getElementById('todo6').checked) {
        var todo6 = document.getElementById('todo6');
        todo6.checked = !todo6.checked;
    } else {
        console.log("Seventh todo is not checked");
    }

    if (document.getElementById('todo7').checked) {
        var todo7 = document.getElementById('todo7');
        todo7.checked = !todo7.checked;
    } else {
        console.log("Eighth todo is not checked");
    }

    if (document.getElementById('todo8').checked) {
        var todo8 = document.getElementById('todo8');
        todo8.checked = !todo8.checked;
    } else {
        console.log("Ninth todo is not checked");
    }

    if (document.getElementById('todo9').checked) {
        var todo9 = document.getElementById('todo9');
        todo9.checked = !todo9.checked;
    } else {
        console.log("Tenth todo is not checked");
    }

    if (document.getElementById('todo10').checked) {
        var todo10 = document.getElementById('todo10');
        todo10.checked = !todo10.checked;
    } else {
        console.log("Eleventh todo is not checked");
    }

    if (document.getElementById('todo11').checked) {
        var todo11 = document.getElementById('todo11');
        todo11.checked = !todo11.checked;
    } else {
        console.log("Twelfth todo is not checked");
    }

    if (document.getElementById('todo12').checked) {
        var todo12 = document.getElementById('todo12');
        todo12.checked = !todo12.checked;
    } else {
        console.log("Thirteenth todo is not checked13");
    }

    if (document.getElementById('todo13').checked) {
        var todo13 = document.getElementById('todo12');
        todo13.checked = !todo13.checked;
    } else {
        console.log("Thirteenth todo is not checked13");
    }

    if (document.getElementById('todo14').checked) {
        var todo14 = document.getElementById('todo12');
        todo14.checked = !todo14.checked;
    } else {
        console.log("Thirteenth todo is not checked13");
    }
}



function reset() {

    var x = document.getElementById("div");
    var x1 = document.getElementById("div1");
    var x2 = document.getElementById("div2");
    var x3 = document.getElementById("div3");
    var x4 = document.getElementById("div4");
    var x5 = document.getElementById("div5");
    var x6 = document.getElementById("div6");
    var x7 = document.getElementById("div7");
    var x8 = document.getElementById("div8");
    var x9 = document.getElementById("div9");
    var x10 = document.getElementById("div10");
    var x11 = document.getElementById("div11");
    var x12 = document.getElementById("div12");
    var x13 = document.getElementById("div13");
    var x14 = document.getElementById("div14");

    x.style.display = "block";
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    x5.style.display = "none";
    x6.style.display = "none";
    x7.style.display = "none";
    x8.style.display = "none";
    x9.style.display = "none";
    x10.style.display = "none";
    x11.style.display = "none";
    x12.style.display = "none";
    x13.style.display = "none";
    x14.style.display = "none"; 
    
    
    bool = false;
    console.log(bool);

    if (document.getElementById('checkbox').checked){
        var checkbox = document.getElementById('checkbox');
        checkbox.checked = !checkbox.checked;
    }

  }



function addTodo(){

    var x = document.getElementById("div");
    var x1 = document.getElementById("div1");
    var x2 = document.getElementById("div2");
    var x3 = document.getElementById("div3");
    var x4 = document.getElementById("div4");
    var x5 = document.getElementById("div5");
    var x6 = document.getElementById("div6");
    var x7 = document.getElementById("div7");
    var x8 = document.getElementById("div8");
    var x9 = document.getElementById("div9");
    var x10 = document.getElementById("div10");
    var x11 = document.getElementById("div11");
    var x12 = document.getElementById("div12");
    var x13 = document.getElementById("div13");
    var x14 = document.getElementById("div14");

    if (x.style.display === "block" && x1.style.display === "none"){
        x1.style.display = "block";
    }
    else
    if (x1.style.display === "block" && x2.style.display === "none"){
        x2.style.display = "block";
    }
    else
    if (x2.style.display === "block" && x3.style.display === "none"){
        x3.style.display = "block";
    }
    else
    if (x3.style.display === "block" && x4.style.display === "none"){
        x4.style.display = "block";
    }
    else
    if (x4.style.display === "block" && x5.style.display === "none"){
        x5.style.display = "block";
    }
    else
    if (x5.style.display === "block" && x6.style.display === "none"){
        x6.style.display = "block";
    }
    else
    if (x6.style.display === "block" && x7.style.display === "none"){
        x7.style.display = "block";
    }
    else
    if (x7.style.display === "block" && x8.style.display === "none"){
        x8.style.display = "block";
    }
    else
    if (x8.style.display === "block" && x9.style.display === "none"){
        x9.style.display = "block";
    }
    else
    if (x9.style.display === "block" && x10.style.display === "none"){
        x10.style.display = "block";
    }
    else
    if (x10.style.display === "block" && x11.style.display === "none"){
        x11.style.display = "block";
    }
    else
    if (x11.style.display === "block" && x12.style.display === "none"){
        x12.style.display = "block";
    }   
    else
    if (x12.style.display === "block" && x13.style.display === "none"){
        x13.style.display = "block";
    }   
    else
    if (x13.style.display === "block" && x14.style.display === "none"){
        x14.style.display = "block";
    }
    else
    if (x14.style.display === "block"){
        alert("You may add up to 15 entries only.");
    }
}



function removeTodo(){

    var x = document.getElementById("div");
    var x1 = document.getElementById("div1");
    var x2 = document.getElementById("div2");
    var x3 = document.getElementById("div3");
    var x4 = document.getElementById("div4");
    var x5 = document.getElementById("div5");
    var x6 = document.getElementById("div6");
    var x7 = document.getElementById("div7");
    var x8 = document.getElementById("div8");
    var x9 = document.getElementById("div9");
    var x10 = document.getElementById("div10");
    var x11 = document.getElementById("div11");
    var x12 = document.getElementById("div12");
    var x13 = document.getElementById("div13");
    var x14 = document.getElementById("div14");

    if (x14.style.display === "block"){
        x14.style.display = "none";
    }
    else
    if (x13.style.display === "block" && x14.style.display === "none"){
        x13.style.display = "none";
    }
    else
    if (x12.style.display === "block" && x13.style.display === "none"){
        x12.style.display = "none";
    }
    else
    if (x11.style.display === "block" && x12.style.display === "none"){
        x11.style.display = "none";
    }
    else
    if (x10.style.display === "block" && x11.style.display === "none"){
        x10.style.display = "none";
    }
    else
    if (x9.style.display === "block" && x10.style.display === "none"){
        x9.style.display = "none";
    }
    else
    if (x8.style.display === "block" && x9.style.display === "none"){
        x8.style.display = "none";
    }
    else
    if (x7.style.display === "block" && x8.style.display === "none"){
        x7.style.display = "none";
    }
    else
    if (x6.style.display === "block" && x7.style.display === "none"){
        x6.style.display = "none";
    }
    else
    if (x5.style.display === "block" && x6.style.display === "none"){
        x5.style.display = "none";
    }
    else
    if (x4.style.display === "block" && x5.style.display === "none"){
        x4.style.display = "none";
    }
    else
    if (x3.style.display === "block" && x4.style.display === "none"){
        x3.style.display = "none";
    }
    else
    if (x2.style.display === "block" && x3.style.display === "none"){
        x2.style.display = "none";
    }
    else
    if (x1.style.display === "block" && x2.style.display === "none"){
        x1.style.display = "none";
    }  
}

function confirmAutomaticEntryDeletion(){
    bool = !bool;
    console.log(bool);
}


function hideEntry(){
    if (bool === true){
    var x = document.getElementById("div");
    x.style.display = "none";}
}

function hideEntry1(){
    if (bool === true){
    var x1 = document.getElementById("div1");
    x1.style.display = "none";}
}

function hideEntry2(){
    if (bool === true){
    var x2 = document.getElementById("div2");
    x2.style.display = "none";}
}

function hideEntry3(){
    if (bool === true){
    var x3 = document.getElementById("div3");
    x3.style.display = "none";}
}

function hideEntry4(){
    if (bool === true){
    var x4 = document.getElementById("div4");
    x4.style.display = "none";}
}

function hideEntry5(){
    if (bool === true){
    var x5 = document.getElementById("div5");
    x5.style.display = "none";}
}

function hideEntry6(){
    if (bool === true){
    var x6 = document.getElementById("div6");
    x6.style.display = "none";}
}

function hideEntry7(){
    if (bool === true){
    var x7 = document.getElementById("div7");
    x7.style.display = "none";}
}

function hideEntry8(){
    if (bool === true){
    var x8 = document.getElementById("div8");
    x8.style.display = "none";}
}

function hideEntry9(){
    if (bool === true){
    var x9 = document.getElementById("div9");
    x9.style.display = "none";}
}

function hideEntry10(){
    if (bool === true){
    var x10 = document.getElementById("div10");
    x10.style.display = "none";}
}

function hideEntry11(){
    if (bool === true){
    var x11 = document.getElementById("div11");
    x11.style.display = "none";}
}

function hideEntry12(){
    if (bool === true){
    var x12 = document.getElementById("div12");
    x12.style.display = "none";}
}

function hideEntry13(){
    if (bool === true){
    var x13 = document.getElementById("div13");
    x13.style.display = "none";}
}

function hideEntry14(){
    if (bool === true){
    var x14 = document.getElementById("div14");
    x14.style.display = "none";}
}

