var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'me'
    };
    setTimeout(() => {
        callback(user);        
    }, 2000);    
};

//https://maps.googleapis.com/maps/api/geocode/json
//https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philidelphia
getUser('31', (userObject) => {
    console.log(userObject);
});