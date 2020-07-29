$(function(){

    chrome.storage.sync.get('total',function(budget){
       $('#total').text(budget.total) 
    })   

    chrome.storage.sync.get('limit',function(budget){
        $('#limit').text(budget.limit) 
     })   


    $('#spendAmount').click(function(){
        chrome.storage.sync.get(['total','limit'],function(budget){
            var newTotal = 0;
            if(budget.total){
                newTotal += parseInt(budget.total)   
            }   
            var amount = $('#amount').val()
            if(amount){
                newTotal += parseInt(amount)
            }
            chrome.storage.sync.set({"total":newTotal},function(){
                if(newTotal >= budget.limit)
                {
                    var notifOptions ={
                        type: 'basic',
                        iconUrl :'assests/LimitReached128.png',
                        title:'Limit Reached',
                        message:'Looks like you have reached Notification Limit'
                    }
                    chrome.notifications.create('limitNotif', notifOptions)
                }
            })
            $('#total').text(newTotal)      
            $('#amount').val('')       
        })
    })
})