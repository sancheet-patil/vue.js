<template>
    <div>
        <table border="1">
            <tr>
                <th>EmpName</th>
            </tr>
            <tr v-for="(employee) in allEmployees" :key="employee.id">
                <!--nested routing  -->
                <td><router-link :to="{name:'Emp',params:{id:employee.id,ename:employee.empName,design:employee.designation}}">{{employee.empName}}
                    </router-link></td>
            </tr>
        </table>
        <router-view/>
    </div>
</template>

<script>
import EmployeeAPI from '../EmployeeAPI.js'
export default {
    name:'AllEmployee',
    data(){
        return {
            allEmployees : EmployeeAPI.all()
        }   
    }
    
}
</script>
