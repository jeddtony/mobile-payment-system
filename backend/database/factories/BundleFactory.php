<?php

namespace Database\Factories;

use App\Models\Bundle;
use App\Models\Network;
use Illuminate\Database\Eloquent\Factories\Factory;

class BundleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Bundle::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $units = ['hours', 'days'];
        return [
            //
            "name" => $this->faker->name,
            "network_id" => Network::all()->random()->id,
            "amount" => rand(50, 1000),
            "description" => $this->faker->sentence,
            "duration" => rand(1, 30),
            "unit" => $units[rand(0,1)],
        ];
    }
}
