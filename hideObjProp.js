const obj = {
    public: "Hello",
}
Object.defineProperty(obj,
    'private',{
        enumerable: false,
        value:'Everyone'
    })
console.log(obj)