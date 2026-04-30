<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubApplicationController;

Route::get('/', function () {
    return view('home');
});

Route::post('/solicitudes', ClubApplicationController::class)->name('club-applications.store');
