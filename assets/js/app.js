$(function() {
    //検索ボタンがクリックされたら
    $("#search-btn").on("click", function() {

    //ajaxを使って、iTunesに検索しに行く
        //データ通信をするところ
        $.ajax ( {
            url: "https://itunes.apple.com/search", //通信先URL
            type: "GET",  //GET送信(値を取得する時)、POST送信(アカウント等を登録する時)
            dataType: "jsonp", //検索結果の形式
            data: {
                term: "AAA",
                country: "jp",
            }

        //通信成功した時
        }).done( (data) => {
            console.log(data);
        //通信失敗した時
        }).fail( (error) => {
            console.log(error);
        })


    })
})