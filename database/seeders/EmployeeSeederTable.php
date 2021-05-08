<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EmployeeSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Test::factory(1000)->create();

    }
}
