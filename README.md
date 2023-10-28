# Keitalk(ブログ)
## 環境構築
- 参考：
  [Laravel 10 の開発環境をdockerで実現する方法](https://qiita.com/hitotch/items/869070c3a9f474a358ea)
- Docker起動
```
$ docker compose up -d
```
- Laravel10インストール
```.shell
# コンテナに入る
$ docker compose exec keitalk-api bash

# 以下コンテナ内で実行
# サブフォルダを作ってそこにLaravelをインストール
$ cd /src
$ mkdir keitalk_tmp
$ cd keitalk_tmp
$ composer create-project "laravel/laravel=10.*" . --prefer-dist

# 中身をプロジェクトフォルダに移動し、一時サブフォルダを削除。
$ cd /src
$ mv keitalk_tmp/* ./ # TODO: .env、.env.example、README.mdが上書きされる問題を解決する
$ mv keitalk_tmp/.* ./
$ rm keitalk_tmp -rf

# 依存のインストール
$ cd /src
$ composer install
$ npm install

# cmd + cでコンテナから抜ける
```

- 権限の設定
```
# 書き込み権限を設定
$ chmod -R guo+w storage

# storageのシンボリックリンクを設置
$ php artisan storage:link
```

- migration、seederを実行
```
// composer、npmインストール
$ composer install
$ npm install

// migration、seederを実行
php artisan migrate --seeder
```