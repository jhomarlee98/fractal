<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function list(){
        $data =Employee::get();

        $response['data']=$data;
        $response['succes']=true;

        return $response;

    }
    public function create(Request $request){
        try {
            $insert['name']=$request['name'];
            $insert['lastname']=$request['lastname'];
            $insert['email']=$request['email'];
            $insert['phone']=$request['phone'];
            $insert['birth']=$request['birth'];

            Employee::insert($insert);

            $response['message']='Save successful';
            $response['success']=true;

        }catch (\Exception $e){
            $response['message']=$e->getMessage();
            $response[success]=false;
        }

    }

}
