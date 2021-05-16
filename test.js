// db.persons.aggregate([
//     {$match : {gender : "female"}},
//     {$group : {_id : { state : "$location.state" }, totalPersons : {$sum : 1}}},
//     {$sort : { totalPersons : -1 }}
// ]).pretty()


// db.persons.aggregate([   
//      {$project :      
//         { _id : 0, gender : 1,      
//             fullNam : "$name.first",     
//             age : {$convert : {input : "$dob.age", to : "string"}},    
//              dob : "$dob.date",     
//              dobclear : {$convert : {input : "$dob.date", to : "date"}},     
//              email : "$email"  
//             }},  
             
//         {$group : {_id : { name : "$fullNam"},totalPesron : {$sum : 1}}},  
//         {$sort : {totalPesron : -1}}  ]).pretty()   

db.persons.aggregate([
    {$project  : {

        _id : 0,
        birthYear : {$year : {$toDate : "$dob.date"}}

    }},
    {$group : {_id : {year : "$birthYear"}, totalPersons : {$sum : 1}}},
    {$skip : 2},
    {$limit : 2},
]).pretty()