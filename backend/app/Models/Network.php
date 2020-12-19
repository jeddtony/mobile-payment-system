<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Network extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];
    
    public function bundles() {
        return $this->hasMany(Bundle::class);
    }
}
