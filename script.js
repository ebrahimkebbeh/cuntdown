function startCoundown(){
//Get the target date and time from the input field

const targetDateInput = document.getElementById('date').value;
const targetDate = new Date(targetDateInput).getTime();

///update the countdown every 1 second
const countdownInterval = setInterval(function(){

    //get the current date and time
    const now = new Date().getTime()
    
    //caculate the remaining time in milliseconds
    const distance = targetDate - now;

    //caculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const seconds = Math.floor(distance % ((1000 * 60 * 60 * 24)) / 1000);
    
    //display the countdown in the countdown element
    document.getElementById('countdown').innerHTML =`
    ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`

    //if the coundown is over, display a message
    if(distance < 0){
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'countdown over';
    }
}, 1000)
}