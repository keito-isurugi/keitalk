#!/bin/bash

# テストを実行するディレクトリのパスを指定
TEST_DIRECTORY="tests/Unit"

# サブディレクトリ内のテストを再帰的に検索
for TEST_FILE in $(find "$TEST_DIRECTORY" -type f -name '*.php'); do
    echo "Running $TEST_FILE"
    php artisan test "$TEST_FILE"
done
