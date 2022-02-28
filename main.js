
$(document).ready(function() {
    var currentValue;
    var firstValue = 0;
    var MDAS;
  
    // All the buttons
    $('#1').click(function () { addValueToInput('1'); });
    $('#2').click(function () { addValueToInput('2'); });
    $('#3').click(function () { addValueToInput('3'); });
    $('#4').click(function () { addValueToInput('4'); });
    $('#5').click(function () { addValueToInput('5'); });
    $('#6').click(function () { addValueToInput('6'); });
    $('#7').click(function () { addValueToInput('7'); });
    $('#8').click(function () { addValueToInput('8'); });
    $('#9').click(function () { addValueToInput('9'); });
    $('#0').click(function () { addValueToInput('0'); });
    $('#decimal').click(function () { addValueToInput('.'); });
  
    // Show the numbers in the input
    function addValueToInput(value) {
      if (currentValue === undefined) {
        currentValue = value;
        $('#whereInputGoes').val(currentValue);
      }
      else if (currentValue !== undefined) {
        currentValue += value;
        $('#whereInputGoes').val(currentValue);
      }
    }
  
    // Add the numbers
    $('#add').click(function () {
      firstValue = Number(currentValue);
      currentValue = undefined;
      MDAS = '+';
      $('#whereInputGoes').val('+');
    });
  
    // Divide the numbers
    $('#divide').click(function () {
      firstValue = Number(currentValue);
      currentValue = undefined;
      MDAS = '/';
      $('#WhereInputGoes').val('/');
    });
  
    // Multiply the numbers
    $('#multiply').click(function () {
      firstValue = Number(currentValue);
      currentValue = undefined;
      MDAS = '*';
      $('#WhereInputGoes').val('*');
    });
  
    // Minus the numbers
    $('#minus').click(function () {
      firstValue = Number(currentValue);
      currentValue = undefined;
      MDAS = '-';
      $('#WhereInputGoes').val('-');
    });
  
    // Answer
    $('#equal').click(function () {
      console.log('Clicked Equal');
      if ($('#whereInputGoes').val() && MDAS === undefined) {
        console.log('There is a value already so it should do nothing!');
      }
      else if (!$('#whereInputGoes').val()) {
        console.log('If there are no value in the input then it should do nothing!');
        currentValue = undefined;
      }
      else if (MDAS === '+') {
        currentValue = firstValue + Number(currentValue);
      }
      else if (MDAS === '-') {
        currentValue = firstValue - Number(currentValue);
      }
      else if (MDAS === '*') {
        currentValue = firstValue * Number(currentValue);
      }
      else if (MDAS === '/') {
        currentValue = firstValue / Number(currentValue);
      }
  
      $('#whereInputGoes').val(currentValue);
      // MDAS needs to be undefined so when clicking #equal with an answer should do nothing
      MDAS = undefined;
    });
  
    // clear field
    $('#clear').click(function () {
      $('#whereInputGoes').val('');
      currentValue = undefined;
    });
  });