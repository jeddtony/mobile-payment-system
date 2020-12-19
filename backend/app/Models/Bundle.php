<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bundle extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'network_id', 'amount', 'description', 'duration', 'unit'];
    
    public function network() {
        return $this->belongsTo(Network::class);
    }
}
