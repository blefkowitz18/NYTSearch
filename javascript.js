$(".button").on("click", function(){
    console.log('clicked');
    
    var search = $(this).attr("data-search")
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20180101&q" +
        search + "&sort=newest&api-key=bMQKOKzx1cY3weP0KMWzsrzAY9mAKyqT";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.response.docs[0].headline)
        console.log(response)
        var newDiv = $("<div>")
        $("#filler").append(newDiv)
        var results = response.data

        for (var i = 0; i < results.length; i++) {
        var headLine = $("<h1>")
        var p = $("<p>")
        $(headLine).append(newDiv)
        $(p).append(newDiv)
        }
    })
})



