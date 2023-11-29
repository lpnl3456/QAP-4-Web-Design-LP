const Costomer = {
    firstName : "John",
    lastName: "Smith",
    
     Birth: {
            Year: 1991,
            month: 12,
            day: 21,
    },

    gender: "Male",
    roomPre: ["221"," 222"," 225"," 228"],
    payMeth: "Debit card",
    PassId: "7199108212519",


    mailAdd: {
        stAdd: "452 Smith Rd",
        city: 'Barton',
        Prov: "NL",
        postCode: "A4D2H6",
        country: "Canada",
    },

    PhoneNum: "709-427-8439",
    cellNum: "809-235-7635",

    cheekDate: {
      //cheekIn : new Date(2018,10,11),
      cheekIn : new Date("October 10, 2018"),

      cheekOut : new Date("November 29, 2018")
    },

    GetAge: function(){
        const today = new Date();
        
        age = today.getFullYear()- this.Birth.Year;

        if(this.Birth.month>today.getMonth()){
           age =age -1;
        
       }
       else if(this.Birth.day>today.getDay())
           age = age -1;
        
        return age;
    },

    stayDuration: function(){
        
        stay = Math.round(Math.abs(this.cheekDate.cheekOut-this.cheekDate.cheekIn)/(1000 * 3600 * 24));
        return stay;
    },

    getDescription: function(){
        html = `<p> ${Costomer.firstName} ${Costomer.lastName} is a ${Costomer.gender}. He is ${Costomer.GetAge()} years old. 
        His mail address is ${Costomer.mailAdd.stAdd}, ${Costomer.mailAdd.city}, ${Costomer.mailAdd.Prov}, ${Costomer.mailAdd.postCode}, ${Costomer.mailAdd.country}.
        <br>His phone number is ${Costomer.PhoneNum} and his cell number is  ${Costomer.cellNum}. His passport ID is ${Costomer.PassId}.
        <br>His payment method  was${Costomer.payMeth}. He cheeked in on ${Costomer.cheekDate.cheekIn.toDateString()} and cheeked out on ${Costomer.cheekDate.cheekOut.toDateString()}. He stayed for ${Costomer.stayDuration()} days.
        <br>His room preferances are ${Costomer.roomPre}.`;
        document.body.innerHTML = html;
    }
}

console.log(Costomer.getDescription());