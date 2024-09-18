const url ='https://66ea8fb755ad32cda4796c42.mockapi.io/api/v1/scooter'

const Id = document.querySelector('#id')as HTMLInputElement;
const SerialNumber = document.querySelector('#serialNumber')as HTMLInputElement;
const Model = document.querySelector('#model')as HTMLInputElement;
const BatteryLevel = document.querySelector('#batteryLevel')as HTMLInputElement;
const ImageUrl = document.querySelector('#imageUrl')as HTMLInputElement;
const Color = document.querySelector('#color')as HTMLInputElement;
const Status = document.querySelector('#status')as HTMLInputElement;
const sendBTN = document.querySelector('#sendBTN')as HTMLButtonElement;

interface Scooter{
    id?:string
    seriaNumber:string
    model:string
    battryLevel:string
    imageUrl:string
    color:string
    status?:string
}
async function fetchFun():Promise<void>
{
  try{
    const respons = await fetch(url);
    const data = await respons.json();
    console.log(data);
  }
  catch(error){
    console.error('Error fetching todos:', error);
  }    
}
fetchFun();

const newScooter: Scooter = {
    seriaNumber: SerialNumber.value,
    model: Model.value,
    battryLevel: BatteryLevel.value,
    imageUrl: ImageUrl.value,
    color: Color.value,
    status: Status.value, 
};

async function creatScooter(scooter:Scooter):Promise<Scooter>
{
    const respons = await fetch(url,{method:'POST',headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(scooter)
    });
    const newScooter= await respons.json();

    const scootersList = document.getElementById("scootersList");
    const li = document.createElement('li') as HTMLLIElement
    li.textContent=`${scooter.battryLevel}${scooter.color}`
    scootersList?.appendChild(li);
    return newScooter;
}





sendBTN.addEventListener('click', async function(){
    await creatScooter(newScooter)
})

