const person={
	first_name:'sriram',
	last_name:'R',
	phone:'7397452995',
	email:'rsriram830@gmail.com',
	address:{
		street:{
			street_num:'87665',
			street_name:'nadar 2ed street'
		},
		city:'meenachipuram',
		country:'india'
	}
};
for(cric in person)
{
	if(person[cric] instanceof Object==false)
	{
		console.log(`${cric}=>${person[cric]}`);
	}
	else if(person[cric] instanceof Object)
	{
		for(cric2 in person[cric])
		{
			if(person[cric][cric2] instanceof Object==false)
			{
				console.log(`${cric2}=>${person[cric][cric2]}`);
			}
			else{
				for(cric3 in person[cric][cric2])
				{
					console.log(`${cric3}=>${person[cric][cric2][cric3]}`);
		}
	}
}
	}
}