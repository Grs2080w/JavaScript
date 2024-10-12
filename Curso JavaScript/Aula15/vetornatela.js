let num = [4, 3, 7, 9, 1, 20, 1]

for (c=0 ; c<num.length ; c+=1) {
    console.log(num[c])
}


c = 0
while (c < num.length) {
    console.log(num[c])
    c++
} 


c = 0
do {
    console.log(num[c],)
    c++
    } while(c < num.length) 



for (let pos in num) {
    console.log(num[pos])
}