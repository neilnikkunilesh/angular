var reviews = [5, 5.5, 20, 1, 3];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    var element = reviews[index];
    console.log(element);
    total += reviews[index];
}
console.log("Review Avg: " + total / reviews.length);
