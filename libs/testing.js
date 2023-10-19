
export const cartItems = [
    {id:1, name:"Notebook" ,description:"Brown Cover, 200 pages",price:200},
    {id:2, name:"Sling Bag" ,description:"A louiveton Bag from France",price:10000},
    {id:1, name:"Aqua flask" ,description:"Black with free sticker",price:6000},
    {id:1, name:"Mug" ,description:"Magic Mug , Customizable",price:5500},
    {id:1, name:"Ballpen" ,description:"G-tech 3.0 Black",price:150},
    
]


export function levelIdentifier(level){
    if(level <= 10){
        return "Elite I"
    }
    if(level <= 20) {
        return "Elite II"
    }
    if(level <=  30){
        return "Elite III"
    }
    if(level <= 40){
        return 'Master I'
    }
    if(level <= 50){
        return 'Master II'
    }
    if(level <= 60){
        return 'Master III'
    }
    if(level <= 70){
        return 'Master IV'
    }
    if(level <= 80){
        return 'Master V'
    }
    if(level <= 90){
        return 'GrandMaster I'
    }
    if(level <= 100){
        return 'GrandMaster II'
    }

    if(level <= 110){
        return 'GrandMaster III'
    }
    if(level <= 120){
        return 'GrandMaster IV'
    }
    if(level <= 130){
        return 'GrandMaster V'
    }
    if(level <= 140){
        return 'Specialist'
    }
    if(level <= 150){
        return 'Supreme Master'
    }
    else{
        return "Legendary"
    }
}