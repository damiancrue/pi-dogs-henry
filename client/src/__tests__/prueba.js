const dogs = [
{
    "id":1,
    "name":"Affenpinscher",
    "heightMin":"23",
    "heightMax":"29",
    "weightMin":"3",
    "weightMax":"6",
    "life_span":"10 - 12 years",
    "temperaments":["Stubborn"," Curious"," Playful"," Adventurous","Active"," Fun-loving"],
    "image":"https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    "createdInDb":false},
{
    "id":2,
    "name":"Afghan Hound",
    "heightMin":"64",
    "heightMax":"69",
    "weightMin":"23",
    "weightMax":"27",
    "life_span":"10 - 13 years",
    "temperaments":["Aloof"," Clownish"," Dignified"," Independent"," Happy"],
    "image":"https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
    "createdInDb":false},
{
    "id":3,
    "name":"African Hunting Dog",
    "heightMin":"76",
    "heightMax":84,
    "weightMin":"20",
    "weightMax":"30",
    "life_span":"11 years",
    "temperaments":["Wild"," Hardworking"," Dutiful"],
    "image":"https://cdn2.thedogapi.com/images/rkiByec47.jpg",
    "createdInDb":false},
{
    "id":4,
    "name":"Airedale Terrier",
    "heightMin":"53",
    "heightMax":"58",
    "weightMin":"18",
    "weightMax":"29",
    "life_span":"10 - 13 years",
    "temperaments":["Outgoing"," Friendly"," Alert"," Confident"," Intelligent"," Courageous"],
    "image":"https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
    "createdInDb":false},
{
    "id":5,
    "name":"Akbash Dog",
    "heightMin":"71",
    "heightMax":"86",
    "weightMin":"41",
    "weightMax":"54",
    "life_span":"10 - 12 years",
    "temperaments":["Loyal"," Independent"," Intelligent"," Brave"],
    "image":"https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
    "createdInDb":false},
{
    "id":6,
    "name":"Akita",
    "heightMin":"61",
    "heightMax":"71",
    "weightMin":"29",
    "weightMax":"52",
    "life_span":"10 - 14 years",
    "temperaments":["Docile"," Alert"," Responsive"," Dignified","Active", "Composed"," Friendly"," Receptive"," Faithful"," Courageous"],
    "image":"https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
    "createdInDb":false}
];
const payload = "Active"
const allTemp = dogs;
            console.log(payload)
             const tempFiltered = payload === 'all' ? allTemp : allTemp.filter(
                el => el.temperaments.includes(payload));
        //         {
        //         if (typeof (el.temperaments) === 'string') return el.temperaments.includes(action.payload);
        //         if (Array.isArray(el.temperaments)) {
        //            let temps = el.temperaments.map(el => el.name);
        //             return temps.includes(action.payload);
        //         }
        //         return true;       
        //    });
        //   tempFiltered.filter(el=>el.temperaments!==null)
            console.log(tempFiltered)
