<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\ToolController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\ScheduleDayController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\ScheduleController;
use App\Http\Controllers\Api\MotherController;

use App\Http\Controllers\Api\LogController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/reminder', [DashboardController::class, 'index']);
    Route::put('/reminder/postpone/{id}', [DashboardController::class, 'postpone']);

    Route::get('schedule-days-in-month-count/{year}', [ScheduleController::class, 'getDaysInMonthCount']);
    Route::get('schedule-days-in-year-count/{start}/{end}', [ScheduleController::class, 'getDaysInYearCount']);

    Route::get('/schedule-month/{year}/{month}', [ScheduleController::class, 'getYearMonthDays']);
    Route::get('/schedule-day/{id}', [ScheduleController::class, 'getYearMonthDay']);
    
    Route::post('/schedule-add-month', [ScheduleController::class, 'addMonth']);
    Route::put('/schedule-update-day/{id}', [ScheduleController::class, 'updateDay']);
    Route::delete('/schedule-delete-month/{year}/{month}', [ScheduleController::class, 'deleteMonth']);

    Route::get('/mother-vizits', [MotherController::class, 'getMotherVizits']);
    Route::delete('/mother-vizit-delete/{id}', [MotherController::class, 'deleteMotherVizit']);

    Route::apiResources([
        'users' => UserController::class,
        'events' => EventController::class,
        'tasks'  => TaskController::class,
        'tools' => ToolController::class,
    ]);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::get('/log', [LogController::class, 'index']);

// mother's routes
Route::get('mother-schedule-days-in-month-count/{year}', [MotherController::class, 'getDaysInMonthCount']);
Route::get('mother-schedule-days-in-year-count/{start}/{end}', [MotherController::class, 'getDaysInYearCount']);

Route::get('/mother-schedule-month/{year}/{month}', [MotherController::class, 'getYearMonthDays']);
Route::get('/mother-schedule-day/{id}', [MotherController::class, 'getYearMonthDay']);

Route::get('/debug-test', function() {
    return '<h1>Debug is OK</h1>';
});