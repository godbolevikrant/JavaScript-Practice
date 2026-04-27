
function processUserInput(callback) {
    let name="Vikrant";
    callback(name);
}
processUserInput((name)=>{
    console.log("Hello, " + name + "!");
});