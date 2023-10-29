<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    public function getArticlesList()
    {
        $articles = Article::with('category')->get();
        return $articles;
    }
}
