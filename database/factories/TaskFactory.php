<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
             'title'       => $this->faker->sentence(4), // random short sentence
            'description' => $this->faker->paragraph(),
            'completed'   => $this->faker->boolean(30), // ~30% tasks completed
            'due_date'    => $this->faker->optional()->dateTimeBetween('now', '+1 month'),
        ];
    }
}
