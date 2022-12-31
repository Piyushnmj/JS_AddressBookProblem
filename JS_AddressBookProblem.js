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
    {
        this._firstName = value;
    }
    else
    {
        throw 'First name is invalid';
    }
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

//Usecae 3: Store Address Book Contact in Array 
var contactList=new Array();
CreateContact();
UsecaseOperations();
   //Search a person through city or state or View all city and state List
   function UsecaseOperations()
   {
       console.log("Enter 1-to Insert data to AddresBook");
       console.log("Enter 2-to Display Contact List");
       console.log("Enter 3-to Modify Contact List");
       console.log("Enter 4-to Count Contacts in Contact List");
       console.log("Enter 5-to Search based on City or State");
       console.log("Enter 6-to view based on City or State");
       console.log("Enter 7-Sort Array");

       let option = parseInt(prompt());
       switch (option)
       {
           case 1:
               CreateContact();
               break;
           case 2:
               Display(contactList);
               break;
           case 3:
               Modify();
               break;
           case 4:
               CountContacts();
               break;
           case 5:
               SearchBasedonCityortate();
               break;
           case 6:
               ViewBasedonCityorState();
               break;
           case 7:
               SortMethod();
               break;
           default:
               Console.WriteLine("Invalid Option!");
               break;
       }
   }


//Usecase 1: Create contacts and display 
function CreateContact()
{
    try
    {
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

            //Usecase 7: Ability to ensure there is no Duplicate Entry of the same Person in the Address Book

            let duplicateCheck = contactList.filter( x => x.firstName == firstName);
            if(duplicateCheck.length==0)
            {
                contactClassObject=new ContactClass(firstName,lastName,address,city,state,zip,phoneNumber,email);
                contactList.push(contactClassObject);
                //Display Array Objects
                console.log(contactList);
            }
        }
    }
    catch(e)
    {
        console.error(e);
    }
}

function Display(list)
{
    for( let value of list)
    {
        console.log(value.toString());
    }
}

//Usecase 11: Ability to sort the entries in the address book alphabetically by Person’s name
function SortMethod()
{
    //Usecase 12: Ability to sort the entries in the address book by City, State, or Zip 
    console.log("Enter 1-Sort Array based on First Name");
    console.log("Enter 2-Sort Array based on City");
    console.log("Enter 3-Sort Array based on State");
    console.log("Enter 4-Sort Array based on Zip");
    let option = parseInt(prompt());
    switch (option)
    {
        case 1:
            contactList.sort((x,y) => 
            {
                if(x.firstName>y.firstName) return 1;
                else return -1;
            });
            break;
        case 2:
            contactList.sort((x,y) => 
            {
                if(x.city>y.city) return 1;
                else return -1;
            });
            break;
        case 3:
            contactList.sort((x,y) => 
            {
                if(x.state>y.state) return 1;
                else return -1;
            });
            break;
        case 4:
            contactList.sort((x,y) => 
            {
                if(x.zip>y.zip) return 1;
                else return -1;
            });
            break;
    }
    //Display Array Objects
    console.log("--------------After Sorting --------------\n");
    Display(contactList);
}


//Uecase 4: Modify a contact baed on Name
function Modify() 
{
    try
    {
        //User enters field to Modify
        let i=0;
        console.log("-------To Modify-------\nEnter first name of user that needs modification");
        let name = prompt();

        //Traverse till the desired index
        while( contactList[i].firstName!= name && i< contactList.length)
        {
            i++;
            if(i== contactList.length)
            {
                throw 'Name does not exist in ContactLit! Please Enter a valid name';
            }
    
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
                console.log("Ente the modified value");
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
                console.log("Ente the modified value");
                let phn =  prompt();
                contactList[i].phoneNumber = phn;
                break;
            case 8:
                console.log("Ente the modified value");
                let emails = prompt();
                contactList[i].email = emails;
                break;

            //Usecae 5: Delete a user based on Name
            case 9:
                contactList.splice(i, 1)
                console.log(contactList);
                Display(contactList);
                CreateContact();
                break;        
            default:
                console.log("Invalid Option");
                break;
        }
    }
    catch(e)
    {
        console.error(e);
    }
}


function Findcoint(count)
{
    return count+1;
}
//Usecase 6: Ability to find number of contacts in the address book
function CountContacts()
{
    let totalCount=contactList.reduce(Findcoint,0);
    console.log("Total number of contacts in AddressBook: "+totalCount);
}


//Usecase 8: Ability to search Person in a particular City or State 
function SearchBasedonCityortate()
{
    console.log("Enter 'CITY' to Search by City\nEnter 'STATE' to Search by State");
    let city= prompt();
    let cityOrStateList = contactList.filter( x => (x.city== city || x.state==city));
    console.log(cityOrStateList);
}

//Usecase 9: Ability to view Persons by City or State
function ViewBasedonCityorState()
{

    var stateList=new Map();
    var cityList=new Map();
    contactList.forEach(element => {

        //-------------------- Store States in Dictionary -----------------
        stateValue=new Array();
        //Check whether dict has state
        if(stateList.has(element.state))
        {
            stateValue=stateList.get(element.state);
        }
        stateValue.push(element);
        //Set vale to dictionary
        stateList.set(element.state,stateValue);

        //-------------------- Store Cities in Dictionary -----------------
        cityValue=new Array();
        //Check whether dict has state
        if(cityList.has(element.city))
        {
            cityValue=cityList.get(element.city);
        }
        cityValue.push(element);
        //Set vale to dictionary
        cityList.set(element.city,cityValue);
        
    });

    console.log("\nEnter 1- to view person based on City\nEnter 2- to view person based on State");
    if(prompt()== '1')
    {
        console.log("--------------- Printing Contacts Based on City ---------------");
        for(let [key,cities] of cityList)
        {
            console.log("City: "+key+"\n");
            Display(cities);
        }
    }
    else
    {
        console.log("--------------- Printing Contacts Based on State ---------------");
        for(let [key,states] of stateList)
        {
            console.log("State: "+key+"\n");
            Display(states);
        }
    }

    // Uecase 10: Count based on City or State
    console.log("\nEnter 1- to count person based on City\nEnter 2- to count person based on State");
    if(prompt()== '1')
    {
        console.log("--------------- Printing Contacts count Based on City ---------------");
        for(let [key,cities] of cityList)
        {
            console.log("City: "+key);
            console.log("Count is: "+cities.reduce(Findcoint,0)+"\n");
        }
    }
    else
    {
        console.log("--------------- Printing Contacts count Based on State ---------------");
        for(let [key,states] of stateList)
        {
            console.log("State: "+key+"\n");
            console.log("Count is: "+states.reduce(Findcoint,0)+"\n");
        }
    }
}