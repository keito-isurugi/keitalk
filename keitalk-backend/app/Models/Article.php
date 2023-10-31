<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\ArticleImage;

class Article extends Model
{
    use HasFactory;

    protected $table = "articles";

    protected $fillable = [
        "category_id",
        "title",
        "content",
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function article_images()
    {
        return $this->hasMany(ArticleImage::class);
    }
}
