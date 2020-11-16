//export 
let keyValue = 1000;
//export  
function test () {
  keyValue = 400;
  console.log('tested!');
}
let aby = 'Some text';
export{keyValue, test};
export default aby;