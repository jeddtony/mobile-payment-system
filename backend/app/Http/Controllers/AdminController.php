<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use App\Models\Transfer;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //

    public function getUsers () {
        $users = User::all();
        return response()->json(compact('users'), 200);
    }

    public function getOneUser ($id) {
        $user = User::find($id);
        $userComplain = Complaint::where('user_id', $id)->count();
        $userAirtimeTransfer = Transfer::where('user_id', $id)->count();
        $userDataTransfer = Transfer::where('user_id', $id)->count();
        return response()->json(compact('user', 'userComplain', 'userAirtimeTransfer',
    'userDataTransfer'), 200);
    }
}
