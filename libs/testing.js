
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




export function colorLevelIdentifier(level){
   
   
    if(level <=  30){
        return "yellow"
    }
   
    if(level <= 80){
        return 'orange'
    }
   
    if(level <= 130){
        return 'blue'
    }
    if(level <= 140){
        return 'violet'
    }
    if(level <= 150){
        return "purple"
    }
    else{
        return "red"
    }
}


export const  sectionTimeSchedule = [
    {id:1, time: "7:00 AM - 8:30 AM"},
    {id:2, time: "8:30 AM - 10:00 AM"},
    {id:3, time: "10:00 PM - 12:30 PM"},
    {id:4, time: "1:30 PM - 3:00 PM"},
    {id:5, time: "3:00 PM - 4:30 PM"},
];

export const levelRewards = [
    {id:1, levelNumber:10, price: ""},
    {id:2, levelNumber:20, price: ""},
    {id:3, levelNumber:30, price: ""},
    {id:4, levelNumber:40, price: ""},
    {id:5, levelNumber:50, price: ""},
    {id:6, levelNumber:60, price: ""},
    {id:7, levelNumber:70, price: ""},
    {id:8, levelNumber:80, price: ""},
    {id:9, levelNumber:90, price: ""},
    {id:10, levelNumber:100, price: ""},
    {id:11, levelNumber:110, price: ""},
    {id:12, levelNumber:120, price: ""},
]