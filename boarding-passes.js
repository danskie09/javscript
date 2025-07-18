const departTripTicket = {
    name: "Daniel",
    from: "Dumaguete",
    to: "Manila",
    businessClass: false,
    upgrade: function (){
        if(departTripTicket.businessClass == true){
            console.log("You are already on a Business Class")

        }
        else{
            departTripTicket.businessClass = true
        }
    }

}

const returnTripTicket = {
    name: "John",
    from: "Dumaguete",
    to: "Manila",
    businessClass: true,
    upgrade: function (){
        if(returnTripTicket.businessClass == true){
            console.log("You are already on a Business Class")

        }
        else{
            returnTripTicket.businessClass = true
        }
    },
    leaveTime: 1,
    arriveTime: 6,
    flightTime: function(){
        let time = this.arriveTime - this.leaveTime;

        if(time < 0){
            time += 24
        }

        console.log("Flight Time is: " + time + "hours")


    }
} 

returnTripTicket.upgrade();
if(returnTripTicket.businessClass){
console.log(returnTripTicket.name + " is on a Business Class")

}
else{
    console.log(returnTripTicket.name + " is NOT on a Business Class")
    
}

returnTripTicket.flightTime()