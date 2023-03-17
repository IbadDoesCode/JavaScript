let num = [1,3,7]

// Don't Do This
for (let i = 0; i < num.length; i++) 
{
    // console.log(num[i])
}

// Do This Instead
num.forEach(number => {
    console.log(number)
})