


const f =
 new Intl.RelativeTimeFormat("en-us",{
    style:"long",
    numeric:"auto"
 })
console.log(f.format(-12,"month"))