<?php

namespace App\Http\Controllers;

use App\Models\Bundle;
use Illuminate\Http\Request;

class BundleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $bundles = Bundle::with('network')->get();
        return response()->json(compact('bundles'), 200);
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
        $bundle = Bundle::create([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'amount' => $request->get('amount'),
            'duration' => $request->get('duration'),
            'network_id' => $request->get('network'),
            'unit' => $request->get('unit')
        ]);

        $bundle = $bundle->save();
        $message = 'Bundle Created';
        return response()->json(compact('bundle', 'message'),200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bundle  $bundle
     * @return \Illuminate\Http\Response
     */
    public function show($bundle)
    {
        //
        $bundle = Bundle::find($bundle);
        return response()->json(compact('bundle'), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bundle  $bundle
     * @return \Illuminate\Http\Response
     */
    public function edit(Bundle $bundle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bundle  $bundle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $bundle)
    {
        //
        $bundle = Bundle::find($bundle);
        $bundle->name = $request->get('name');
        $bundle->description = $request->get('description');
        $bundle->amount = $request->get('amount');
        $bundle->duration = $request->get('duration');
        $bundle->unit = $request->get('unit');
        $bundle = $bundle->save();
        $data  = [
            'bundle' => $bundle,
        ];
        $message = 'Bundle created';
        return response()->json(compact('bundle', 'message'), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bundle  $bundle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bundle $bundle)
    {
        //
    }
}
