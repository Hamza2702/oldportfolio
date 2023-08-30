// Navigation bar
function NavBar()
{
    if ( document.URL.includes("index.html") ) { // Check if user is on HOME page
        var nav = '<nav><a href="#About"><button class="navBar" type="submit">about</button></nav>' // about
        nav += '<nav><a href=projects.html><button class="navBar"type="submit">projects</button></nav>' // projects
    }
    else if ( document.URL.includes("projects.html") ) { // Check if user is on ABOUT page 
        var nav = '<nav><a href=index.html><button class="navBar" type="submit">Home</button></nav>' // Home
    }
    
    return(nav)
}

document.getElementById("navBar").innerHTML = NavBar();

//-------------------------------------------------------------------------------

function GetAge()
{
    var dob = new Date("12/27/2002");  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
              
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
              
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
              
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
            
    return("My name is Hamza Khan and I am <u>" + age + "</u> years old.")
}

document.getElementById("age").innerHTML = GetAge();

//-------------------------------------------------------------------------------

// Change .name to white
function changeColourToWhite() {
const names = document.querySelectorAll('.name');
names.forEach(name => {
// Store the initial color in a custom attribute 'data-initial-color'
if (!name.dataset.initialColour) {
    name.dataset.initialColour = name.style.color;
}
name.style.color = 'white';
});
}
        
// Reset Colour
function resetColour() {
const names = document.querySelectorAll('.name');
names.forEach(name => {
// Retrieve the initial color from the custom attribute 'data-initial-color'
const initialColour = name.dataset.initialColour || '#A9E2F5';
name.style.color = initialColour;
});
}
        
// Attach event listeners to elements with the "navBar" class
const navBars = document.querySelectorAll('.navBar');
navBars.forEach(navBar => {
navBar.addEventListener('mouseover', changeColourToWhite);
navBar.addEventListener('mouseout', resetColour);
});

//-----------------------
