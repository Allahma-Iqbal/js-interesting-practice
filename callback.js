
function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
// const names = ['Hridoy', 'allama', 'iqbal'];

// const myObject = { name: 'hridoy', age: 25 };

function goodMorning(name) {
    console.log('Good Morning', name)
}


function goodAfternoon(name) {
    console.log('Good Afternoon', name)
}
function goodEvening(name) {
    console.log('Good Evening', name)
}


welcomeMessage('Hridoy', goodMorning);
welcomeMessage('Allama', goodAfternoon);
welcomeMessage('Iqbal', goodEvening);


function handleClick() {
    console.log('Button is Clicked');
}

document.getElementById('my-btn').addEventListener('click', handleClick)

document.getElementById('btn').addEventListener('click', function () {
    console.log('button is clicked');
})



