function main() {
    
    function createRateEvent() {
        
        function clickValue(element) {
            const clicked =  element.target.closest('button')
                prevButton = document.getElementsByClassName('value-selected')
            
            if (!clicked) {
                console.log('clicked outside')
                return
            }

            if (clicked.className.includes("value-selected")){
                return
            }

            if (prevButton.length > 0){
                prevButton[0].classList = 'value'
                clicked.classList = "value-selected"
                return
            }
            
            clicked.classList = "value-selected"
        }
        
        valuesParent.addEventListener('click', (e) => {
            clickValue(e)
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
                changeWindow()
                return
            }
            console.log("Rating hasn't been selected")
        }

        submitButton.addEventListener('click', submitRating)
    }
    
    const valuesParent = document.getElementById('rate-container'),
        submitButton = document.getElementById('submitButton')

    createRateEvent()
    createSubmitEvent()
}

main()