 $(function(){

    chrome.storage.sync.get('limit',function(budget){
        $('#limit').val(budget.limit) 
    })


    $('#savelimit').click(function(){
        var limit = $('#limit').val()
        if(limit){
            chrome.storage.sync.set({'limit':limit},function(){
                 close();
            })
        }
    })

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({"total": 0})
        var limit = $('#limit').val()
        var notifOptions ={
            type: 'basic',
            iconUrl :'assests/LimitReached128.png',
            title:'Total Reset',
            message:'Total has been reset to zero'
        }
        chrome.notifications.create('limitNotif', notifOptions)
    })


 })