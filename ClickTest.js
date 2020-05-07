// Declaration des variables

const resetButton = document.querySelector('.resetButton');
const buttonClickTest = document.querySelector('.buttonClickTest');
const cpsCounter = document.querySelector('.cpsCounter')
const timerText = document.querySelector('.timer')
const selectTimer = document.querySelector('#diffTimer')
const infoSite = document.querySelector('.infoAboutCps')

let scoreCount = 0;
let totalTime = 0;
let timeCount = 0;
let timeMax;
let timeCheck = 0;

// Fonction 

const reloadPage = function(){
    location.reload();
}

const setTimeMax = function(){
    if(selectTimer.value === '1'){
        timeMax = 5
    }else if (selectTimer.value === '2'){
        timeMax = 10
    }else if(selectTimer.value === '3'){
        timeMax = 20
    }else if(selectTimer.value == '4'){
        timeMax = 60
    }
    console.log(timeMax)
}

const timerWarp = function(){
    if (timeMax === timeCount){
        clearInterval(timeInterval)
    } else{
        ++timeCount;
        timerText.innerText = `Timer = ${timeCount} sec`
        console.log(timeCount)
    }
}   

const timer = function(){
    timeCheck++
    if(timeCheck === 1){
        setTimeMax()
        timeInterval = setInterval(timerWarp, 1000)
    }
}

const infoDisplay = function(){
    cpsCounter.innerText = `Click -> ${scoreCount}`
}

const resetButtonColor = function(){
    buttonClickTest.style.background = '#74b9ff'
}

const animClic = function(){
    buttonClickTest.style.background = '#6a89cc'
    setTimeout(resetButtonColor ,100)
}

const scoreScreen = function(){
    cpsCounter.style.fontSize = '50px';
    infoSite.style.display = 'none';
    selectTimer.style.display = 'none';
    timerText.style.display = 'none'
}

const cpsTransalt = function(){
    let cpsCount = 0;
    cpsCount = scoreCount / timeMax;
    cpsCounter.innerText = `Vous avez de ${cpsCount} cps`;
    scoreScreen()
}

const endGame = function(){
    if (timeCount === timeMax){
        buttonClickTest.style.display = 'none';
        cpsTransalt()
    }
}

// Boucle principale

const main = function(){
    timer()
    infoDisplay()
    endGame()
}

// Les evenements

resetButton.addEventListener('click', reloadPage);

buttonClickTest.addEventListener('click', function(event){
    ++scoreCount;
    main()
    animClic()
})



