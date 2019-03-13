
var users = [
{
	firstName: 'Artur',
	lastName: 'Ruschak',
	age: 16,
	skills: ['run', 'jump', 'swim', ],
	gender: 'male',
	married: false
}
,
{
	firstName: 'John',
	lastName: 'Anderson',
	age: 34,
	skills: ['run',  'swim', 'dance'],
	gender: 'male',
	married: true,
    childrens : {
        'Alex' : {
        
	firstName: 'Alex',
	lastName: 'Anderson',
	age: 12,
	skills: ['run','jump'],
	gender: 'male',
	married: false

    
    }
    }
}
,
{
	firstName: 'Natalia',
	lastName: 'Olexandrova',
	age: 24,
	skills: ['run','swim','dance'],
	gender: 'female',
	married: false
},
{
	firstName: 'Gena',
	lastName: 'Bukin',
	age: 37,
	skills: ['run','jump'],
	gender: 'male',
	married: true,
    childrens : {
        'Roma' : {
        
	firstName: 'Roman',
	lastName: 'Bukin',
	age: 18,
	skills: ['run','jump','swim'],
	gender: 'male',
	married: false

    
    },
        'Sveta': {
    
	firstName: 'Svetlana',
	lastName: 'Bukin',
	age: 19,
	skills: ['run','jump','swim','dance'],
	gender: 'Female',
	married: false

           
        
        
    }
    }

},
    {
	firstName: 'Vasya',
	lastName: 'Pupkin',
	age: 13,
	skills: ['run','swim','jump'],
	gender: 'male',
	married: false
},
    {
	firstName: 'Julia',
	lastName: 'Ice',
	age: 16,
	skills: ['run','swim','dance','jump'],
	gender: 'female',
	married: false
},
 {
	firstName: 'Denis',
	lastName: 'Kuhtyak',
	age: 43,
	skills: ['run','swim'],
	gender: 'male',
	married: true,
        childrens : {
            'Anya' : {
                
	firstName: 'Anya',
	lastName: 'Kuhtyak',
	age: 21,
	skills: ['run','jump','swim','dance'],
	gender: 'Female',
	married: false

    
            }
        }
},
{
	firstName: 'Oksana',
	lastName: 'Green',
	age: 31,
	skills: ['run','dance'],
	gender: 'female',
	married: true,
    childrens : {
    'Vladislav' : {
    
	firstName: 'Vlad',
	lastName: 'White',
	age: 11,
	skills: ['run','jump',],
	gender: 'male',
	married: false

}
} 
}

    
];

var first = _.filter(users,function(item){
    return item.age < 30;
});
first = _.filter()
console.log(first);
        
