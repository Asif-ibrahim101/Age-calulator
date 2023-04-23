
// age show
let days = document.getElementById('Days');
let months = document.getElementById('Months');
let years = document.getElementById('Years');

// function to calculate age
function age() {
    var d1 = document.getElementById('date').value;
    const testDate = parseInt(d1);

    // if(test > 30) {
    //     console.log("enter a valid number");
    // }else{
    //     console.log("the number is correct");
    // }

    var m1 = document.getElementById('month').value;
    const testMonth = parseInt(m1);

    var y1 = document.getElementById('year').value;
    const testYear = parseInt(y1);


    let redDate = document.getElementById('date');
    let redDate2 = document.getElementById('month');
    let redDate3 = document.getElementById('year');

    let btn = document.querySelector('.btn');

    let text = document.getElementsByClassName('.error_text');
    console.log(text);

    let error_msg = document.getElementById('block1');
    let error_msg2 = document.getElementById('block2');
    let error_msg3 = document.getElementById('block3');
    console.log(error_msg);

    let showMsg = document.getElementById("error_text");
    let showMsg2 = document.getElementById("error_text2");
    let showMsg3 = document.getElementById("error_text3");

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (testDate > 30) {
        text.innerHTML = 'enter a valid date';
    }

    if (d1 === "", m1 === "", y1 === "") {
        error_msg.classList.add('error'), error_msg2.classList.add('error'), error_msg3.classList.add('error');
        showMsg.classList.add('show'), showMsg2.classList.add('show'), showMsg3.classList.add('show');
        redDate.classList.add('red'), redDate2.classList.add('red'), redDate3.classList.add('red');
    }
    else {
        if (d1 > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        var d = d2 - d1;
        var m = m2 - m1;
        var y = y2 - y1;

        days.innerHTML = d;
        months.innerHTML = m;
        years.innerHTML = y;
    }

}