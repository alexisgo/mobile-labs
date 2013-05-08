/* Let's write some JavaScript to grab the id="fname" and the
id="lname", store it to localStorage under its id, 
and then load it back to the page when we re-visit the page.*/

function saveFormValue(e){
    var id = e.target.getAttribute('id');
    var elem = document.getElementById(id);
    var value = elem.value;
    
    // TODO 1: The two previous lines above get the key and the value
    // the user has entered
    // Using the localStorage API, save this key/value pair (one line)
    if (value) {
      localStorage.setItem(id,value);      
    }
    
}

function loadSavedValues(){
    var fname = localStorage.getItem("fname");
    var lname = localStorage.getItem("lname");

    if (fname) {
     $('#fname').val(fname); 
    }
    
    if (lname) {
      $('#lname').val(lname);
    }
}

function initialize(){
    loadSavedValues();
    
    $('#fname').focusout(saveFormValue);
    $('#lname').focusout(saveFormValue);
}

$(document).ready(initialize);