<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrafficVisit extends Model
{
    protected $fillable = [
        'path',
        'referrer',
        'user_agent',
        'ip_hash',
        'screen',
    ];
}
