let sub1 = document.querySelector('#sub1');
let sub2 = document.querySelector('#sub2');
let sub3 = document.querySelector('#sub3');
let sub4 = document.querySelector('#sub4');
let para = document.querySelector('#total')

let totalMarks = 400

function result(){
    if(+sub1.value > 100 || +sub2.value > 100 || +sub3.value > 100 || +sub4.value > 100 ){
        alert('invalid marks! Enter Marks out of 100')
    }else if(+sub1.value == "" || +sub2.value == "" || +sub3.value == "" || +sub4.value == ""){
        alert('Please Enter your Marks')
    }else{
        let obtainedMarks = +sub1.value + +sub2.value + +sub3.value + +sub4.value
        let percentage = obtainedMarks/totalMarks * 100

        let grade = 'A'
        if(percentage >= 80){
            grade = 'A+'
        }else if(percentage >= 70){
            grade = 'A'
        }else if(percentage >= 60){
            grade = 'B'
        }else if(percentage >= 50){
            grade = 'C'
        }else if(percentage < 50){
            grade = 'FAIL'
        }
        para.innerHTML = "You Have Obtained " + obtainedMarks + " Out Of " + totalMarks + " and Your Percentage is " + percentage + " % With Grade " + grade 
    }

    sub1.value = ""
    sub2.value = ""
    sub3.value = ""
    sub4.value = ""
    
} 