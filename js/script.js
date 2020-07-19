function nameCalculator(){
    let d = document.getElementById('date').value;
    let  year = d.split('-')[0]
    let month = parseInt(d.split('-')[1])
    let date = parseInt(d.split('-')[2])
    let cc = parseInt(year.slice(0,2))
    let yy = parseInt(year.slice(2,4))
    let output = Math.trunc(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date) % 7)
    
    let gender = document.getElementById('gender').value;
    let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    let femaleNames = ['Akosua','Adwoa',' Abenaa','Akua','Yaa','Afua','Ama']
    if (gender == 'male'){
        alert('You were born on '+ day[output] +'  and your akan name is ' + maleNames[output])
    } 
    else if (gender =='female'){
        alert('You were born on '+ day[output] +'  and your akan name is ' + femaleNames[output])
    }
    else{
        alert('Wrong input')
    }

     


}