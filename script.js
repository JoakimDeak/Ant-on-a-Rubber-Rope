function run(){
    // get value from input fields
    let c = Number(document.getElementById("length").value);
    let a = Number(document.getElementById("speed").value);
    let v = Number(document.getElementById("stretch").value);
    // make sure the program is not run with invalid input
    if(c > 0 && a > 0 && v > 0){
        calc(c, a, v);
    } else{
        document.getElementById("time").innerHTML = "Enter valid numbers";
    }
}

function calc(c, a, v){
    let sum = 0; // fraction traveled
    let i = 1; // seconds past
    while(sum < 1){
        sum = sum +  (a / ( c + (v * i)));
        i++;
    }
    // converting to a more understandable time format
    let years = Math.floor(i / 31556926); // adjusted for leap years
    i %= 31556926;
    let days = Math.floor(i / 86400);
    i %= 86400;
    let hours = Math.floor(i / 3600);
    i %= 3600;
    let minutes = Math.floor(i / 60);
    i %= 60;
    let seconds = i;
    // display final outcome
    const outputField = document.getElementById("time");

    outputField.innerHTML = seconds + " seconds ";
    if(minutes > 0){
        outputField.innerHTML = minutes + " minutes " + outputField.innerHTML;
    }
    if(hours > 0){
        outputField.innerHTML = hours + " hours " + outputField.innerHTML;
    }
    if(days > 0){
        outputField.innerHTML = days + " days " + outputField.innerHTML;
    }
    if(years > 0){
        outputField.innerHTML = years + " years " + outputField.innerHTML;
    }
}
