<?php

namespace Tests\Feature;

use App\Mail\ClubApplicationReceived;
use App\Models\ClubApplication;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ClubApplicationTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_renders_the_ivory_crown_app(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee('Ivory Crown · Club Ecuestre · Lightning Star')
            ->assertSee('id="root"', false);
    }

    public function test_application_form_is_saved_and_emailed(): void
    {
        Mail::fake();

        $response = $this->postJson('/solicitudes', [
            'nombre' => 'Clara',
            'personaje' => 'Rowan Whitemoor',
            'nivel' => 24,
            'edad' => 19,
            'discord' => 'clara#0000',
            'horario' => 'Tardes',
            'raza' => 'Andaluz',
            'motivo' => 'Me gustaría unirme porque busco un club tranquilo y bonito para participar en eventos.',
            'intereses' => ['Fotografía', 'Eventos sociales'],
            'consentimiento' => true,
        ]);

        $response
            ->assertCreated()
            ->assertJson(['message' => 'Solicitud recibida.']);

        $this->assertDatabaseHas('club_applications', [
            'nombre' => 'Clara',
            'personaje' => 'Rowan Whitemoor',
            'discord' => 'clara#0000',
            'consentimiento' => true,
        ]);

        $application = ClubApplication::firstOrFail();
        $this->assertSame(['Fotografía', 'Eventos sociales'], $application->intereses);

        Mail::assertSent(ClubApplicationReceived::class, function (ClubApplicationReceived $mail) use ($application) {
            return $mail->application->is($application);
        });
    }

    public function test_application_form_validates_required_fields(): void
    {
        Mail::fake();

        $this->postJson('/solicitudes', [
            'nombre' => '',
            'personaje' => '',
            'discord' => '',
            'motivo' => 'Muy corto',
            'consentimiento' => false,
        ])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['nombre', 'personaje', 'discord', 'motivo', 'consentimiento']);

        $this->assertDatabaseCount('club_applications', 0);
        Mail::assertNothingSent();
    }
}
