<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            DB::table("articles")->insert([
                    [
                        "category_id" => rand(1, 2), 
                        "title" => "テスト記事".$i, 
                        "content" => "テスト記事です。テスト記事です。テスト記事です。".$i, 
                        "created_at" => now(), 
                        "updated_at" => now()
                    ],
                ]);
        }
    }
}
