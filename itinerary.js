$(document).ready(function() {
  const storedInputValue = localStorage.getItem('budgetAmount'); //stored budget will be shown and displayed when user refresh page
  if(storedInputValue) {
    $('#budget-track').text('Budget:' + '$' + storedInputValue);
  }
  $('#save-budget-amount').on('click', function(event){ //user input budget amount and saved in local storage
   event.preventDefault();
   const newBudgetAmount = $('#budgetdollar-amount').val();
   $('#budget-track').text('Budget:' + '$' + storedInputValue) //the area or element to display the budget input
 
  localStorage.setItem('budgetAmount', newBudgetAmount);
  //close modal
  $('#edit-budget-modal').modal('hide');
  console.log(newBudgetAmount);
  
});
   $('#save-budget-amount').on('click', function(event){
   event.preventDefault();
  var inputBudgetEl = $('#budgetdollar-amount').val();
  localStorage.setItem('budgetAmount', inputBudgetEl);
  //close modal
  $('#edit-budget-modal').modal('hide');
  console.log(inputBudgetEl);
 
    const storedInputValue = localStorage.getItem('budgetAmount');
    if (storedInputValue) {
        // Do something with the stored input value
        $('#budget-track').text('Budget: ' + '$' + storedInputValue);
        let budgetDisplay = $('#budget-track').val();
        localStorage.setItem('budgetShown', budgetDisplay);
        
    };
   

   });
    $('#save-expense-details').on('click', function(event){
    event.preventDefault();
    let selectedExpense = $('#expense-list-name').val();
    let noSelection = $('#select-result');
    let userInputAmount = $('#budget-dollar-amount').val();
    let noEnterAmount = $('#expense-amount-result');
    

    console.log(selectedExpense);
    console.log(userInputAmount);
   
    if (selectedExpense === "") {
      noSelection.show();
    } else {
      noSelection.hide(); // Hide the selection error message
    }

    if (userInputAmount === "") {
      noEnterAmount.show();
    } else {
      noEnterAmount.hide(); // Hide the amount error message
    }

    if (selectedExpense !== "" && userInputAmount !== "") {
  
const e = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];
e.push({selectedExpense, userInputAmount})
localStorage.setItem('expenses', JSON.stringify(e));

let totalExpense = 0;

// let totalExpense = $('#expense-total').text();
// 
console.log(totalExpense);
for(let x = 0; x < e.length; x++) {
  console.log(e[x].selectedExpense, e[x].userInputAmount);
totalExpense += parseInt(e[x].userInputAmount)
console.log('total', totalExpense)
$('#expense-total').text(totalExpense);
let expenseWrapper = $('<div>');
let expenseName = $('<div>')
expenseName.text(e[x].selectedExpense);
let expenseValue = $('<div>');
expenseValue.text(e[x].userInputAmount);
expenseWrapper.append(expenseName).append(expenseValue);
expenseWrapper.addClass('expense-item');
$('#add-expense-js').append(expenseWrapper);


}
    localStorage.setItem('selectedExpense', selectedExpense);
    localStorage.setItem('userInputAmount', userInputAmount);
    
    const expenseContainer = $('#add-expense-js');
    for (let i = 0; i < 1; i++) {
      const newExpenseDiv = $('<div>' , {
        class: 'expense-item',
        text: 'Expense ' + (i + 1) + ': ' + selectedExpense + ' -$' + userInputAmount //css fixed
      });
      expenseContainer.append(newExpenseDiv);
  
      $('#add-expense-details').modal('hide');
    }
    
  }
}); 
 

  });






var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling; //next sibling is the p-tag, which will hold the expense list
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function copyText() {
      
  // Copy text into clipboard 
  //copy invite link 
  navigator.clipboard.writeText
      ("https://github.com/Saragar710/Travel-Itinerary");
}