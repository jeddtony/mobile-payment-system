<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $userId = auth()->user()->id;
        // dd($userId);
        $complaints = Complaint::where('user_id', $userId)->orderByDesc('id')->get();
        $message = 'All complaints';
        return response()->json(compact('complaints', 'message'), 200);
    }

       /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function markAsResolved($complain)
    {
        //
        $complaint = Complaint::find($complain);
        $complaint->is_resolved = 1;
        $complaint->save();

        $message = 'Complaint resolved';
        return response()->json(compact('complaint', 'message'), 200);
    }

        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function adminIndex()
    {
        //
        // dd($userId);
        $complaints = Complaint::with('user')->orderByDesc('id')->get();
        $message = 'All complaints';
        return response()->json(compact('complaints', 'message'), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $userId = auth()->user()->id;
        $complaint = Complaint::create([
            "title" => $request->get('title'),
            "description" => $request->get('description'),
            "user_id" => $userId
        ]);
        $complaint->save();
        $message = 'Complaint sent';
        return response()->json(compact('message', 'complaint'), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\Response
     */
    public function show(Complaint $complaint)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\Response
     */
    public function edit(Complaint $complaint)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Complaint $complaint)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\Response
     */
    public function destroy(Complaint $complaint)
    {
        //
    }
}
