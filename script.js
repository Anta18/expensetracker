const expenseForm = document.getElementById('expenseForm');
const expensesList = document.getElementById('expensesList');
const totalAmount = document.getElementById('totalAmount');

expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const expenseItem = document.createElement('li');
    expenseItem.textContent = `Amount: $${amount.toFixed(2)}, Category: ${category}`;
    expensesList.appendChild(expenseItem);

    // Update total amount
    const previousTotal = parseFloat(totalAmount.textContent.replace('$', ''));
    totalAmount.textContent = `$${(previousTotal + amount).toFixed(2)}`;

    // Clear form fields
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';
});
