const EmployeeAPI = {
    employees: [
        { id: 101, empName: "Kavita Arora", designation: 'Manager' },
        { id: 102, empName: "Shilpa Shinde", designation: 'Associate Manager' },
        { id: 103, empName: "Ajay Sharma", designation: 'Executive' },
        { id: 104, empName: "Priya Mehata", designation: 'Team Lead' },
        { id: 105, empName: "Ganesh Desai", designation: 'Senior Manager' },
        { id: 106, empName: "Reena Sharma", designation: 'Senior Executive' },
    ],
    all: function () { return this.employees },
    /*get: function (id) {
       const isEmployee = p => p.id === id
        return this.employees.find(isEmployee)
    }*/
}

export default EmployeeAPI;
