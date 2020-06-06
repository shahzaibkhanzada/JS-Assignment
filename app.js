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
