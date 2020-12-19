<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\Network::create([
            'name' => 'MTN',
            'description' => 'Description for Mtn'
        ]);
        \App\Models\Network::create([
            'name' => 'GLO',
            'description' => 'Description for Glo'
        ]);
        \App\Models\Network::create([
            'name' => 'AIRTEL',
            'description' => 'Description for Airtel'
        ]);
        \App\Models\Network::create([
            'name' => '9MOBILE',
            'description' => 'Description for 9Mobile'
        ]);

        \App\Models\Bundle::factory(10)->create();
    }
}
