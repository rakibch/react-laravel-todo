<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    public function run(): void
    {
        // Generate 20 fake tasks
        Task::factory()->count(20)->create();
    }
}
