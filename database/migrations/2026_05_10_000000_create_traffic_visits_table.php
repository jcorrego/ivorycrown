<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('traffic_visits', function (Blueprint $table) {
            $table->id();
            $table->string('path', 500);
            $table->string('referrer', 1000)->nullable();
            $table->string('user_agent', 1000)->nullable();
            $table->string('ip_hash', 64);
            $table->string('screen', 50)->nullable();
            $table->timestamps();

            $table->index('created_at');
            $table->index('path');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('traffic_visits');
    }
};
