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

   //Usecase 2: Add Regex Expresions
   constructor(firstName,lastName,address,city,state,zip,phoneNumber,email)
   {
    let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    let emailRegex=RegExp('^[a-zA-Z0-9]+([\.\+\-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}(\.[a-zA-Z]+)?)$');
    let addressRegex=RegExp('^[A-za-z]{4,}');
    let phoneRegex=RegExp('^[0-9]+\\s[0-9]{10}$');
    let zipRegex=RegExp('^[1-9][0-9]{2}\\s?[0-9]{3}$');
    if(nameRegex.test(firstName) && nameRegex.test(lastName))
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }
    else throw 'Name is Incorrect';
    if(emailRegex.test(email))
    {
        this.email=email;
    }
    else throw 'Email is Incorrect';
    if(addressRegex.test(address) && addressRegex.test(city) && addressRegex.test(state))
    {
        this.address=address;
        this.city=city;
        this.state=state;
    }
    else throw 'Address is Incorrect';
    if(phoneRegex.test(phoneNumber)) 
    {
        this.phoneNumber=phoneNumber;
    }   
    else throw 'Phoen Number is Incorrect';  
    if(zipRegex.test(zip))
    {
        this.zip=zip;
    } 
    else throw 'Zip is Incorrect';
   }

   toString()
   {
    return ("Name: " + this.firstName + " " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nPincode: " + this.zip + "\nPhone Number: " + this.phoneNumber + "\nEmail Id: " + this.email);
   }
}

//Usecase 1: Create contacts and display 
try
{
    //Usecae 3: Store Address Book Contact in Array 
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

//Display Array Objects
console.log(contactList);


//UC4: Display after Modification
console.log(contactList);

Modify();
//Usecase 4: Modify a contact based on Name
function Modify() 
{
    //User enters field to Modify
    let i=0;
    console.log("-------To Modify-------\nEnter first name of user that needs modification");
    let name = prompt();

    //Traverse till the desired index
    while( contactList[i].firstName!= name)
    {
        i++;
    }

    console.log("Enter field to be modified 1.firstName 2.lastName 3.Address 4.city 5.state 6.zip 7.phoneNumber 8.email 9.Delete a contact");
    let ch =  parseInt (prompt());
    switch (ch)
    {
        case 1:
            console.log("Enter the modified value");
            let fn =  prompt();
            contactList[i].firstName = fn;
            break;
        case 2:
            console.log("Enter the modified value");
            let ls = prompt();
            contactList[i].lastName = ls;
            break;
        case 3:
            console.log("Enter the modified value");
            let add = prompt();
            contactList[i].address = add;
            break;
        case 4:
            console.log("Enter the modified value");
            let cities =  prompt();
            contactList[i].city = cities;
            break;
        case 5:
            console.log("Enter the modified value");
            let states = prompt();
            contactList[i].state=states;
            break;
        case 6:
            console.log("Enter the modified value");
            let temp = prompt();
            contactList[i].zip = temp;
            break;
        case 7:
            console.log("Enter the modified value");
            let phn =  prompt();
            contactList[i].phoneNumber = phn;
            break;
        case 8:
            console.log("Enter the modified value");
            let emails = prompt();
            contactList[i].email = emails;
            break;
        
        //Usecae 5: Delete a user based on Name
        case 9:
            delete contactList[i];
             break;        
        default:
            console.log("Invalid Option");
            break;
    }
}