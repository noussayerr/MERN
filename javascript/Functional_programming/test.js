const canafford=(itmeprice,account)=>{
    if (itmeprice>account){
        return `cannot afford! you are $${itmeprice - account} short`;
    }else{
        return "can afford";
    }
}

const mybankaccount=1000;
const drone=1001;

let droneonsale=drone-drone *0.03;

console.log (canafford(drone,mybankaccount));