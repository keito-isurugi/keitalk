<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            DB::table("article_images")->insert([
                    [
                        "article_id" => $i, 
                        "image_path" => "images/test1.jpg", 
                        "created_at" => now(), 
                        "updated_at" => now()
                    ],
                ]);
        }
    }
}
