function randomUsd(min, max){
    var minCent = min*100;
    var maxCent = max*100;
    return Math.floor(Math.random()*(max-min)+min)
}