<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 5; $i++) {
            DB::table("categories")->insert([
                    [
                        "name" => "テストカテゴリー". $i, 
                        "created_at" => now(), 
                        "updated_at" => now()
                    ],
                ]);
        }
    }
}
