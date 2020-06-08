    // document ready
    $(function(){
        // run trade app
        tradeApp.init();
    })
    
    let player = [
        {},
        
        {}
    ];
    
    let leftTradeScore, rightTradeScore = 0;
    
    const tradeApp = {};
    tradeApp.init = () => {
    
        
        // prevent default functionality of submit
        $('form').on('submit', function(event){
            event.preventDefault();
        });
        
        
        // Left submit button functionality
        $('.playerButton').on('click', function(e){
            
            // evaluate button creation function
            const evaluateButton = () =>  {
                if ($('#displayPlayerLeft').hasClass('submitted') && $('#displayPlayerRight').hasClass('submitted')) {
                    $('#evaluateTrade').html('<button type="submit" id="evaluate" class="evaluate" name="evaluate"> evaluate </button>')
                    .css({'position' : 'relative', 'bottom' : '100px'});}
            };
            
            // age modifier method
            const ageMod = (age) => {
                if (age < 17){
                    return 0;
                } else if (age >= 18 && age <= 21) {
                    return 1.5;
                } else if (age >= 22 && age <= 26) {
                    return 1.25;
                } else if (age >= 27 && age <= 30) {
                    return 0.75;
                } else if (age >= 31 && age <= 34) {
                    return 0.5;
                } else if (age >= 35 && age <= 40) {
                    return 0.25;
                } else {
                    return 0;
                }
            }
            
            // assign the values to the player array and wieght them based on which button you press.
    
            if (e.target.id === 'submitPlayerLeft'){
    
                const displayLeft = $("#displayPlayerLeft");
    
                player[0] = {
                    side : 'left',
                    name : $('#nameLeft').val(),
                    age : $('#ageLeft').val(),
                    gpg : ($('#gpgLeft').val()) * 11,
                    apg : ($('#apgLeft').val()) * 7,
                    hpg : ($('#hpgLeft').val()) * 1.5,
                    spg : $('#spgLeft').val() * 1,
                    // run age modifier method
                    modifiers : ageMod($('#ageLeft').val()),
                    // calculate trade score
                    totalTradeScore : (player) => {
                        let score = (player.gpg + player.apg + player.spg + player.hpg) * player.modifiers;
                        
                        return score.toFixed(2);
                    }
                }
    
                // add in the html elements to display the player name and trade score
                
                displayLeft.css({'position' : 'relative', 'top' : '150px', 'max-height' : '200px' , 'margin' : '20px', })
                displayLeft.html(`<h2> ${player[0].name} </h2>`);
                displayLeft.append(`<h3> Trade Score: <span>${player[0].totalTradeScore(player[0])}</span> </h3>`);
                // give class submitted
                displayLeft.addClass('submitted');
    
                evaluateButton();
                
            } else {
    
                const displayRight = $("#displayPlayerRight");
    
                player[1] = {
                    side : 'right',
                    name : $('#nameRight').val(),
                    age : $('#ageRight').val(),
                    gpg : ($('#gpgRight').val()) * 11,
                    apg : ($('#apgRight').val()) * 7,
                    hpg : ($('#hpgRight').val()) * 1.5,
                    spg : $('#spgRight').val() * 1,
                    // run age modifier method
                    modifiers : ageMod($('#ageRight').val()),
                    // calculate trade score
                    totalTradeScore : (player) => {
                        let score = (player.gpg + player.apg + player.spg + player.hpg) * player.modifiers;
            
                        return score.toFixed(2);
                    }
                }   
    
                // add in the html elements to display the player name and trade score
                displayRight.css({'position' : 'relative', 'top' : '150px', 'max-height' : '200px' , 'margin' : '20px', })
                displayRight.html(`<h2> ${player[1].name} </h2>`);
                displayRight.append(`<h3>Trade Score: <span>${player[1].totalTradeScore(player[1])}</span> </h3>`);
                // give class submitted
                displayRight.addClass('submitted');
    
                evaluateButton();
            }  
        });
    
        // left and right player comparison function
        $('#evaluateTrade').on('click', 'button', function(){
    
            // store trade score variables
            leftTradeScore = $('#displayPlayerLeft span').text()
            rightTradeScore = $('#displayPlayerRight span').text();
            
            const tradeStatus = $('.tradeStatus');
            const reset = $('.reset');
            const completeTrade = $('.completeTrade');
    
            // trade difference
            const tradeDifference = leftTradeScore - rightTradeScore;
    
            // if the trade difference is within 5% accept trade
            if (tradeDifference <= 1 && tradeDifference >= -1){
                tradeStatus.html('<h3> trade accepted!!! </h3>');
                completeTrade.css({'left' : 'calc(50% - 300px)'})
            } else {
                tradeStatus.html('<h3> trade rejected </h3>');
                completeTrade.css({'left' : 'calc(50% - 300px)'})
            }
    
            //display reset button
            reset.html('<button class = "resetButton"> reset </button>')
        });
    
        // reset button function
        $('.reset').on('click', 'button', function(){
            location.reload();
        })
    }
   
    

            