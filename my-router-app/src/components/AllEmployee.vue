<template>
    <div>
        <table border="1" align="center">
            <tr>
               <!-- <td>Employee Id</td>-->
                <td>Employee Name</td>
               <!-- <td>Employee Designation</td>-->
            </tr>
            <tr v-for="(employee,index) in employees"  :key="index">
               <!-- <td>{{employee.id}}</td>-->
                <td><router-link :to="{name:'Emp',params:{eid:employee.id,ename:employee.empName,edesig:employee.designation}}">{{employee.empName}}</router-link></td>
               <!-- <td>{{employee.designation}}</td>-->
            </tr>
        </table>
    </div>
</template>
<script>
import EmployeeAPI from '../EmployeeAPI'
export default {
    name: 'AllEmployee',
    data() {
        return {
            employees: EmployeeAPI.all()
       }
    }
}
</script>
<style>

</style>


