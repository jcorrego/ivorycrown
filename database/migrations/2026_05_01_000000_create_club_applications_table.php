<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('club_applications', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('personaje');
            $table->unsignedTinyInteger('nivel')->nullable();
            $table->unsignedTinyInteger('edad')->nullable();
            $table->string('discord');
            $table->json('horario')->nullable();
            $table->string('raza')->default('Cualquiera');
            $table->text('motivo');
            $table->json('intereses')->nullable();
            $table->boolean('consentimiento');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('club_applications');
    }
};
