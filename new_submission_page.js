function validate(){
    let file = document.getElementById("file").value;
    let email = document.getElementById("email").value;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let impressionism = document.getElementById("impressionism").checked;
    let surrealism = document.getElementById("surrealism").checked;
    let realism = document.getElementById("realism").checked;
    let digital_art = document.getElementById("digital_art").checked;
    let pixel_art = document.getElementById("pixel_art").checked;
    let line_art = document.getElementById("line_art").checked;
    let yes = document.getElementById("yes").checked;
    let no = document.getElementById("no").checked;

    if(file == ""){
        alert("Please upload a file.");
        return false;
    }
    else if(email == ""){
        alert("Please enter your email.");
        return false;
    }
    else if(title == ""){
        alert("Please enter a title for your artwork.");
        return false;
    }
    else if(description == ""){
        alert("Please provide a description of your artwork.");
        return false;
    }
    else if(!impressionism && !surrealism && !realism && !digital_art && !pixel_art && !line_art){
        alert("Please select at least one art style.");
        return false;
    }
    else if(!yes && !no){
        alert("Please indicate whether you would like to receive updates.");
        return false;
    }
}