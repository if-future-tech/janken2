function play() {
    // ボタン要素を取得
    const $btn1 = $("#Lbtn");
    const $btn2 = $("#Cbtn");
    const $btn3 = $("#Rbtn");

    // 結果表示要素を取得
    const $result = $("#result");

    // 勝負回数と勝利回数の初期化
    let total = 0 ;
    let safe = 0 ;
    let out = 0 ;

    // ボタンクリック時の処理
    $btn1.on('click', () => {
        const bot = Math.floor(Math.random() * 3); // ランダム関数でBOTの手を決定
        const sum = bot; // 合計を計算
        if (sum === 0) {
            $result.text("アウト！");
            out ++;
            value = $("#progressbar").progressbar("value");
            if (value >= 10) {
                value -= 10;
                $("#progressbar").progressbar("value", value);
            } else {
                $("#select").html('<button id="Lbtn" disabled>左方</button><button id="Cbtn" disabled>中間</button><button id="Rbtn" disabled>右方</button>');
            }
        } else {
            $result.text("セーフ！");
            safe ++;
        }
        total ++;
        let O_rate = out / total * 100;
        let S_rate = safe / total * 100;
        let $O_result = $("#O_rate");
        let $S_result = $("#S_rate");
        $O_result.text(`着弾率：${O_rate.toFixed(2)}%`);//小数点以下2桁まで
        $S_result.text(`回避率：${S_rate.toFixed(2)}%`);
        if (total >= 10) {
            $("#enemy").html('');
            $("#msg").html('<p class="blink">敵は恐れをなして逃げていった！</p>');
            $("#select").html('<button id="Lbtn" disabled>左方</button><button id="Cbtn" disabled>中間</button><button id="Rbtn" disabled>右方</button>');
        }
    });

    $btn2.on('click', () => {
        const bot = Math.floor(Math.random() * 3);
        const sum = bot + 1;
        if (sum === 2) {
            $result.text("アウト！");
            out ++;
            value = $("#progressbar").progressbar("value");
            if (value >= 10) {
                value -= 10;
                $("#progressbar").progressbar("value", value);
            } else {
                $("#select").html('<button id="Lbtn" disabled>左方</button><button id="Cbtn" disabled>中間</button><button id="Rbtn" disabled>右方</button>');
            }
        } else {
            $result.text("セーフ！");
            safe ++;
        }
        total ++;
        let O_rate = out / total * 100;
        let S_rate = safe / total * 100;
        let $O_result = $("#O_rate");
        let $S_result = $("#S_rate");
        $O_result.text(`着弾率：${O_rate.toFixed(2)}%`);//小数点以下2桁まで
        $S_result.text(`回避率：${S_rate.toFixed(2)}%`);
        if (total >= 10) {
            $("#enemy").html('');
            $("#msg").html('<p class="blink">敵は恐れをなして逃げていった！</p>');
            $("#select").html('<button id="Lbtn" disabled>左方</button><button id="Cbtn" disabled>中間</button><button id="Rbtn" disabled>右方</button>');
        }
    });

    $btn3.on('click', () => {
        const bot = Math.floor(Math.random() * 3);
        const sum = bot + 2;
        if (sum === 4) {
            $result.text("アウト！");
            out ++;
            value = $("#progressbar").progressbar("value");
            if (value >= 10) {
                value -= 10;
                $("#progressbar").progressbar("value", value);
            } else {
                $("#select").html('<button id="Lbtn" disabled>左方</button><button id="Cbtn" disabled>中間</button><button id="Rbtn" disabled>右方</button>');
            }
        } else {
            $result.text("セーフ！");
            safe ++;
        }
        total ++;
        let O_rate = out / total * 100;
        let S_rate = safe / total * 100;
        let $O_result = $("#O_rate");
        let $S_result = $("#S_rate");
        $O_result.text(`着弾率：${O_rate.toFixed(2)}%`);//小数点以下2桁まで
        $S_result.text(`回避率：${S_rate.toFixed(2)}%`);

        if (total >= 10) {
            $("#enemy").html('');
            $("#msg").html('<p class="blink">敵は立ち去った！</p>');
            $("#select").html('<button id="Lbtn" disabled>左方</button><button id="Cbtn" disabled>中間</button><button id="Rbtn" disabled>右方</button>');
        }
    });
}
