<?php

namespace App\Http\Controllers;

use App\Models\TrafficVisit;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TrafficVisitController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $data = $request->validate([
            'path' => ['nullable', 'string', 'max:500'],
            'referrer' => ['nullable', 'string', 'max:1000'],
            'screen' => ['nullable', 'string', 'max:50'],
        ]);

        TrafficVisit::create([
            'path' => $data['path'] ?? '/',
            'referrer' => $data['referrer'] ?? null,
            'user_agent' => Str::limit((string) $request->userAgent(), 1000, ''),
            'ip_hash' => hash_hmac('sha256', (string) $request->ip(), config('app.key')),
            'screen' => $data['screen'] ?? null,
        ]);

        return response()->json(['tracked' => true]);
    }
}
