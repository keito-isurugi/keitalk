<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\ArticleImage;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class ArticleController extends Controller
{
    public function getArticlesList()
    {
        $articles = Article::with(['category', 'article_images'])->get();
        return $articles;
    }

    public function fileUplodad(Request $request)
    {
        if($request->hasFile('file')){
            $path = $request->file('file')->store('public/blog/article_images');
            ArticleImage::create([
                'article_id' => 1, // TODO: リクエストから受け取るようにする
                'image_path' => 'blog/article_images/' . basename($path),
            ]);
        }
        return ["path" => 'blog/article_images/' . basename($path)];
    }
}
