<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BundleController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NetworkController;
use App\Http\Controllers\TransferController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post("/register", [AuthController::class, 'register']);

// Route::middleware(['validjwt'])->group(function() {
//     Route::get("me", [AuthController::class, 'me']);
// });

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

Route::middleware(['api'])->group(function() {
    Route::get("networks", [NetworkController::class, 'index']);
    Route::post("networks", [NetworkController::class, 'store']);
    Route::get("networks/name/{name}", [NetworkController::class, 'showNetworkByName']);
    Route::get("networks/{network}", [NetworkController::class, 'show']);
    Route::post("sendAirtime", [TransferController::class, 'store']);
    Route::post("sendData", [TransferController::class, 'storeData']);
    Route::get("transfers/airtime", [TransferController::class, 'getByAirtime']);
    Route::get("transfers/data", [TransferController::class, 'getByData']);
    Route::get("bundles", [BundleController::class, 'index']);
    Route::post("bundles", [BundleController::class, 'store']);
    Route::get("bundles/{bundle}", [BundleController::class, 'show']);
    Route::patch("bundles/{bundle}", [BundleController::class, 'update']);
    Route::get("users", [AdminController::class, 'getUsers']);
    Route::post("complaint", [ComplaintController::class, 'store']);
    Route::get("complaints", [ComplaintController::class, 'index']);
    Route::get("complaints/admin", [ComplaintController::class, 'adminIndex']);
    Route::get("complaints/markAsResolved/{complain}", [ComplaintController::class, 'markAsResolved']);
    Route::get("dashboard", [DashboardController::class, 'index'] );
    Route::get("dashboard/admin", [DashboardController::class, 'adminIndex'] );
    Route::get("users/{id}", [AdminController::class, 'getOneUser']);
});


