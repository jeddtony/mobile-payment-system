<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use App\Models\Transfer;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function index() {
        $userId = auth()->user()->id;
        $matchThis = ['user_id' => $userId, 'type'=> 'AIRTIME'];
        $airtimeTransfers = Transfer::where($matchThis)->get();
        $numberOfAirtimeTransfers = count($airtimeTransfers);
        // dd($numberOfAirtimeTransfers);
        $matchThis = ['user_id'=> $userId, 'type' => 'DATA'];
        $dataTransfers = Transfer::where($matchThis)->get();
        $numberOfDataTransfers = count($dataTransfers);

        $numberOfComplaints = Complaint::where('user_id', $userId)->count();
        // dd($numberOfComplaints);
        return response()->json(compact('numberOfAirtimeTransfers', 'numberOfDataTransfers',
        'numberOfComplaints'));
    }

        //
        public function adminIndex() {
            // $userId = auth()->user()->id;
            $matchThis = ['type'=> 'AIRTIME'];
            $airtimeTransfers = Transfer::where($matchThis)->get();
            $numberOfAirtimeTransfers = count($airtimeTransfers);
            // dd($numberOfAirtimeTransfers);
            $matchThis = ['type' => 'DATA'];
            $dataTransfers = Transfer::where($matchThis)->count();
            
            
            $unresolvedComplains = Complaint::where('is_resolved', 0)->count();
            $resolvedComplaints = Complaint::where('is_resolved', 1)->count();
            $numberOfComplaints = Complaint::all()->count();
            // dd($numberOfComplaints);
            return response()->json(compact('numberOfAirtimeTransfers', 'dataTransfers',
            'numberOfComplaints', 'unresolvedComplains', 'resolvedComplaints'));
        }
}
