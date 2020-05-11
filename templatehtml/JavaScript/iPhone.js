function numberClick(num){
    var aaa = new Number(num);
}
//全体の処理,格納
class Main{
    #number = [];
    #arithmetic = [];

    //配列に数字を追加
    setNumber(num){
        this.#number.push(num);
    }
    
    //配列に演算子を追加
    setArithmetic(arith){
        this.#arithmetic.push(arith);
    }
}

//表示窓の値取得
class window{
    constructor(){
        var resultData = document.getElementsById( "result" );
        this.result = resultData.value;
    }
    //表示されている値を返す
    getResult(){
        return this.result;
    }

    //値を設定
    setResult(num){
        document.getElementsById( "result" ) = num;
    }
}

//数字キー処理
class Number{
    constructor(keynum){
        this.keyNumber = keynum.value;
    }
    numberProcess(){
        window = new window();
        windowNum = window.getResult;

        //押下されたのが0以外の数字か判定
        if(this.keyNumber!=="0"){
            
        }
        //表示されているのが0か判定
        if(windowNum == "0"　|| windowNum == "-0" || windowNum == "0."){
            window.setResult(this.keyNumber);
        }
    }
}

//桁数判定処理
class Digit{
    constructor(){
        this.windowHeight = window.innerHeight;
        this.windowWidth = windo.innerWidth;
    }
    DigitProcess(){
        var window = new window();
        var result = window.getResult();
        
        //画面サイズの判定
        if(this.windowHeight > this.windowWidth){
            //縦画面時の桁数判定
            if(result< 9){
                return true;
            }else{
                return false;
            }
        }else{
            //横画面時の桁数判定
            if(result < 16){
                return true;
            }else{
                return false;
            }
        }
    }
}

//演算子キー処理
class Arithmetic{

}

//±キー処理
class PlusMinus{

}

//%キー処理
class Percent{

}

//AC・Cキー処理
class Clear{

}

//計算処理
class Calculation{

}