// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
  // this will throw an error due to the attempt of reassigning a constant variable
  leastFavoriteCustomer = 'Mike';
}
