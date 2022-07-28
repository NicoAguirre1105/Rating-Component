function main() {
    
    function createRateEvent(value) {
        
        function clickValue(id) {
            const button = document.getElementById(id),
                prevButton = document.getElementsByClassName('value-selected')
            
            if (button.className.includes("value-selected")){
                return
            }
            if (prevButton.length > 0){
                prevButton[0].classList = 'value'
                button.classList = "value-selected"
                return
            }
            
            button.classList = "value-selected"
        }
        
        value.addEventListener('click', () => {
            clickValue(value.getAttribute('id'))
        })
        
    }
    function createSubmitEvent() {
        function submitRating() {
            function changeWindow() {
                const ratingWindow = document.getElementById("rating"),
                    thanksWindow = document.getElementById('thanks')
                
                ratingWindow.classList = 'window hidden'
                thanksWindow.classList = 'window thanks'
            }
            const selectedValue = document.getElementsByClassName('value-selected'),
                phrase = document.getElementById('phrase')
            if (selectedValue.length > 0) {
                phrase.innerHTML = 'You selected ' + selectedValue[0].getAttribute('id') + ' out of 5'
                console.log('Change window')
                changeWindow()
                return
            }
            console.log("Rating hasn't been selected")
        }

        submitButton.addEventListener('click', submitRating)
    }
    
    const values = document.getElementsByClassName('value'),
        submitButton = document.getElementById('submitButton')

    for (let i = 0; i < values.length; i++) {
       createRateEvent(values[i])        
    }
    createSubmitEvent()
}

main()