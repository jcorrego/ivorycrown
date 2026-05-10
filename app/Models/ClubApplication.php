<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClubApplication extends Model
{
    /** @use HasFactory<\Database\Factories\ClubApplicationFactory> */
    use HasFactory;

    protected $fillable = [
        'nombre',
        'personaje',
        'nivel',
        'edad',
        'discord',
        'horario',
        'raza',
        'motivo',
        'intereses',
        'consentimiento',
    ];

    protected function casts(): array
    {
        return [
            'horario' => 'array',
            'intereses' => 'array',
            'consentimiento' => 'boolean',
        ];
    }
}
