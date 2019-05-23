//カードの雛形
let cardTemplate = null;

$(function() {

    //card.htmlを読み込む
    $.get("../../card.html", function(temp) {
        cardTemplate = $(temp);
    })

    //検索ボタンがクリックされたら
    $("#search-btn").on("click", function() {
       
    //検索ワードを取得する
    let searchWord = $("#search-word").val();

    //ajaxを使って、iTunesに検索しに行く
        //データ通信をするところ
        $.ajax ( {
            url: "https://itunes.apple.com/search", //通信先URL
            type: "GET",  //GET送信(値を取得する時)、POST送信(アカウント等を登録する時)
            dataType: "jsonp", //検索結果の形式
            data: {
                term: searchWord,
                country: "jp",
            }

        //通信成功した時
        }).done( (data) => {
            //検索結果を消す
            $("#result").empty();

            //下記処理を繰り返し行う
            for (item of data.results) {
                //画像のパス
                let imgPath = item.artworkUrl100;

                // CDタイトル
                let collectionName = item.collectionName;
            
                // iTunesのリンク
                let collectionViewUrl = item.collectionViewUrl;
                
                // 変数にテンプレートのクローンを入れる
                let card = cardTemplate.clone();

                // クローンにタイトルなど設定
                card.find("img").attr("src", imgPath);
                card.find("h5").text(collectionName);
                card.find("a").attr("href", collectionViewUrl);
                
                // クローンを#resultに追加する
                $("#result").append(card);
            }

            //通信失敗した時
        }).fail( (error) => {
            console.log(error);
        })


    })
})