let availableAmount =parseInt(document.getElementById('availableAmount').innerText);
// console.log(availableAmount)
let sendResponse =document.getElementById('send');

sendResponse.onclick =transferMoney;
function transferMoney(){
  let myName =document.getElementById('vaildName').value;
  let myAmount =parseInt(document.getElementById('vaildAmount').value);
 if(myAmount > availableAmount){
  alert('This is out of available amount, please enter a vaild one')
 }else{
  let BankAccount = myName;
  let finalAmount = parseInt(document.getElementById(BankAccount).innerHTML) + myAmount;
  // console.log(finalAmount);
  let availableAmount = parseInt(document.getElementById("availableAmount").innerText) - myAmount;
  document.getElementById("availableAmount").innerText = availableAmount;
  document.getElementById(BankAccount).innerHTML = finalAmount;
  alert(`Transaction Successful !! The 
  ${myAmount}$ Amount is sent to ${myName}`);

  //transaction 
  let view =document.createElement('li');
  let text =document.createTextNode(`the ${myAmount}$ is sent to ${myName} on ${Date()}. `);
  view.appendChild(text);
  let history =document.getElementById('transaction-history');
  history.prepend(view);
  
 }

}