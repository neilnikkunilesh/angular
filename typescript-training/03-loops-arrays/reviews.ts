let reviews: number[] = [5, 5.5, 20, 1, 3];

let total: number=0;

for (let index = 0; index < reviews.length; index++) {
    const element = reviews[index];
    console.log(element);
    total +=reviews[index];
}

console.log("Review Avg: "+total/reviews.length);