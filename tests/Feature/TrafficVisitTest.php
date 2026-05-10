<?php

namespace Tests\Feature;

use App\Models\TrafficVisit;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TrafficVisitTest extends TestCase
{
    use RefreshDatabase;

    public function test_page_view_tracking_records_a_visit(): void
    {
        $response = $this
            ->withHeader('User-Agent', 'Feature Test Browser')
            ->postJson('/analytics/page-view', [
                'path' => '/?utm_source=discord',
                'referrer' => 'https://example.com',
                'screen' => '1440x900',
            ]);

        $response
            ->assertOk()
            ->assertJson(['tracked' => true]);

        $visit = TrafficVisit::firstOrFail();

        $this->assertSame('/?utm_source=discord', $visit->path);
        $this->assertSame('https://example.com', $visit->referrer);
        $this->assertSame('Feature Test Browser', $visit->user_agent);
        $this->assertSame('1440x900', $visit->screen);
        $this->assertNotEmpty($visit->ip_hash);
    }
}
