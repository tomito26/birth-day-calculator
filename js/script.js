function nameCalculator(){
    let date = document.getElementById('date').value;
    let year = document.getElementById('year').value;
    let month = parseInt(document.getElementById('month').value);
    let gender = document.getElementById('gender').value;
    let cc = parseInt(year.slice(0,2))
    let yy = parseInt(year.slice(2,4))
    
    let output = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7
    let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    let femaleName = ['Akosua', 'Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];


    if (date<=0 || date>31){
        alert('Invalid date')
    }
    else if(month<=0 || month>12){
        alert('Invalid month')
    }
    else if(month==2 && date > 29){
        alert('Invalid date of month')
    }


  



    
// if (month =>1|| month <=12){
//     nameCalculator(month)
// }
// else{
//     alert('Wrong input')
// }

// if(date<=1 || date>= 31){
//     nameCalculator(date)
// }
// else{
//     alert('wrong input')
// }

}