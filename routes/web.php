<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubApplicationController;
use App\Http\Controllers\TrafficVisitController;

Route::get('/', function () {
    return view('home');
});

Route::post('/solicitudes', ClubApplicationController::class)->name('club-applications.store');
Route::post('/analytics/page-view', TrafficVisitController::class)->name('traffic-visits.store');
