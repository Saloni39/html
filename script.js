document.addEventListener("DOMContentLoaded", function() {
   
    populateYearDropdown();

    
    document.getElementById("registration-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        var name = document.getElementById("reg-name").value;
        var email = document.getElementById("reg-email").value;
        var password = document.getElementById("reg-password").value;
        var yearOfJoining = document.getElementById("join-date").value;

        
        alert("Name: " + name + "\nEmail: " + email + "\nPassword: " + password + "\nYear of Joining: " + yearOfJoining);
    });
});

function populateYearDropdown() {
    var select = document.getElementById("join-date");
    var currentYear = new Date().getFullYear();

    
    for (var i = currentYear; i >= currentYear - 10; i--) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        select.appendChild(option);
    }
}



