let num = 5;

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numが3または5の倍数の場合： “3と5の倍数です”
if (num % 5 == 0 && num % 3 == 0) {
    console.log('3と5の倍数です')
}


// 変数numが3の倍数の場合： “3の倍数です”
else if (num % 3 == 0) {
    console.log('3の倍数です')
}

// 変数numが5の倍数の場合： “5の倍数です”
else if (num % 5 == 0) {
    console.log('5の倍数です')
}

// それ以外の場合： “変数numの値を出力”
else {
    console.log(num);
}