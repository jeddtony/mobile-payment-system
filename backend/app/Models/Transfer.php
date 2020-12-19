<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'amount', 'recipient', 'type', 
    'network_id', 'bundle_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function network() {
        return $this->belongsTo(Network::class);
    }
    public function bundle() {
        return $this->belongsTo(Bundle::class);
    }
}
