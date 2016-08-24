// $(document).ready(function(){
//   $('.buttons').on('click', 'span', function(event){
//
//     console.log($(this.span.text()));
//   })
// })

$(document).ready(function(){
  var num1;
  var num2;
  var operator;
  var answer;

  $('.digit').on('click', function(){
    var clickedNum = ($(this).text());
    $('#screen').append(clickedNum);
  })

  $('.operator').on('click', function(){
    if(num1){
      num2 = parseInt($('#screen').text(), 10);
      //console.log(num2);
    }
    else{
      num1 = parseInt($('#screen').text(), 10);
      $('#screen').text()
      //console.log(num1);
    }

    if(num1 && num2 && operator){
      if(operator === '+'){
        answer = (num1 + num2)
      }else if(operator === '-'){
        answer = (num1 - num2)
      }else if(operator === 'x'){
        answer = (num1 * num2)
      }else if(operator === '÷'){
        answer = (num1 / num2)
      }
      $('#screen').text(answer);
    }
    operator = $(this).text();

  })



})
