// takeing control of elemets
const btn = document.querySelector(".submit-btn")
const container = document.querySelector('.container')
const ratOne = document.getElementById("one")
const ratTwo = document.getElementById("two")
const ratThree = document.getElementById("three")
const ratFour = document.getElementById("four")
const ratFive = document.getElementById("five")

//highlighting the rate
function highlightChoice(e){
    if(e.target.id === 'one') {
        ratOne.classList.add('selected')
        ratTwo.classList.remove('selected')
        ratThree.classList.remove('selected')
        ratFour.classList.remove('selected')
        ratFive.classList.remove('selected')
    } else if(e.target.id === 'two'){
        ratOne.classList.add('selected')
        ratTwo.classList.add('selected')
        ratThree.classList.remove('selected')
        ratFour.classList.remove('selected')
        ratFive.classList.remove('selected')
    } else if(e.target.id === 'three'){
        ratOne.classList.add('selected')
        ratTwo.classList.add('selected')
        ratThree.classList.add('selected')
        ratFour.classList.remove('selected')
        ratFive.classList.remove('selected')
    } else if(e.target.id === 'four') {
        ratOne.classList.add('selected')
        ratTwo.classList.add('selected')
        ratThree.classList.add('selected')
        ratFour.classList.add('selected')
        ratFive.classList.remove('selected')
    } else if(e.target.id === 'five') {
        ratOne.classList.add('selected')
        ratTwo.classList.add('selected')
        ratThree.classList.add('selected')
        ratFour.classList.add('selected')
        ratFive.classList.add('selected')
    } 
}

// building the thanking message card
function setThanksMessage(e){
    if(e.target.id){
        const selectedId = document.getElementById(e.target.id)
        let finelCardHtml = `
            <div class='card thanks-card'>
            <div class='thanks-img'>
            <img src="images/illustration-thank-you.svg" alt="thank you">
            </div>
            <h3 class='head'>You selected ${selectedId.textContent} out of 5</h3>
            <h2>Thank You!</h2>
            <p class='content thanks-content'> We appreciate 
            you taking the time to give a rating. If you ever need more support, 
            don't hesitate to get in touch!</p>
            </div>`
            btn.addEventListener('click', function (){
                container.innerHTML = finelCardHtml
            })
    }
}

// eventlisteners
document.addEventListener('click', highlightChoice)
document.addEventListener('click', setThanksMessage)


