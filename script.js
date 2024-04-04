function addEmployee() {
    // Get form input values
    var employeeId = document.getElementById("employeeId").value;
    var employeeName = document.getElementById("employeeName").value;
    var department = document.getElementById("department").value;
    var position = document.getElementById("position").value;
    var basicSalary = parseFloat(document.getElementById("basicSalary").value);
    var allowances = parseFloat(document.getElementById("allowances").value);
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
    var hireDate = document.getElementById("hireDate").value;

    // Perform form validation
    if (!validateForm()) {
        return;
    }

    // Calculate gross salary
    var grossSalary = basicSalary + allowances;

    // Calculate deductions (assuming 10% of gross salary)
    var deductions = grossSalary * 0.1;

    // Calculate net salary
    var netSalary = grossSalary - deductions;

    // Calculate tax (assuming 20% of net salary)
    var tax = netSalary * 0.2;

    // Display salary slip
    var salaryDetails = document.getElementById("salaryDetails");
    salaryDetails.innerHTML = `
        <p><strong>Gross Salary:</strong> ${grossSalary}</p>
        <p><strong>Deductions:</strong> ${deductions}</p>
        <p><strong>Net Salary:</strong> ${netSalary}</p>
        <p><strong>Tax:</strong> ${tax}</p>
    `;

    // Display salary slip
    var salarySlip = document.getElementById("salarySlip");
    salarySlip.classList.remove("hidden");
}

function validateForm() {
    var inputs = document.querySelectorAll("input[required], select[required]");
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            alert("Please fill in all required fields.");
            return false;
        }
    }
    return true;
}
