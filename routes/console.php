<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use App\Models\TrafficVisit;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('traffic:summary', function () {
    if (! Schema::hasTable('traffic_visits')) {
        $this->warn('No traffic table found yet. Run php artisan migrate first.');
        return 0;
    }

    $this->info('Traffic summary');
    $this->line('Total visits: '.TrafficVisit::count());
    $this->line('Last 24 hours: '.TrafficVisit::where('created_at', '>=', now()->subDay())->count());
    $this->line('Last 7 days: '.TrafficVisit::where('created_at', '>=', now()->subDays(7))->count());

    $this->newLine();
    $this->line('Top paths');
    $this->table(
        ['Path', 'Visits'],
        TrafficVisit::query()
            ->select('path', DB::raw('count(*) as visits'))
            ->groupBy('path')
            ->orderByDesc('visits')
            ->limit(10)
            ->get()
            ->map(fn (TrafficVisit $visit) => [$visit->path, $visit->visits])
    );

    $this->newLine();
    $this->line('Top referrers');
    $this->table(
        ['Referrer', 'Visits'],
        TrafficVisit::query()
            ->select('referrer', DB::raw('count(*) as visits'))
            ->whereNotNull('referrer')
            ->where('referrer', '!=', '')
            ->groupBy('referrer')
            ->orderByDesc('visits')
            ->limit(10)
            ->get()
            ->map(fn (TrafficVisit $visit) => [$visit->referrer, $visit->visits])
    );
})->purpose('Show page traffic totals and top sources');
