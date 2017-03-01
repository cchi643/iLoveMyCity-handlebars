exports.home=function(req,res){
    res.render('home',{title:'iLoveMyCity',
        headline:'We believe that every city have something to say'
    });
}


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageArray=[1,2,3,4];

    if(cityName==='belize'){
        title="Belize";
        heading="Belize: Where i was born and ";
    }
    else if(cityName==='paris'){
        title="Paris";
        heading="Paris: Good talkers are only found in Paris";
    }
    else if(cityName==='newyork'){
        title="New York";
        heading="New York: Come to New York to become someone new";
        imageArray.push(5);
        imageArray.push(6);
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        imageArray: imageArray});
}