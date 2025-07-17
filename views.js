const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];


function mean(viewsArray){
    let totalViews = 0;
    for(let i = 0; i < viewsArray.length; i++){
        totalViews += viewsArray[i];
    }

    let arrayLen = viewsArray.length;

    let mean = totalViews / arrayLen ;


    return mean;




}


function median(viewsArray){
let sortedStats = viewsArray

sortedStats.sort(function(a,b){return a - b})
let middleIndex = sortedStats[3]

return middleIndex;


}

console.log("Tiktok")
console.log(mean(recentTikTokViews))
console.log(median(recentTikTokViews))



console.log("Instagram")
console.log(mean(recentInstagramViews))
console.log(median(recentInstagramViews))

console.log("Youtube")
console.log(mean(recentYouTubeViews))
console.log(median(recentYouTubeViews))