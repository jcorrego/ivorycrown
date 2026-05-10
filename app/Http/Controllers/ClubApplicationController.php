<?php

namespace App\Http\Controllers;

use App\Mail\ClubApplicationReceived;
use App\Models\ClubApplication;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;

class ClubApplicationController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $horarios = ['Mañanas', 'Tardes', 'Noches', 'Fines de semana'];
        $razas = [
            'Cualquiera',
            'Dutch Warmblood',
            'Andaluz',
            'Friesian',
            'Pura Raza Inglesa',
            'Akhal-Teké',
            'Árabe',
            'Mustang',
            'Lusitano',
            'Lipizzano',
            'Paso Fino',
            'Jorvik Wild Horse',
            'Pony de Jorvik',
            'Caballo de la Estrella del Norte',
            'Quarter Horse Americano',
            'Paint Horse Americano',
            'Appaloosa',
            'Percherón',
            'Shire',
        ];

        $data = $request->validate([
            'nombre' => ['required', 'string', 'max:120'],
            'personaje' => ['required', 'string', 'max:120'],
            'nivel' => ['nullable', 'integer', 'min:1', 'max:30'],
            'edad' => ['nullable', 'integer', 'min:1', 'max:99'],
            'discord' => ['required', 'string', 'max:120'],
            'horario' => ['required', 'array', 'min:1'],
            'horario.*' => ['string', Rule::in($horarios)],
            'raza' => ['required', Rule::in($razas)],
            'motivo' => ['required', 'string', 'min:20', 'max:2000'],
            'intereses' => ['nullable', 'array'],
            'intereses.*' => ['string', Rule::in([
                'Carreras',
                'Paseos & rol',
                'Fotografía',
                'Entrenamiento',
                'Misiones en grupo',
                'Eventos sociales',
            ])],
            'consentimiento' => ['accepted'],
        ]);

        $application = ClubApplication::create([
            ...$data,
            'intereses' => $data['intereses'] ?? [],
            'consentimiento' => true,
        ]);

        Mail::to(config('mail.club_applications_to'))->send(new ClubApplicationReceived($application));

        return response()->json([
            'message' => 'Solicitud recibida.',
            'application_id' => $application->id,
        ], 201);
    }
}
