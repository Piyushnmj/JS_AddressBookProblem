var prompt=require("prompt-sync")();

//Class to Create contacts
class ContactClass
{
   firstName;
   lastName;
   address;
   city;
   state;
   zip;
   phoneNumber;
   email;

   constructor(firstName,lastName,address,city,state,zip,phoneNumber,email)
   {
       this.firstName=firstName;
       this.lastName=lastName;
       this.address=address;
       this.city=city;
       this.state=state;
       this.zip=zip;
       this.phoneNumber=phoneNumber;
       this.email=email;
   }
   toString()
   {
    return ("Name: " + this.firstName + " " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nPincode: " + this.zip + "\nPhone Number: " + this.phoneNumber + "\nEmail Id: " + this.email);        
   }
}

//Usecase 1: Create contacts and display 
var contactList=new Array();
let contactClassObject=new ContactClass("Ash","Ketchum","No 5 Bakerlin treet","Chennai","TN",600062,9842905050,"ash@gmail.com");
contactList.push(contactClassObject);
contactClassObject=new ContactClass("Brock","Mandal","LB Marg","Lucknow","UP",243001,9842905050,"broock@gmail.com");
contactList.push(contactClassObject);

contactList.forEach(element => {
    console.log(element.toString());
});