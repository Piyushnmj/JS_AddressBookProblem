var prompt=require("prompt-sync")();

//Class to Create contacts
class ContactClass
{

   //Usecase 2: Add Regex Expresions
   constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
}
   
   get firstName(){
    return this._firstName;
}
set firstName(value){
    let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(firstNameRegex.test(value))
    this._firstName = value;
    else
    throw 'First name is invalid';
}
get lastName(){
    return this._lastName;
}
set lastName(value){
    let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(lastNameRegex.test(value))
    this._lastName = value;
    else
    throw 'Last name is invalid';
}
get address(){
    return this._address;
}
set address(value){
    let addressRegex = RegExp("^[a-zA-Z\\s]{4,}$");
    if(addressRegex.test(value))
    this._address = value;
    else
    throw 'Address is invalid';
}
get city(){
    return this._city;
}
set city(value){
    let cityRegex = RegExp("^[a-zA-Z\\s]{4,}$");
    if(cityRegex.test(value))
    this._city = value;
    else
    throw 'City is invalid';
}
get state(){
    return this._state;
}
set state(value){
    let stateRegex = RegExp("^[a-zA-Z\\s]{4,}$");
    if(stateRegex.test(value))
    this._state = value;
    else
    throw 'State is invalid';

}
get zip(){
    return this._zip;
}
set zip(value){
    let zipRegex = RegExp("^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$");
    if(zipRegex.test(value))
    this._zip = value;
    else
    throw 'Zip is invalid';
}
get phoneNumber(){
    return this._phone;
}
set phoneNumber(value){
    let phoneRegex = RegExp("^[91]+[\\s]+[0-9]{10}$");
    if(phoneRegex.test(value))
    this._phoneNumber = value;
    else
    throw 'Invalid Phone Number';
}
get email(){
    return this._email;
}
set email(value){
    let emailRegex = RegExp("(^[a-z]+)(([\. \+ \-]?[a-z A-Z 0-9])*)@(([0-9 a-z]+[\.]+[a-z]{3})+([\.]+[a-z]{2,3})?$)");
    if(emailRegex.test(value))
    this._email = value;
    else
    throw 'Invalid Email';
}


   toString()
   {
    return ("Name: " + this.firstName + " " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nPincode: " + this.zip + "\nPhone Number: " + this.phoneNumber + "\nEmail Id: " + this.email);
   }
}

//Usecase 1: Create contacts and display 
try
{
    var contactList=new Array();
    let number= parseInt(prompt("Enter number of contacts to be created:  "));
    var contactClassObject;
    while(number--)
    {
        let firstName= prompt("Enter First Name:  ");
        let lastName=prompt("Enter Last Name:  ");
        let address=prompt("Enter Address:  ");
        let city=prompt("Enter City:  ");
        let state=prompt("Enter State:  ");
        let zip=prompt("Enter Zip:  ");
        let phoneNumber=prompt("Enter Phone Number:  ");
        let email=prompt("Enter Email:  ");
        contactClassObject=new ContactClass(firstName,lastName,address,city,state,zip,phoneNumber,email);
        contactList.push(contactClassObject);
    }
}
catch(e)
{
    console.error(e);
}

contactList.forEach(element => {
    console.log(element.toString());
});