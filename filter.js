
  // Your JavaScript filter code here

function handleFilterChange(event) {
// Get the selected option and column ID
const selectedOption = event.target.value;
const columnId = event.target.id.replace('filter-', '');

// Loop through all table rows
const tableRows = document.querySelectorAll('tr');
for (let i = 1; i < tableRows.length; i++) { // Skip header row
  const tableCell = tableRows[i].querySelector(`td[atlas-side="${columnId}"]`);
  const cellText = tableCell.textContent.trim().toLowerCase();

// Show/hide row based on filter criteria
if (selectedOption === "All" || cellText.includes(selectedOption.toLowerCase())) {
  tableRows[i].style.display = "";
} else {
  tableRows[i].style.display = "none";
    }
  }
}

// event listener
const filterSelects = document.querySelectorAll('.atlas-side');
filterSelects.forEach(select => {
  select.addEventListener('change', handleFilterChange);
});
