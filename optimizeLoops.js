// Not Optimize Loops

// Bad Habits
for (let i = 0; 
    i < arr.length; 
    i++) {
        console.log(arr[i])
    }

// Good Habits
for (let i = 0, 
    len = arr.length; 
    i< len; i++) {
        console.log(arr[i])
    }