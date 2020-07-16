// Shahzaib Rasool Khan
// WM10502

// CHAPTER 1

// 1

alert('greet your website visitor')

// 2
 document.write('Error! Please Enter a Valid Password')

// 3

alert('Welcome to JS Land..\nHapping coding!')

// 4

alert('Welcome to JS Land..')
alert('Happing coding')

// 5

alert('Hello... I can run Js through web browser\'s console')

// 6

alert('index.html')

// 7


// <!DOCTYPE html>
// <html lang="en">

//  <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>JS Assignment</title>
//     <script src="app.js"></script>
//   </head>

//  <body>
//     <script src="app.js"></script>
//     <h1>Heading</h1>

//     <script src="app.js"></script>
//     <h1>Heading</h1>

//     <script src="app.js"></script>
// </body>

// </html>



// CHAPTER 2

// 1
  
var userName;

// 2

 let myName ='shahzaib rasool khan'

// 3
 
 let message ='Hello World'
 
 alert(message)

 // 4

 var name='Shahzaib Rasool Khan'
 var age ='21 years'
 var course = 'web and Mobile Development'
 alert(name,age,course)
 alert(age)
 alert(course)


 // 5
  
 var pizza ="PIZZA\nPIZZ\nPIZ\nPI\nP"
 var alert(pizza)

 // 6

 let email ='shahzaibrasoolkhan@gmail.com'
 alert('My Email Address is '+ email)


 // 7

 let book ='A Smarter way to learn JavaScript'
 alert(book)

 // 8 

 document.write('Yah! I can write Html content through JavaScript')


 // 9

 var design ='???????????????????????'
 alert('design')

 // CHAPTER 3

 // 1
  
 let age = 21
 alert('I am'+ age +'Years Old')

 // 2

  var visit = 3
  alert('You have visited this site' + visit+ 'time')

 // 3

 let birthYear= 1998
 alert('My Birth Year is' + birthYear + '<br>Date type of my desclared variable is number')


// 4

 let visitorName ='Shahzaib'
 let productTitle ='shirt'
 var quantity = 5
 alert(visitorName +'ordered'+ quantity +' '+ productTitle + '(s) on SH clothing Store')


// CHAPTER 4

 // 1
 var a,b,c;

 // 2
 var $_a, _b, _123, abc_xyz, abc_123;

// var abc xyz, 123abc, abc 'sxyz, abc-123, %_aa;

// 3

 document.write('<h1>Rules for naming JS variables</h1><br><p>Variable names can only contain numbers, $ and _ . For example $my_1stVariable<br>Variables must begin with a letter, $ or _ . For example $name, _name or name<br>Variable names are case sensitive<br>Variable names should not be JS</p>')
 
// CHAPTER 5

 // 1

 firstNumber = 3;
 secondNumber = 5;
 result = firstNumber + secondNumber;
 document.write('sum of' +first Number + 'and' +second Number + 'is'+ result)

// 2  

  firstNumber = 6;
 secondNumber = 5;
 result = firstNumber - secondNumber;
 document.write('sub of' +first Number + 'and' +second Number + 'is'+ result)


 

  firstNumber = 3;
 secondNumber = 5;
 result = firstNumber * secondNumber;
 document.write('Multiple of' +first Number + 'and' +second Number + 'is'+ result)



  firstNumber = 15;
 secondNumber = 5;
 result = firstNumber / secondNumber;
 document.write('Divide of' +first Number + 'and' +second Number + 'is'+ result)



  firstNumber = 15;
 secondNumber = 5;
 result = firstNumber % secondNumber;
 document.write('Reminder of' +first Number + 'and' +second Number + 'is'+ result)


 // 3

  var a;
  document.write('value after variable declaration is: ')
  document.write(a)

  a = 6;
  document.write('<br><br> initial value ')
  document.write(a)

  a++;
  document.write('<br><br> value after increment')
  document.write(a)


   a = a+7;
  document.write('<br><br> value after addition')
  document.write(a)

 
  a--;
  document.write('<br><br> value after decrement')
  document.write(a)

 

  a = a % 3;
  document.write('<br><br> Show the remainder after dividing the variable’s value by 3: ')
  document.write(a)


 //4

 var ticker =600;
 var numberOfTicket = 5;
 document.write('Total cost to buy ' + numbersOfTicket + ' tickets to a movie is ' + ticker * numbersOfTicket + 'PKR')


 // 5
 
  document.write('Table of 4<br>')
   for(let i=1 ; i <= 10 ; i++){
 
   document.write('4x' + i + '=' + i * 4 + '<br>') 
 } 

 // 6

 var fehrenheit =77;
 var convertCelsius =(fehrenheit -32) * 5/9;
 document.write(convertCelsius +'°C is ' + fehrenheit + '°F<br>')

 var celsius = 21.11111111111111;
 var convertFehrenheit = (celsius * 9/5) + 32;
 document.write(convertFehrenheit + '°F is ' + celsius + '°C')

// 7

 var price =650;
 var pric2 =100;
 var shippingCharges =100;
 var q1 =3;
 var q2 =7;
 var totalCost = (price *q1) + (price2 *q1) + shippingCharges
 document.write('<h1>Shopping Cart</h1><br>')
 document.write('Price of item 1 is ' + price1 + '<br>Quentity of item 1 is ' + q1 + '<br>Price of item 2 is ' + price2 + '<br>Quentity of item 2 is ' + q2 + '<br>Shipping Charges ' + shippingCharges + '<br><br>Total cost of your order is ' + totalCost)

 // 8

 var totalMarks =980;
 var obtainedMarks =804;
 var percentage =(obtainedMarks/totalMarks) * 100;

 document.write('<h1>Marks Sheet</h1><br>')
 document.write('Total marks: ' + totalMarks + '<br>')
 document.write('Marks obtained: ' + obtainedMarks + '<br>')
 document.write('Percetage: ' + percentage)
 
 // 9

 singleExpression = (104.80 * 10) + (28 * 25);
 document.write('<h1>Currency in PKR</h1><br>Total Currency in PKR:' + singleExpression)

 //10

 var b = 5*10/2;
 document.write('Arithmetic Operation: ' + b)

 // 11

 var currentYear =2020;
 var birthYear =2000;
 var age = currentYear - birthYear;


 document.write('<h1>Age Calculator</h1><br>')
 document.write('Current Year: ' + currentYear + '<br>')
 document.write('Birth Year: ' + birthYear + '<br>')
 document.write('Your Age: ' + age)


 //  12

 let pi =3.142;
 var radius = 20;
 var circumferenceOfACircle = 2 *pi * radius;
 var area = pi * radius * radius;

 document.write('<h1>The Geometrizer</h1><br>')
 document.write('Radius of a circle: ' + radius + '<br>')
 document.write('The circumference is: ' + circumferenceOfACircle + '<br>')
 document.write('The area is: ' + area)

 // 13

 var snack = 'choclate chip'
 var age = 15;
 var maxAge =65;
 var day =3;
 var calculate =(maxAge -age )* day;

 document.write('<h1>The Lifetime Supply Calculator</h1><br>')
 document.write('Favourite Snack: ' + snack + '<br>')
 document.write('Current Age: ' + age + '<br>')
 document.write('Estimated Maximum Age: ' + maxAge + '<br>')
 document.write('Amount of snacks per day:' + day + '<br>')
 document.write('You will need ' + calculate + ' chocolate chip to last you until the rip old age of ' + maxAge)

 // CHAPTER 6-9
 
 // 1

 var a =10;

 document.write('Result:<br>')
 document.write('The value of a is:' + a + '<br>')
 document.write('.................................<br><br>')
 document.write('The value of ++a is: ' + ++a + '<br>')
 document.write('Now the value of a is: ' + a + '<br><br>')
 document.write('The value of a++ is: ' + a++ + '<br>')
 document.write('Now the value of a is: ' + a + '<br><br>')
 document.write('The value of --a is: ' + --a + '<br>')
 document.write('Now the value of a is: ' + a + '<br><br>')
 document.write('The value of a-- is: ' + a-- + '<br>')
 document.write('Now the value of a is: ' + a)

// 2

 var a =2;
 var b =1;

 document.write('a: ' + a + '<br>')
 document.write('b: ' + b + '<br>')

 result = --a - --b + ++b + b--;
 document.write('result: ' + result + '<br>')

 document.write('--a value is 1<br>')
 document.write('--a - --b value is 1<br>')
 document.write('--a - --b + ++b value is 2<br>')
 document.write('--a - --b + ++b + b-- value is 3<br>')

 // 3

 var name =prompt('What is Your Name: ')
 alert('Name is: '+name)

 //5

 var tableNumber = prompt('Enter Table Number to Print')

 if(Number(tableNumber)){

   for(let i = 1; i<=10; i++ ){
   
  document.write(tableNumber + 'x' + i + '=' +tableNumber * i + '<br>' );
  }
 }
  else{

  for(let j = 1; j <= 10; j++){

  document.write(5 + 'x' + j + '=' + 5 * j + '<br>')
  }
   }

 // 6

 var subject1 ='English';
 var subject2 ='urdu';
 var subject3 ='Math';

 var totalMarks =100;
 var totalMarksSub =100*3;
 
 var obtainedMarks1 = prompt('Enter Obtained Mask');
 var obtainedMarks2 = prompt('Enter Obtained Mask');
 var obtainedMarks3 = prompt('Enter Obtained Mask');
 var totalMarksObtained = Number(obtainedMarks1) + Number(obtainedMarks2) + Number(obtainedMarks3);
 var percent1 = Math.trunc((obtainedMarks1 / totalMarks ) * 100);
 var percent2 = Math.trunc((obtainedMarks2 / totalMarks ) * 100);
 var percent3 = Math.trunc((obtainedMarks3 / totalMarks ) * 100);  
 var totalPercent = (percent1 + percent2 + percent3) / 3;

 document.write('<table>')

 document.write('<tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>')
 document.write('<tr><td>' + subject1 + '</td><td>' + 
 var totalMarks + '</td><td>' + obtainedMarks1 + '</td><td>' + percent1 + '%</td></tr>')
 document.write('<tr><td>' + subject2 + '</td><td>' + 
 var totalMarks + '</td><td>' + obtainedMarks2 + '</td><td>' + percent2 + '%</td></tr>')
 document.write('<tr><td>' + subject3 + '</td><td>' + 
 var totalMarks + '</td><td>' + obtainedMarks3 + '</td><td>' + percent3 + '%</td></tr>')
 document.write('<tr><th colspan="2">' + totalMarksSub + '</th><th>' + totalMarksObtained + '</th><th>' + totalPercent + '%</th></tr>')
 
 document.write('</table>')


 // CHAPTER 9-11

 // 1

 var cityName =prompt('Enter City Name:')
 if(cityName == 'karachi')
 {
 document.write('Welcome to City of Lights')
 }


 //2

 var gender =prompt('Enter Your Gender:')
 if(gender == 'male'){
 
  document.write('Good Morning Sir')
 }

 else
   if(gender == 'female') {
  
  document.write('Good Morning Maam')
  }

 //3
  
 var signal = prompt('Enter signal Color')
  if(signal == 'red'){
 
  document.write('Must stop')
  
 }
  else 
  if(signal == 'yellow'){
  
  document.write('Ready To Move')
  
 }
  else
    if(signal == 'green'){

    document.write('Move Now')
   }

 // 4

 var fuel = prompt('Enter Fuel in Liters: ')
 if(fuel < 0.25)
 {
 document.write('Please ReFill The Fuel in Your Cars')
 } 

 // 5

 // a.given condition
 // for variable a is true
 // b.given condition
 // for variable b is true
 // c.condition 2 is true, condition 4 is true
 // d.The cost equals
 // e.True
 // f.car is smaller than cat

 // 6

  var subject1 = prompt('Enter First Subject Marks')
 var subject2 = prompt('Enter Second Subject Marks')
 var subject3 = prompt('Enter Third Subject Marks')
 var totalMarks = 300;
 var totalObtaiedMarks = Number(subject1) + Number(subject2) + Number(subject3);
 var percentage = Math.trunc((totalObtaiedMarks / totalMarks) * 100);

  document.write('<h1>Marks Sheet</h1><br>')
  document.write('Total Marks: ' + totalMarks + '<br>')
  document.write('Marks obtained: ' + totalObtaiedMarks + '<br>')
  document.write('Percentage: ' + percentage + '%<br>')

 if (percentage >= 80) {
    document.write('Grade: A1<br>')
    document.write('Remarks: Excellent')
  } else 
   if (percentage >= 70) {
    document.write('Grade: A<br>')
    document.write('Remarks: Good')
  } else 
    if (percentage >= 60) {
    document.write('Grade: B<br>')
    document.write('Remarks: You need to improve')
 } else 
   if (percentage < 60) {
    document.write('Grade: Fail<br>')
    document.write('Remarks: Sorry')
 }
 
 // 7
  
  var secretNumber =5;
 var guess = prompt('Enter The Guess Number ')

 if(secretNumber === Number(guess))
  {
  document.write('Bingo! Correct Answer')
  }
  else
  if(++secretNumber === Number((guess)))
   {
   document.write('close enough to the Correct Answer')
  }

 // 8 

 var number =prompt('Enter Any Number')
 if(Number(number) % 3 == 0){
 document.write('Number is Divisible by 3')
 }
 

 // 9

 var number = prompt('Enter Any Number')
 if (Number(number) % 3 == 0)
 {
 document.write('Even')
 } else {

  document.write('Odd')
  }

 // 10


 var temperature = prompt('Enter Temperature')
 
 if(Number(temperature) > 40 ){
 
  document.write('It is Too Hot OutSide')
  } else if(Number(temperature) > 30 ){
  
   document.write('The Weather Today is Normal')
  } else if(Number(temperature) > 20 ){
 
  document.write('Today Weather is cool')
  } else if(Number(temperature) > 10 ){
 
  document.write('OMG! Today weather is so Cool')
  }
  
 // 11

   var firstNumber = prompt('Enter First Number')
   var secondNumber = prompt('Enter Second Number')
   
   var operator = prompt('Enter Operator')
  

   	if(operator == '+'){

        var calculate = firstNumber + secondNumber;
        document.write('Addition:' + calculate)

       } else if(operator == '-'){

        var calculate = firstNumber - secondNumber;
        document.write('Subtraction:'+ calculate)

       } else if(operator == '*'){

        var calculate = firstNumber  * secondNumber;
        document.write('Multiply:'+ calculate)

       } else if(operator == '/'){

        var calculate = firstNumber / secondNumber;
        document.write('Divide:'+ calculate)

       } else if(operator == '%'){

        var calculate = firstNumber % secondNumber;
        document.write('Remainder:'+ calculate)

       } 
 
 // CHAPTER 12-13


  // 1 

  var characterCheck = prompt('Enter Character')
 
 if(characterCheck.charCodeAt(0) >= 65 && characterCheck.charCodeAt(0) <= 90){
  
  document.write('Upper Case')
  } else if(characterCheck.charCodeAt(0) >= 97 || characterCheck.charCodeAt(0) <= 122){

   document.write('Lower Case')
 }  



  // 2

   var firstNumber = prompt('Enter First Number')
   var secondNumber = prompt('Enter Second Number')
   

  if(Number(firstNumber) > Number(secondNumber)){

  document.write('First Number is greater than second Number')

   } else   if(Number(firstNumber) < Number(secondNumber)){

  document.write('Second Number is greater than First Number')

   } else   if(Number(firstNumber) == Number(secondNumber)){

  document.write('First Number is equal to second number')

   } 

 // 3


 var number = prompt('Enter Any Number Positive Or Negative')

  if(Number(number) == 0){
   
  document.write('Zero')
 
  } else if(Number(number) > 0){
   
  document.write('Positive Number')
 
  } else if(Number(number) < 0){
   
  document.write('Negative Number')
 
  }

// 4 

  var character = prompt('Enter Character')

   if(character.charCodeAt(0) == 65 || character.charCodeAt(0) == 69 || character.charCodeAt(0) == 73 || character.charCodeAt(0) == 79 || character.charCodeAt(0) == 85 || character.charCodeAt(0) == 97 || character.charCodeAt(0) == 101 || character.charCodeAt(0) == 105 || character.charCodeAt(0) == 111 || character.charCodeAt(0) == 117){
   
   document.write('True')
   
    } else {

   document.write('False')
       } 
 

  // 5

  var correctPassword = 'abcd'
  var password = prompt('Enter Password')

   if (correctPassword == password) {
    document.write('Correct! The Password you Entered Matches the Original Password ')
  } else if (password === '') {
    document.write('Please Enter Your Password')
  } else if (correctPassword != password) {
    document.write('Incorrect Password')
   }
 
  // 6
  var greeting;
 var hour =13;
 

 if(hour < 18){

  greeting = "Good Day";
  } else {
    
   greeting = "Good Evening";
   }
   

  

 // 7

  var time = prompt('Enter Time in 24 Hours Format')

 if (time == '0100') {
    document.write('1 AM')
  } else if (time == '0200') {
    document.write('2 AM')
  } else if (time == '0300') {
    document.write('3 AM')
  } else if (time == '0400') {
    document.write('4 AM')
  } else if (time == '0500') {
    document.write('5 AM')
   } else if (time == '0600') {
    document.write('6 AM')
  } else if (time == '0700') {
    document.write('7 AM')
  } else if (time == '0800') {
    document.write('8 AM')
  } else if (time == '0900') {
    document.write('9 AM')
   } else if (time == '1000') {
    document.write('10 AM')
  } else if (time == '1100') {
    document.write('11 AM')
  } else if (time == '1200') {
    document.write('12 PM')
  } else if (time == '1300') {
    document.write('1 PM')
 } else if (time == '1400') {
    document.write('2 PM')
 } else if (time == '1500') {
     document.write('3 PM')
 } else if (time == '1600') {
    document.write('4 PM')
  } else if (time == '1700') {
    document.write('5 PM')
  } else if (time == '1800') {
    document.write('6 PM')
 } else if (time == '1900') {
    document.write('7 PM')
 } else if (time == '2000') {
    document.write('8 PM')
 } else if (time == '2100') {
    document.write('9 PM')
 } else if (time == '2200') {
    document.write('10 PM')
 } else if (time == '2300') {
    document.write('11 PM')
 } else if (time == '0000') {
    document.write('12 AM')
 }

 
  // CHAPTER14-16


  

 // 1

  var a =[];

 // 2

  var b newArray =[];

 // 3


 var c = ['a','b','c'];

 // 4

  
 var d = [11,22,33,44];


 // 5

  
 var e = [false,true,true]

 // 6

 var f = [false,'x',123,3.142,'abc']


 // 7
  var g = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

 document.write('<h1>Qualification</h1><h1>')
  for (let i = 0; i < g.length; i++) {
    document.write((i + 1) + ') ' + g[i] + '<br>')
  }
   document.write('</h1>')


 // 8



  var nameOfStudent = ['Michael', 'John', 'Tony'];
     var marksObtained = [320, 230, 480];
     totalMarks = 500;

     document.write('<h1>')
     for (let i = 0; i < nameOfStudent.length; i++) {
         document.write('Score of ' + nameOfStudent[i] + ' is ' + marksObtained[i] + '. Percentage: ' + Math.trunc((marksObtained[i] / totalMarks) * 100) + '%<br>')

     }
     document.write('</h1>')


 // 9

    var nameOfColor = [];
   document.write(nameOfColor + '<br>')
   
   var userOfColor = prompt('Enter Color Name')
   nameOfColor.unshift(userOfColor)
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter Color Name')
   nameOfColor.push(userOfColor)
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter Color Name')
   nameOfColor.unshift(userOfColor)
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter Color Name')
   nameOfColor.unshift(userOfColor)
   document.write(nameOfColor + '<br>')

   nameOfColor.shift()
   document.write(nameOfColor + '<br>')

   nameOfColor.pop()
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter Color Name')
   var indexNumber = prompt('Enter Index Number')
   nameOfColor.splice(Number(indexNumber), 0, userOfColor)
   document.write(nameOfColor + '<br>')

   var deleteFromStart = prompt('Start Delete color')
   var deleteFromEnd = prompt('End Delete color')
   nameOfColor.splice(Number(deleteFromStart), Number(deleteFromEnd))
   document.write(nameOfColor + '<br>')

   // 10


 var a =[320,230,480,120];
 document.write('Score  Of Student'+ a +'<br>')

 a.sort()
  document.write('Ordered Score Of Student'+ a)
 
 // 11

  var citiesOfPakistan = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
 
  var selectedCitiesOfPakistan = citiesOfPakistan.slice(2,4);
  document.write('Cities list:<br>' +citiesOfPakistan)
  
 document.write('<br><br>Selected cities list:<br>' + selectedCitiesOfPakistan)


 
 // 12


  var array = ['This','is','My','Cat'];
 
  document.write('<h1>Array:<br>' + array + '</h1>')
  document.write('<h1>String:<br>' + array.join(' ') + '</h1>')



  // 13
 
  var deviceOfComputer = ['KeyBoard','Mouse','Printer','Monitor'];

  document.write('<h2>Devices:'+deviceOfComputer+ '<br>')

  for (let i = 0; i < 4; i++) {
      document.write('<br>Out:<br>' + devicesOfComputer.shift())
  }
   document.write('</h2>')



 // 14

  var deviceOfComputer = ['KeyBoard','Mouse','Printer','Monitor'];
 
  document.write('<h2>Devices:'+deviceOfComputer+ '<br>')
  deviceOfComputer.reverse();
  for (let i = 0; i < 4; i++) {
      document.write('<br>Out:<br>' + deviceOfComputer.shift())
  }
   document.write('</h2>')


  // 15

  var manufacturesOfPhone = ['Apple','Samsung','Nokia','Sony','Haier','Motorola'];
 
  document.write('<select>')
  
  for (let i = 0; i < manufacturesOfPhone.length; i++) {
      document.write('<option>' + manufacturesOfPhone[i] + '</option>')
  }
   document.write('<select>')


 // CHAPTER 17-20


  //  1

 var a = [ [], [] ];


 // 2

  var b = [[0,1,2,3] ,[1,0,1,2], [2,1,0,1] ]
 
   document.write('<h1>')

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= 3; j++) {
        document.write(b[i][j] + ' ')
    }
    document.write('<br>')
  }
  document.write('</h1>')


 // 3

  document.write('<h1>')
  for(let i=0; i < 10; i++){

  document.write((i+1) + '<br>')
  }

  document.write('</h1>')

  
  // 4

 var table =prompt('Enter a Number to Show its Multiplication Table')
 var tableLength = prompt('Enter Length Multiplication Table')
 
 document.write('Multiplication Table of' + table + '<br>' )
 document.write('Length of' + tableLength + '<br><br>' )

 for (let i = 1; i <= tableLength; i++) {
    document.write(table + ' x ' + i + ' = ' + table * i + '<br>')
 }

  // 5

 var fruits =['Apple','Banana','Mango','Orange','Strwaberry'];

 document.write('<h1>')
 for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>')
 }
  document.write('</h1>')

  document.write('<h1>')
  for (let i = 0; i < fruits.length; i++) {
    document.write('Element at Index ' + i + ' is ' + fruits[i] + '<br>')
  }
   document.write('</h1>')


  
 // 6

   document.write('<h2>Counting: ')
   count = 15
  for (let i = 0; i < count - 1; i++) {
    document.write((i + 1) + ', ')
   }
  document.write('</h1>')

    document.write('<h1>Reverse Counting: ')
   let i;
   count = 15
   for (i = count; i > 0; i--) {
    if (i == 1) {
        break
    }
    document.write(i + ', ')
  }
   document.write('</h1>')

  document.write('<h1>Even: ')
  count = 15
   for (let i = 0; i < count - 1; i++) {
    if (i % 2 == 0) {
        document.write(i + ', ')
    }
  }
   document.write('</h2>')

  document.write('<h1>Odd: ')
   count = 15
   for (let i = 0; i < count - 1; i++) {
    if (i % 2 != 0) {
        document.write(i + ', ')
    }
  }
    document.write('</h2>')

   document.write('<h1>Series: ')
   count = 15
   for (let i = 0; i <= count - 1; i++) {
    if (i != 0) {
        document.write((i * 2) + 'k, ')
    }
  }
   document.write('</h2>')

 
 // 7
  var a = ['Cake', 'Apple Pie', 'Cookie', 'Chips', 'Patties'];
  var search = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am')

   if (a.indexOf(search) == -1) {
    document.write('We are sorry.' + search + ' is <b>not available</b> in our bakery')
   }   else {
    document.write(search + ' is <b>available</b> at index ' + a.indexOf(search) + ' in our Bakery')
  }


  // 8
  var a = [24, 53, 78, 91, 12];
  var largest = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > largest) {
        largest = a[i]
    }
   }
    document.write('<h1>Array Items:' + a + '<br>')
   document.write('The Largest Number is ' + largest + '</h1>')


// 9

  var a = [24,53,78,91,22];

  var smallest = a[0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < smallest) {
        smallest = a[i]
    } 
  }

  document.write('<h1>Array Items:' + a + '<br>')
 document.write('The Smallest Number is ' + smallest + '</h1>')
 

 // 10
  
  for(let i=1; i<=100; i++){
  if(i % 5 == 0)

  document.write(i+',')

  }




 // chapters21-25

  // 1
  
     var firstName = prompt("Enter First Name");
     var lastName =  prompt("Enter Last Name");
     var fullName = firstName + " " + lastName;
     document.write(fullName)

  // 2

   var mobileModel = prompt("Enter Favorite Mobile Phone Model");
   var lenghtOfMobileModel = mobileModel.length;
   document.write("Length Of String: " + lenghtOfMobileModel);



  // 3
  
    var word = "Pakistan";
    var findCharacter = word.indexOf("n"); 
    document.write(word + "<br>");
    document.write("Index of 'n': " + findCharacter);

   // 4

  var word = "Hello World";
  var findCharacter = word.lastIndexOf("l");
  document.write(word + "<br>");
  document.write("Index of 'l': " + findCharacter);
   

  // 5

   var word = "Pakistan";
   var findIndex = word.charAt(3);
   document.write(word + "<br>");
  document.write("Character at Index '3': " + findIndex);


  // 6

   var firstName = prompt("Enter First Name");
   var lastName = prompt("Enter Last Name");
   var fullName = firstName.concat(" ", lastName);
   document.write(fullName)

 // 7

   var city = "Hyderabad"
   var replaceCity = city.slice(0, 5).replace("Hyder", "Islam");
   var endCity = city.slice(5)
   document.write("City: " + city + "<br>");
   document.write("After Replacement: " + replaceCity + endCity);



   // 8

   var message = "shahzaib and Sami are Best Friends. They Play Cricket and Football together.";
   var replaceMessage = message.replace(/and/g, "&");
   document.write(replaceMessage);



  // 9

   var number = "1234";
   document.write("Value: " + number + "<br>");  
   document.write("Type: " + typeof(number) + "<br>")
   document.write("Value: " + number + "<br>");
   document.write("Type: " + typeof(parseInt(number)))

 
  // 10
  
   var things = "peanuts"
   var upperCase = things.toUpperCase();
   document.write("User Input: " + things + "<br>");
   document.write("Upper case: " + upperCase)

  
    // 11

  var things = "javascript";
  var firstLetterCapital = things.slice(0, 1).toUpperCase();
  var restOfLetter = things.slice(1);
  document.write(firstLetterCapital + restOfLetter)



    // 12

    var num = 35.36;
    var removeDot = num.toString().replace(".", "");
    document.write("Number: " + num + "<br>")
    document.write("Result: " + removeDot);


   // 13


  var userName = prompt("Enter User Name");

   for (let i = 0; i < userName.length; i++) {
    if (userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64) {
        alert("Please Enter a Valid User Name");
    }
  }



  // 14


  var items = ["cake", "apple pie", "cookie", "chips", "patties"];
  var check = prompt("Enter item to check");
  var checkSmall = check.toLowerCase();

  if (items.indexOf(checkSmall) != -1) {
   
   document.write(checkSmall + " is " + "<b>available</b>" + " at index " + items.indexOf(checkSmall) + " in our bakery");
  } else {
    
   document.write("We are sorry. " + checkSmall + " is " + "<b>not available</b> " + " in our bakery");
  }


  
    // 15

  var password = prompt("Enter a Password");

  if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    document.write("Password not Start Number <br>")
  }

  if (password.length < 6) {
    document.write("It Must at Least 6 Characters Long")
 }



  // 16

   var university = "University of Karachi";
   var array = university.split('')

   for (let i = 0; i < array.length; i++) {
  
    document.write(array[i] + "<br>")
  }



  // 17

  var country = "Pakistan";
  var lastIndex = country.charAt(country.length - 1)
  document.write("User Input: " + country + "<br>")
  document.write("Last character of input: " + lastIndex)


  // 18
 
   var sentance = "the quick brown fox jumps over the lazy dog";
   var count = sentance.match(/the/g || []).length;
  
  document.write("There are " + count + " occurrence(s) of Word 'the'")



  // chapter26-30

   // 1

   var number = 3.145214;
   document.write("Number: " + number + "<br>")
   document.write("Round off Value: " + Math.round(number) + "<br>")
   document.write("Floor Value: " + Math.floor(number) + "<br>")
   document.write("ceil Value: " + Math.ceil(number) + "<br>")


 // 2


   var number = -2.376;
   document.write("Number: " + number + "<br>")
   document.write("Round off Value: " + Math.round(number) + "<br>")
   document.write("Floor Value: " + Math.floor(number) + "<br>")
   document.write("Ceil Value: " + Math.ceil(number) + "<br>")

  
   // 3

  document.write("The Absolute Value of -4 is " + Math.abs(-4))

  // 4

  document.write("Random Dice Value: " + Math.floor(Math.random() * 7))


  // 5

   var toss = Math.floor(Math.random() * 3);

    document.write(toss + "<br>")
   if (toss == 1) {

    document.write("random coin value: Heads")
   } else if (toss == 2) {

      document.write("random coin value: Tails")
 }

 
  // 6

  document.write("Random Number Between 1 to 100: " + Math.floor((Math.random() * 100) + 1))

  
  // 7

  var num = prompt("Enter Your Weight in Kilogram")
  var convertIntoInt = parseFloat(num);
 
  document.write("The Weight of User is " + convertIntoInt + " kilograms")


   // 8
   
   var secretNumber = Math.floor((Math.random() * 10) + 1)
   var check = prompt("Enter Secret Number")

    if (secretNumber == check) {
    document.write("Congratulate The User")
  } else {
    document.write("Try Again! Number is " + secretNumber)
   }



 // chapters31-34

    // 1

   var date = new Date();
   document.write(date)


 
  // 2
  
  var date = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.write("Current month: " + months[date.getMonth()])


  // 3

  var date = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    alert("Today is " + days[date.getDay()].slice(0, 3))


  // 4

    var date = new Date();
   if (date.getDay() == 0 || date.getDay() == 6) {
  
     document.write("It’s Fun day")
  }


   // 5


   var date = new Date();
   if (date.getDay() < 16) {
  
    document.write("First fifteen days of the month")
  } else {

      document.write("Last days of the month")
  }


  // 6

   var date = new Date();
   
   document.write("Current Date: " + date + "<br>")
   document.write("Elapsed milliseconds since January 1, 1970: " + date.getTime() + "<br>")
   document.write("Elapsed minutes since January 1, 1970: " + date.getTime() / 60000)

  // 7

    var date = new Date();
   if (date.getHours() >= 0 && date.getHours() < 12) {
   
     document.write("Its AM")
   } else {

       document.write("Its PM")
   }


   // 8

   var laterDate = new Date("31/June/2020");
   document.write(laterDate)


   //9

    var startDate = new Date("June 18, 2015");
    var currentDate = new Date();
    var totalDays = currentDate - startDate;

   document.write(Math.round(totalDays / 1000 / 60 / 60 / 24) + " Days have Past Since 1st Ramadan, 2015")



 
    // 10

    var endDate = new Date("December 5, 2015");
    var startDate = new Date("January 1, 2015");
    var totalSeconds = endDate - startDate;
 
    document.write("On reference date " + endDate + "<br>")    
    document.write(totalSeconds / 1000 / 60 + " Seconds had Passed Since Beginning of 2015")


   
    // 11


   var currentDate = new Date();
   var hourAgo = new Date(currentDate.getTime() + 60 * 60 * 1000)

   document.write("Current Date: " + currentDate + "<br>")
   document.write("1 Hour Ago, it was : " + hourAgo + "<br>")

    // 12
    
    var currentDate = new Date();

   document.write("Current Date: " + currentDate + "<br>")
   currentDate.setFullYear(currentDate.getFullYear() - 100);
   document.write("100 years back it was : " + currentDate + "<br>")


  
     // 13

   var yourAge = prompt("Enter Your Age")
   var currentDate = new Date();

  currentDate.setFullYear(currentDate.getFullYear() - parseInt(yourAge))
  document.write("Your Age: " + yourAge + "<br>")
   document.write("Your birth year is " + currentDate.getFullYear())

  // 14

   var numberOfUnits = 410;
   var chargePerUnit = 16;
   var netAmount = numberOfUnits * chargePerUnit;
   var latePayment = netAmount + 350

     document.write("<h1>K-Electric Bill</h1><br>")
     document.write("Customer Name: <b>ABC Customer</b><br>")
     document.write("Month: <b>Feburary</b><br>")
     document.write("Number of units: <b>" + numberOfUnits + "</b><br>")
     document.write("Charges per unit: <b>" + chargePerUnit + "</b><br><br>")
     document.write("Net Amount Payable (with Due Date): <b>" + netAmount + "</b><br>")
     document.write("Late payment surcharge: <b>" + 350 + "</b><br>")
     document.write("Gross Amount Payable (after Due Date): <b>" + latePayment + "</b><br>")

   // chapter35-38


  // 1

    function currentDate() {
    var currentDate = new Date();
    return currentDate;
  }

  document.write(currentDate())


     // 2
 
   function fullName(firstName, lastName) {
    var fullName = firstName + " " + lastName
    return fullName;
 }

   document.write(fullName("Shahzaib", "Rasool Khan"))


      // 3

   function sum(num1, num2) {
    var total = parseInt(num1) + parseInt(num2);
    return total
  }

    num1 = prompt("Enter First Number")
    num2 = prompt("Enter Second Number")

   document.write(sum(num1, num2))

   // 4

    function calculator(num1, num2, operator) {
    var result;

    if (operator == "+") {
        result = parseInt(num1) + parseInt(num2);
        return result;
    } else if (operator == "-") {
        result = parseInt(num1) - parseInt(num2);
        return result;
    } else if (operator == "*") {
        result = parseInt(num1) * parseInt(num2);
        return result;
    } else if (operator == "/") {
        result = parseInt(num1) / parseInt(num2);
        return result;
    }
  }

      document.write(calculator(4, 5, "+") + "<br>")
      document.write(calculator(9, 5, "-") + "<br>")
      document.write(calculator(4, 5, "*") + "<br>")
      document.write(calculator(6, 5, "/") + "<br>")


    // 5

     function square(num) {
    return parseInt(num) * parseInt(num);
  }

   document.write(square(4))



    // 6


    function factorial(num) {
    if ((parseInt(num) === 0)) {
        return 1;
    } else {
        return parseInt(num) * factorial(parseInt(num) - 1);
    }
  }

  document.write(factorial(3))

    // 7

    function counting(first, second) {
    var result = 0;

    for (var i = first; i <= second; i++) {
        result += i;
    }

    return result;
  }

   document.write(counting(1, 10))


   // 8

   function calculateSquare(num) {
    return parseInt(num) * parseInt(num);
   }

   function calculateHypotenuse(b, p) {
    var h1;
    var b1 = calculateSquare(b);
    var p1 = calculateSquare(p);
    return h1 = Math.sqrt(b1 + p1);
  }

  document.write(calculateHypotenuse(5, 4))


  // 9

   function rectangle1(height, width) {
    return parseInt(height) * parseInt(width);
  }

   document.write(rectangle1(2, 4))

   function rectangle2(height = 3, width = 3) {
    return parseInt(height) * parseInt(width);
  }

   document.write(rectangle2())

   
   // 10

   function palindrome(sentance) {
    var lengthSentance = sentance.length;
    var mid = Math.floor(lengthSentance / 2);

    for (var i = 0; i < mid; i++) {
        if (sentance[i] !== sentance[lengthSentance - 1 - i]) {
            return false;
        }
    }
    return true;
  }

  document.write(palindrome("madam"))


    
    // 11

    function firstLetterCapital(sentance) {
    return sentance.toLowerCase().split(' ').map(function(letter) {
        return letter.replace(letter[0], letter[0].toUpperCase());
    }).join(' ');
  }

   document.write(firstLetterCapital("The Quick Brown Fox"));



  // 12
   
   function getLongestWord(sentance) {
    var s = sentance.split(" ");
    var longest = 0;
    var word;
    for (var i = 0; i < s.length - 1; i++) {
        if (longest < s[i].length) {
            longest = s[i].length;
            word = s[i];
        }
    }
    return word;
  }

  document.write(getLongestWord("Web Development Tutorial"))


  // 13
  
   function getCount(word, letter) {
    var letterCount = 0;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) == letter) {
            letterCount += 1;
        }
    }
    return letterCount;
  }

  document.write(getCount('JSResourceS.com', 'o'));



  // 14

    function calcCircumference(radius) {
    return 2 * Math.PI * parseInt(radius);
  }

  function calcArea(radius) {
    return Math.PI * parseInt(radius) * parseInt(radius);
  }

  document.write("The circumference is " + calcCircumference(3) + "<br>")
   document.write("The area is " + calcArea(3))





// chapters38-42

// 1


function calculatePower(a,b){


document.write(a + '^' + b + '=' + Math.pow(a, b));

}

 calculatePower(2,3);


 //2
var year = prompt("Enter an Year");

function checkLeapYear() {
    if ((parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0) || parseInt(year) % 400 === 0) {
        document.write('Leap Year');
    } else {
        document.write('Not Leap Year');
    }
}

checkLeapYear();



// 3

function s(a , b , c){

 return (a + b + c) / 2;

}

function area(a , b , c){


 var S = s(a,b,c);

 return S * (S-a)  * (S-b) * (S-c);

}

 document.write(area(2,2,2))






// 4


function receivesMarks(){

 var arr = [50,70,90];

 var totalMarks = 0;

 for(let i = 0; i< arr.length; i++){
 
  totalMarks += arr[i]
  }
 return totalMarks;

}

function average(){

 return 'Average:' +  receivesMarks() /3;

}

function percentage(){


 return 'Percentage:' +(receivesMarks()/ 300) * 100 + '%';

}


function mainFunction(){


 document.write(average() + '<br>');
 document.write(percenatge());

}


mainFunction()



// 5


var sentance = 'SHAHZAIB';

function findIndex(index){


 for(let i = 0; i < sentance.length; i++){
 if(sentance[i] == index){
   document.write(i)
   break;	
      }
    }
}

 
findIndex('A')


// 6


function deleteVowels(sentance){

  var removeVowels = '';

 for (let i = 0; i < sentance.length; i++) {
        if (sentance[i] != 'A' && sentance[i] != 'E' && sentance[i] != 'I' && sentance[i] != 'O' && sentance[i] != 'U' && sentance[i] != 'a' && sentance[i] != 'e' && sentance[i] != 'i' && sentance[i] != 'o' && sentance[i] != 'u') {
            removeVowels += sentance[i]

        }
    }
    document.write(removeVowels);
}


}


deleteVowels('the quick brown for jumps');



// 7


function findOccurrences(){


  var sentance ="Pleases read this application and give me gratuity";
    var characters = sentance.toLowerCase();
    var count = 0;"

 for(let i = 0; i < characters.length; i++){

  var firstChar = characters[i];
  var secondChar = characters[i+1];

  
if (vowelsCheck(firstChar) && vowelsCheck(secondChar)) {
            count++
            document.write(firstChar + secondChar + ' ')
        }
    }
    document.write('<br> Count: ' + count)
    return count; 


}



function vowelsCheck(firstChar) {
    switch (firstChar) {
        case 'a':
            return true;
        case 'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true;
        default:
            return false;
    }
}

findOccurrences();



 // 8



var distance = prompt('Enter Distance Between Two Cities');

function meters(){


 return parseInt(distance) * 1000;

}


function feet(){


 return parseInt(distance) * 3280.8;

}

function inches(){

 return parseInt(distance) * 100000;
}



document.write('Meters: ' + meters() + ' m');
document.write('<br> Foot: ' + feet() + ' ft');
document.write('<br> Inches: ' + inches() + ' in');
document.write('<br> Centimeters: ' + centimeters() + ' cm');


// 9

var timeWorked = prompt("Enter Time Of Employee Worked in Hours")

var overTime, overTimepay = 0;


if(timeWorked > 40){

 overTime = timeWorked - 40;
 overTimePay = overTimepay + (12 * overTime);

}

document.write('TOtal Over Time Of Employee' + overTimePay);


// 10


var withdrawer = prompt('Enter Amount')

var hundred = parseInt(withdrawer) /100;
var fifty = (parseInt(withdrawer) % 100) / 50;
var tens =((parseInt(withdrawer) % 100) %50) /10;



document.write(parseInt(hundred) + ' hundred notes ' + parseInt(fifty) + ' fifty notes ' + parseInt(tens) + ' tens notes');




// chapters43-48


// 1

// <a href="#" onclick="popup()">Click Here</a>


 function popup(){

 alert('Hi',How are you...)



//2

//<img onclick="popup()" width="200px" src="https://www.facebook.com/PakInternationalFurniture.1985/photos/pcb.164542901772787/164540031773074/?type=3&theater" alt="">
//<img onclick="popup()" width="200px" src="https://www.facebook.com/PakInternationalFurniture.1985/photos/pcb.164542901772787/164540025106408/?type=3&theater" alt="">
//<img onclick="popup()" width="200px" src="https://www.facebook.com/PakInternationalFurniture.1985/photos/pcb.164542901772787/164540635106347/?type=3&theater" alt="">
//<img onclick="popup()" width="200px" src="https://www.facebook.com/PakInternationalFurniture.1985/photos/pcb.164542901772787/164540635106347/?type=3&theater" alt="">


function popup(){


alert('thank you for clicking here..')

}



// 3




//<table border="1px">

//<tr>
     //<th>S#</th>
    // <th>Name</th>
  //   <th>Delete</th>
//</tr>

//<tr>

//    <td>1</td>
  //  <td>Shahzaib</td>
    //<td><button onclick="deleteStudent(this)">Delete</button></td>
</tr>


//<tr>

    //<td>1</td>
    //<td>Faiz</td>
  //  <td><button onclick="deleteStudent(this)">Delete</button></td>
//</tr>

 
//<tr>

    //<td>1</td>
    //<td>Asad</td>
  //  <td><button onclick="deleteStudent(this)">Delete</button></td>
//</tr>
 
//<tr>

    //<td>1</td>
    //<td>Junaid</td>
  //  <td><button onclick="deleteStudent(this)">Delete</button></td>
//</tr>

//</table>


function deleteStudent(button){

var row = button.parentNode.parentNode;
row.parentNode.removeChild(row);

}

// 4

// <img onmouseout="imageReChange()" onmouseover="imageChange()" width="200px" src="https://www.facebook.com/PakInternationalFurniture.1985/photos/pcb.164542901772787/164540031773074/?type=3&theater.png" alt="">


function imageChange() {
    document.getElementsByTagName('img')[0].src = 'https://www.facebook.com/PakInternationalFurniture.1985/photos/pcb.164542901772787/164540031773074/?type=3&theater.png';
}

function imageReChange() {
    document.getElementsByTagName('img')[0].src = 'https://www.facebook.com/PakInternationalFurniture.1985/photos/pcb.164542901772787/164540031773074/?type=3&theater.png';
}





// 5

//<label>0</label>
// <button onclick="increase()">Increase</button>
//<button onclick="decrease()">Decrease</button>

var count = 0;


function increase(){
   
  count++;
  document.getElementsByTagName('label')[0].innerText= count;

}

function decrease(){
   
  count--;
  document.getElementsByTagName('label')[0].innerText= count;

}


// Chapters 49-52

// 1



// <from action="" method="post">

 // <label for="">Name: </label>
 // <input type="text"><br>


 // <label for="">E-Mail: </label>
 // <input type="text"><br>

 <input onclick="showData()" type="button" value="submit">
  //</form>



function showData(){

 var name = document.getElementsByTageName('input')[0].value
 var email = document.getElementsByTagName('input')[1].value


 document.write('Name:' + name + '<br>');
 document.write('E-Mail:' +email)

}


// 2



// <p>Lorem, ipsum sit amet consectetur adipiscing elite. <a onlick="readMore()" href="#">ReadMore</p>


function readMore() {
    var sentance = ' Eos distinctio iure vero sunt cum nulla! Ad aut tempora vero cum ut repellendus debitis reiciendis modi omnis. Alias enim et suscipit.';
    document.getElementsByTagName('a')[0].innerHTML = '';
 	    document.getElementsByTagName('p')[0].innerText += sentance;
}


//3

 
function showData() {
    var id = document.getElementsByTagName('input')[0].value
    var name = document.getElementsByTagName('input')[1].value

    var table = document.createElement('table')
    var tableRow = document.createElement('tr')
    var tableDivision1 = document.createElement('td')
    var tableDivision2 = document.createElement('td')
    var editButton = document.createElement('button')
    var deleteButton = document.createElement('button')

    var idText = document.createTextNode(id)
    var nameText = document.createTextNode(name)

    document.body.appendChild(table)
    document.getElementsByTagName('table')[0].appendChild(tableRow)

    tableDivision1.appendChild(idText)
    tableDivision2.appendChild(nameText)

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.appendChild(tableDivision1)
    cell2.appendChild(tableDivision2)
    cell3.appendChild(editButton)
    cell4.appendChild(deleteButton)

    table.setAttribute('border', '1px')
    deleteButton.setAttribute('onClick', 'deleteRow(this)')
    editButton.setAttribute('onClick', 'editRow()')
    editButton.setAttribute('id', 'edit')
    deleteButton.setAttribute('id', 'delete')
    document.getElementById('edit').innerText = 'Edit'
    document.getElementById('delete').innerText = 'Delete'
}

function deleteRow(button) {
    var row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
}

function editRow() {
    document.getElementsByTagName('form')[1].style.display = 'block'

    var td1 = document.getElementsByTagName('td')[1].innerText
    var td2 = document.getElementsByTagName('td')[3].innerText

    document.getElementsByTagName('input')[3].value = td1
    document.getElementsByTagName('input')[4].value = td2

}

function editRow1() {
    var id = document.getElementsByTagName('input')[3].value
    var name = document.getElementsByTagName('input')[4].value

    document.getElementsByTagName('td')[1].innerText = id
    document.getElementsByTagName('td')[3].innerText = name

    document.getElementsByTagName('form')[1].style.display = 'none'
}

 // Chapters 52-57


//1 



// <div style="display: flex; overflow-x: scroll;"></div>


// <div id="modal" class="modal">
// <button onclick="zoomin()">Zoom In (+)</button>
// <button onclick="zoomout()">Zoom Out(-)</button>
// <p>Shahzaib</p>
// <span class="close" id="modal-close" onclick="onclosedImagModal()">&times; </span>
//   <img class="modal-content" id="modal-img">

</div>


var imagePath =[   
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/1.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/2.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/3.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/4.png",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/5.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/6.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/7.png",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/8.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/9.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/10.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/11.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/12.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/13.jpg",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/14.png",
    "../Chapter 1 to 67 (JS)/chapter52-57/images/others/15.jpg"
]



var altName =[
    'Salar de Uyuni, Bolivia <br> The world’s largest salt flat, it creates a mirror effect after the rain.',
    'Cinque Terre, Rio Maggiore, Italy <br>The “5 Lands” of colored homes perched on a cliff by the sea.',
    'Blue Lagoon, Iceland <br> Natural thermal hot springs.',
    'Maldives <br> This archipelago is the ultimate tropical island paradise.',
    'Glass Beach, California, USA <br> A beach buried in colorful sea glass.',
    'Santorini, Greece - <br> Iconic blue and white buildings on a cliff by the sea.',
    'Neuschwanstein Castle, Germany <br> The gorgeous former castle of the king.',
    'Aogashima Volcano, Japan <br> A small village living in a volcanic island.',
    'Venice, Italy <br> The city of colorful winding corridors and canals, and good food.',
    'Havasu Falls, Grand Canyon, Arizona, USA <br> In Grand Canyon National Park is this majestic waterfall.',
    'Swiss Alps, Switzerland <br> The epic and majestic mountain range.',
    'Iceland <br> A vast winter and a perfect place to watch the aurora.',
    'Positano, Almalfi Coast, Italy <br> Storybook town on a cliff by the sea.',
    'Rio de Janeiro, Brazil <br> The iconic statue overlooking the city',
    'Aansu lake, Pakistan <br> The name "Ansoo" comes from its tear-like shape (the Urdu word Ansoo means teardrop). The lake also resembles a human eye with a central ice island resembling the iris and a ridge resembling an eyebrow, which becomes even more prominent when ice melts on the "eyebrow" during the summer.'
]


 for(let i = 0; I < imagePath.length; i++){

  var img = document.createElement("img")
  img.src = imagePath[i];
  img.width = '50'
  img.heigth = '50'
  img.setAttribute('onclick','openImage(this.src,this.alt)')
  img.alt = altName[i]
  document.getElementsByTagName('div')[0].appendChild(img);

}

function openImage(src1, alt1){
 var modal = document.getElementById('modal');
 modal.classList.add('modal-open')
 modal.classList.remove('modal-close')
 modal.style.display = 'block'
 document.getElementById('modal-img').src =src1
 document.getElementById('modal-img').alt = alt1
 document.hetElementsByTagName('p')[0].innerHTML = alt1
}


function onClosedImagModal(){

 var modal = document.getElementById('modal');
 modal.classList.add('modal-close')
 modal.classList.remove('modal-open')
 setTimeout(() => { modal.style.display = "none";}, 550)


}

var font_Size = 10

function zoomIn() {
  font_size += 10;
  document.getElementsByTageName('p')[0].style.fontSize = font_size + 'px';
 }

function zoomout() {
 
 font_sizen -= 10;
 document.getElementaByTageName('p')[0].style.fontSize = font_size + 'p';
}



 // chapters 58-67

// 1


//<div> <h1>DOM</h1> <div id="from-content" class="content"><label for="first-name">First Name</label> <input type="text" id="first-name"/> <label for="last-name">Last Name</label> <input type="text" id="last-name"/> <label for="email">Email</label> <input type="text" id="emial"/> </div>  <div id="main-content" class="content"><p class="render">First Name : Alex</p> <p  class="render" id="lastName">Last Name: Bank</p> <p clas="render">Email: alexbank@example.com</p> <p class="render">Country : pakistan </p> <p class="render">contact : +92 300 1234567</p> </div></div> 

 var mainContent = document.getElementById('main-content').childNodes
 for(i = 0; i < mainContent.length; i++){

     document.write(mainContent[i].nodeName + "<br>")

}

 var renderClass = document.getElementsByClassName('render')

 for(let i=0 ; i < renderClass.length; i++){

    document.write(renderClass[i].innerHTMl)

}

 document.getElementById('first-name').value = "ABCD" 
 document.getElementById('last-name').value = "XYZ"
 document.getElementById('email').value = "ABCD@XYZ>.Com" 
  
  
// 2

var nodeType =document.getElementById('main-content')
document.write(nodeType.nodeType)

 var nodeType1 = document.getElementById('last-name')
 document.write(nodeType1.nodeType)

 var nodeType2 = document.getElementById('last-name').childNodes
 document.write(nodeType.nodeType)

 var a = document.getElementById('last-name').childNodes
 document.write(a.textContent ="SSS")

 var getChild = document.getElementById('main-content')
 document.write(getchild.firstchild.nodeName)
 document.write(getchild.lastchild.nodeName)

 var getSibling = document.getElementById('lastName')
 document.write(getSibling.nextSibling.nodeName)
 document.write(getSibling.previousSibling.nodeName)

 var getParentNodeAndNodeType = document.getElementById('email')
 document.write(getParentNodeAndNodeType.parentNode.nodeName)
 document.write(getParentNodeAndNodeType.nodeType)




