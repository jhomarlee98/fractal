<?php

namespace Database\Factories;

use App\Models\Test;
use Illuminate\Database\Eloquent\Factories\Factory;

class TestFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Test::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'lastname'=> $this->faker->lastName(),
            'email' =>$this->faker->unique()->email(),
            'phone'=>$this->faker->numberBetween($int1=899999999,$int2=999999999),
            'birth' =>\Carbon\Carbon::now()->format('Y-m-d')

        ];
    }
}
