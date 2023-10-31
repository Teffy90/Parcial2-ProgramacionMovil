<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServicioController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* Route::get('/servicios', [ServicioController::class, 'index']);
Route::put("servicios/{id}", [ServicioController::class, 'update']);
Route::post("servicios", [ServicioController::class, 'store']);
Route::get("servicios/{id}", [ServicioController::class, 'edit']);
Route::delete("servicios/{id}", [ServicioController::class, 'destroy']); */

// Ruta para obtener servicios
Route::apiResource('/servicios', ServicioController::class);
