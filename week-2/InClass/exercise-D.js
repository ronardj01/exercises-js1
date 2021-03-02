function displayStatus(status){
    if (status === "happy") {
        return "Good job, you're doing great!";
    } else if(status === "sad") {
        return "Every cloud has a silver lining";
    } else if(typeof status === "number") {
        return "Beep beep boop";
    } else {
        return "I'm sorry, I'm still learning about feelings!";
    }

}

console.log(displayStatus("sad"));