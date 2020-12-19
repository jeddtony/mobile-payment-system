<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Exception;

class EnsureTokenIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        dd('here');
        try {
            // dd(auth()->user());
            // $user = auth()->userOrFail();
            // dd(auth());
            dd('an nawo');
            return $next($request);
        } catch (Exception $e) {
            // do something
            dd('here');
            return response()->json(['Invalid Authentication'], 401);
        }
        //   if(auth()->user()){
            
        //     return $next($request);
        // }

        // dd('here');
        // }
        // catch(Exception $exception){
        //     return response()->json(['Invalid Authentication'], 401);
        // }
        }
       
}
