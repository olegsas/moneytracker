function randomUsd(min, max){
    var minCent = min*100;
    var maxCent = max*100;
    var amount = Math.floor(Math.random()*(maxCent-minCent) + minCent);
    return amount/100;// we work with cents
}

function randomByn(min, max){
    var minByn = min*100;
    var maxByn = max*100;
    var amount =  Math.floor(Math.random()*(maxByn-minByn) + minByn);
    return amount/100; // we work with cents
}

function randomByr(min, max){
    var minByr = min/100;
    var maxByr = max/100;
    var amount = Math.floor(Math.random()*(maxByr - minByr) + minByr);
    return amount*100; // we work with 100 rub minimum

}

// console.log(randomByr(1000,5000));

function oneDayOfUser(){
    var userDay = [], i = 0;
    db.student.find().forEach(
        function(myName){
            i++;
            userDay[i] = myName.OperationName;
            print("Operation Name: " + myName.OperationName);
            print("i= " + i);
        }

    );
    
}

oneDayOfUser();