
$(function(){

    tradeApp.init();
    
});

const tradeApp = {};

// init function
tradeApp.init = function() {

    let playerLeft, playerRight = {};
    let leftTradeScore = 0;
    let rightTradeScore = 0;

    // conditional evaluate button creation
    
    const evaluateButton = () =>  {
        if ($('#displayPlayerLeft').hasClass('submitted') && $('#displayPlayerRight').hasClass('submitted')) {
            $('#evaluateTrade').html('<button type="submit" id="evaluate" class="evaluate" name="evaluate"> evaluate </button>');}
    };
    
    // link up the submit buttons
    $("form").on("submit", function(event){

        // prevent the default functionality of submit
        event.preventDefault();
        
        // scoped variables
        let fullTradeScoreLeft = 0;
        let fullTradeScoreRight = 0;
        
        // make the left player submit functionality
        $('.playerLeft button').on('click', function(){
            
            // store the values from the inputs
            // Left Player object
            playerLeft = {
                name : $('#nameLeft').val(),
                age : $('#ageLeft').val(),
                gpg : $('#gpgLeft').val(),
                apg : $('#apgLeft').val(),
                hpg : $('#hpgLeft').val(),
                spg : $('#spgLeft').val(),
            };
            
            // disable button after submitting
            $('.playerLeft button').prop('disabled', true);
            
            // stat weight function
            const tradeScore = () => {
                const age = playerLeft.age;
                const ageModifier = 0;
                const weightedGpg = playerLeft.gpg * 11;         
                const weightedApg = playerLeft.apg * 7;
                const weightedSpg = playerLeft.spg * 1;
                const weightedHpg = playerLeft.hpg * 1;
                const weightedAge = () => {
                    if (age > 18){
                        alert('no beuno');
                    } else if (age >= 18 && age <= 21){
                        ageModifier = 2;
                    } else if (age >= 22 && age <= 26){
                        ageModifier = 1.5;
                    } else if (age >= 27 && age <= 30){
                        ageModifier = 1;
                    } else if (age >= 31 && age <= 34){
                        ageModifier = 0.75;
                    } else if (age >= 35 && age <= 40){
                        ageModifier = 0.5;
                    } else {
                        alert('really no beuno');
                    }
                    
                }
        
                
                fullTradeScoreLeft = (weightedGpg + weightedHpg + weightedSpg + weightedApg) / 2;

                return fullTradeScoreLeft;
            }
            
            // display player name and trade score
            const displayLeft = $("#displayPlayerLeft");
            const tradeScoreLeft = tradeScore();
            
            displayLeft.html(`<h2> ${playerLeft.name} </h2>`);
            displayLeft.append(`<p> ${tradeScoreLeft} </p>`);
            displayLeft.addClass('submitted');

            evaluateButton();

        });
        
        // right player submit functionality
        $('.playerRight button').on('click', function(){
            // Right Player object
            playerRight = {
                name : $('#nameRight').val(),
                age : $('#ageRight').val(),
                gpg : $('#gpgRight').val(),
                apg : $('#apgRight').val(),
                hpg : $('#hpgRight').val(),
                spg : $('#spgRight').val()
            };

            // disable button after submitting
            $('.playerRight button').prop('disabled', true);
            
            // stat weight function
            const tradeScore = () => {
                const weightedGpg = playerRight.gpg * 11;         
                const weightedApg = playerRight.apg * 7;
                const weightedSpg = playerRight.spg * 1;
                const weightedHpg = playerRight.hpg * 1;

                
                fullTradeScoreRight = (weightedGpg + weightedHpg + weightedSpg + weightedApg) / 2;

                return fullTradeScoreRight;
            }
            
            // display player name and trade score
            const displayRight = $("#displayPlayerRight");
            const tradeScoreRight = tradeScore();
            
            displayRight.html(`<h2> ${playerRight.name} </h2>`);
            displayRight.append(`<p> ${tradeScoreRight} </p>`);
            displayRight.addClass('submitted');

            evaluateButton();
                    
        });
        
        // left and right player comparison function
        $('#evaluateTrade').on('click', 'button', function(){
            
            leftTradeScore = $('#displayPlayerLeft p').text()
            rightTradeScore = $('#displayPlayerRight p').text();

            const tradeStatus = $('.tradeStatus');
            const reset = $('.reset');

            const tradeDifference = leftTradeScore - rightTradeScore;

            // if the trade difference is within 5% accept trade
            if (tradeDifference <= 0.25 && tradeDifference >= -0.25){
                tradeStatus.html('<h3> trade accepted!!! </h3>');
            } else {
                tradeStatus.html('<h3> trade rejected :( </h3>');
            }

            //display reset button
            reset.html('<button class = "resetButton"> reset </button>')
        })

        // reset button function
        $('.reset').on('click', 'button', function(){
            location.reload();
        })
    });
}

        

//branch test!