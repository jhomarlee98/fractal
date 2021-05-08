import React, { useEffect,useState } from 'react';
import employeeServices from "../../services/employee";
function Form(){

    const [name,setName]=useState(null);
    const [lastname,setLastName]=useState(null);
    const [email,setEmail]=useState(null);
    const [phone,setPhone]=useState(null);
    const [birth,setBirth]=useState(null);

    const saveEmployee=async ()=>{
        const data={
            name, lastname, email,phone,birth
        }
        const res= await employeeServices.save(data);
        if (res.success){
            alert(res.message)
        }else {
            alert(res.message)
        }
    }
    return(
        <form >
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="Name">Name {name} </label>
                    <input type="name" class="form-control" placeholder="Name"
                           onChange={(event)=>setName(event.target.value) }/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last Name </label>
                    <input type="lastName" className="form-control" placeholder="Last name"
                           onChange={(event) =>setLastName(event.target.value) }/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder="you@example.com"
                           onChange={(event) =>setEmail(event.target.value) }/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="number">Phone Number</label>
                    <input type="phone" className="form-control" placeholder="999999999"
                           onChange={(event) =>setPhone(event.target.value) }/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="address">BirthDay {birth}</label>
                    <input type="date" class="form-control"
                           onChange={(event) =>setBirth(event.target.value) }/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <button class="btn btn-primary btn-block" type="submit" onClick={()=>saveEmployee()}>Save</button>
                </div>
            </div>
        </form>
      )
    }

    export default Form;
