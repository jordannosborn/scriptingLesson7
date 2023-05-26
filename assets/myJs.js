function getGreetings() {
    let myDate = new Date(); 
    let dispDate = myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear();
    let hours = myDate.getHours(); 
    let message = ""; //<h4>details</h4>";
    let greetings = ""; 
    if (hours > 4) {
        if (hours < 12)
            greetings = "Good morning!"; 
        else if (hours < 16) 
            greetings = "Good afternoon!"; 
        else if (hours < 21)
            greetings = "Good evening"; 
    }
    else 
        greetings = "What are you doing up so late??????"; 
    message += "Date:" + dispDate; 
    message += "<br>" + greetings;

    document.getElementById("info").innerHTML = message; 

}

function displayDetails()
{
    let message = "User details";
    let fName = document.forms["frmDetails"]["firstName"].value; 
    let lName = document.forms["frmDetails"]["lastName"].value;
    let email = document.getElementById("userEmail").value;
    //this line will only work if you have added id='userEmail' to 
    //email element in .html form 

    //get data from radio button - studyMode
    let mode = document.forms["frmDetails"]["studyMode"]/value;

    //get data from checkbox - subjects 
    let subjects = document.forms["frmDetails"]["subjects"]; 
    subjNames = ""; 
    for(let i=0;i<4;i++)
    {
        if(subjects[i].isChecked)
            subjNames += subjects[i].value;
    }

    message += "<br>First name:" + fName; 
    message += "<br>Last name:" + lName; 
    message += "<br>Email address:" + email;
    message += "<br>Study mode:" + mode;
    message += "<br>Subjects: " + subjNames; 

    document.getElementById("dispDetails").innerHTML = message; 
}