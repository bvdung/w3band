function exercise1() {
    var date = new Date();
    var currentDay = date.getDay();
    switch(currentDay){
        case 0:
            console.log('Today is' + ' sunday');
            break;
        case 1:
            console.log('Today is' + ' monday');
            break;
        case 2:
            console.log('Today is' + ' tuesday');
            break;
        case 3:
            console.log('Today is' + ' wednesday');
            break;
        case 4:
            console.log('Today is' + ' thurdays');
            break;
        case 5:
            console.log('Today is' + ' friday');
            break;
        case 6:
            console.log('Today is' + ' saturday');
            break;
    }

    date.setHours(22);

    // Current time
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();

    var prepand;

    if(hour == 0) {
        hour = hour + 12;
        prepand = 'AM';
    }else if (hour == 12) {
        prepand = 'PM';
        
    }else if(hour > 12){
        hour = hour - 12;
        prepand = 'PM';
    }else {
        prepand = 'AM';
    }

    var currentTime = `${hour} ${prepand} : ${minute} : ${seconds}`;
    console.log('Current time is : ' + currentTime)
}


function exercise2() {
    function print_current_page() {
        window.print();
    }
    print_current_page();
}

function exercise3() {
    var date = new Date();

    var currentDay = date.getDate();

    // getMonth = (0 - 11) + 1 
    var currentMonth = date.getMonth() + 1;
    var currentYear = date.getFullYear();
    
    console.log(currentMonth, currentDay, currentYear)

}

function exercise4(a, b, c) {
    var p = (a + b + c)/2;
    var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));

    console.log(s)
}

function exercise5(year) {
    var result = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if(result) {
        console.log(`${year} is a leap year`);
    }else {
        console.log(`${year} is not a leap year`);
    }
}



function exercise7() {
    var date = new Date();

    for(let i = 2014; i <= 2050; i++) {
        date.setFullYear(i, 0, 1);

        let day = date.getDay();

        if(day === 0) {
            console.log(`1st January ${i}: sunday`);
        }
    }
}

function exercise8(input) {
    var numberRandom = Math.floor(Math.random()*11);
    console.log('number random: ' + numberRandom);
    if(input === numberRandom) {
        console.log('match');
    }else {
        console.log('not match');
    }
}


function exercise9() {
    var date = new Date();
    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth();
    var currentDay = date.getDate();

    date.setFullYear(currentYear, currentMonth + 1, 0);

    var dayRemainThisMonth = date.getDate() - currentDay;

    var sum = dayRemainThisMonth;

    for(let i = currentMonth + 1; i <= 10; i++) {
        date.setFullYear(currentYear, i + 1, 0);
        let numberDayInMonth = date.getDate();
        sum += numberDayInMonth;
    }

    sum += 25;
   
    console.log(sum);
}

function exercise11() {
    var c = 60;
    var f = 45;
    var F = 9/5 * c + 32;
    var C = 5/9 * ( f - 32 );

    console.log('độ F: ' + F);
    console.log('độ C: ' + C);
}

function exercise12() {
    console.log(window.location.href);
}


exercise12();

exercise11();
exercise9();
exercise7();
exercise5(2000);
exercise4(5, 6, 7); 
exercise3();
exercise2();
exercise1();

sakjdsakdjqwuejkjqwjkqw