<?php

namespace App\Http\Controllers;

use App\Models\Transfer;
use Illuminate\Http\Request;

class TransferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        // dd(auth()->user());
        $transfer = Transfer::create([
           'user_id' => auth()->user()->id,
           'amount' => $request->get('amount'),
           'recipient' => $request->get('recipient'),
           'network_id' => $request->get('network'),
           'type' => $request->get('type'),
        ]);

        return response()->json(compact('transfer'), 200);

    }

        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeData(Request $request)
    {
        //
        $transfer = Transfer::create([
           'user_id' => auth()->user()->id,
           'amount' => $request->get('amount'),
           'recipient' => $request->get('recipient'),
           'type' => $request->get('type'),
           'bundle_id' => $request->get('bundle'),
           'network_id' => $request->get('network'),
        ]);

        return response()->json(compact('transfer'), 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function show(Transfer $transfer)
    {
        //
    }

       /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function getByAirtime()
    {
        //
        $userId = auth()->user()->id;
        $matchThis = ['user_id' => $userId, 'type' => 'AIRTIME'];
        $transactions = Transfer::where($matchThis)->with('network')->orderByDesc('id')->get();
        $message = 'Airtime Transactions';
        return response()->json(compact('transactions', 'message'), 200);
    }

      /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function getByData()
    {
        //
        $userId = auth()->user()->id;
        $matchThis = ['user_id' => $userId, 'type' => 'DATA'];
        $transactions = Transfer::where($matchThis)->with('network')
        ->with('bundle')->orderByDesc('id')->get();
        $message = 'Data Transactions';
        return response()->json(compact('transactions', 'message'), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function edit(Transfer $transfer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transfer $transfer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transfer $transfer)
    {
        //
    }
}
