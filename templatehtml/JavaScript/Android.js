
//押下処理
class Button_Push{
    constructor(TextBox_Value,TextBox_Last,Result_Value){
        this.TextBox_Value = TextBox_Value;
        this.TextBox_Last = TextBox_Last;
    }

    //TextBox内値読み込み
    TextBox_Value_Read(){
        var TextBox_Value;
        TextBox_Value = document.getElementById("TextBox.Value");
        return TextBox_Value;
    }
    //TextBoxがnullか
    TextBox_Null_Check(){
        var Null_TF;
        if(TextBoxValue_Read() != null){
            Null_TF = true;
        }
        else{
            Null_TF = false;
        }
        return Null_TF;
    }
    //TextBox最後尾の値を取得
    TextBox_Slice(){
        var TextBox_Last;
        TextBox_Last = TextBoxValue_Read();
        TextBox_Last = TextBox_Last.slice(-1);
        return TextBox_Last;
    }
    //最後尾文字の種類判定
    TextBox_Last_Check(){
        var Last_Type;
        if(TextBox_Slice() == "."){
            Last_type = dec;
        }else if(TextBox_Slice() == number){
            Last_Type = Num;
        }else if(TextBox_Slice() == string){
            Last_Type = Str;
        }
        return Last_Type;
    }
    //TextBox内の値が0か
    TextBox_Zero_Check(){
        var Zero_TF;
        if(TextBoxValue_Read() == 0){
            Zero_TF = true;
        }
        else{
            Zero_TF = false;
        }
        return Zero_TF;
    }

    //小数点より前に値が存在しない場合0.に修正
    DecimalPoint_Fix(){
        if(TextBox_Value_Read() == "."){
            TextBox_Value = "0.";
            return TextBox_Value;
        }
    }

}

class Number_Click{

}
//演算子を入力した際の処理
class Operator_Push{

    /* 入力値読み込み */

    /*　TextBox内値読み込み */

    /* TextBoxがnullの場合の処理 */
    /* nullの場合の処理ここまで↑ */

    /* TextBox最後尾の値を取得 */

    /* 最後尾が数値の場合の処理 */
    /* TextBox内の値が0のみか */
    /* 数値の場合の処理ここまで↑ */

    /* 最後尾が演算子の場合の処理 */
    /* 負数として扱うか */
    /* 演算子の場合の処理ここまで↑ */

    /* 最後尾が小数点の場合の処理 */
    /* 小数点より前に値が存在しない場合0.に修正 */
    /* 演算子の場合の処理ここまで↑ */
}

class Calculation extends Button_Push{
    constructor(TextBox_Value,TextBox_Last,Result_Value){
        this.TextBox_Value = TextBox_Value;
        this.TextBox_Last = TextBox_Last;
        this.Result_Value = Result_Value;
    }
    calc(){
        //TextBox内値読み込み
        TextBox_Value_Read();
        Check = TextBox_Null_Check();
        //TextBoxがnull以外で演算処理移行
        if(this.Check != true){
            switch(TextBox_Last_Check()){
                //TextBox最後尾が数値の場合演算処理
                case '\d': this.Result_Value = eval(TextBox_Value_Read());
                return this.Result_Value;
                break;
                //TextBox最後尾が小数点の場合
                case '.' : 
                break;
                //TextBox最後尾が文字列の場合
                case 'string' :
                break;
            }
        }
    }
        //TextBox最後尾の値を取得
    
        /* 最後尾が数値の場合の処理 */
    
    
        /* 数値の場合の処理ここまで↑ */

        /* 最後尾が演算子の場合の処理 */
        /* 演算子の場合の処理ここまで↑ */

        /* 最後尾が小数点の場合の処理 */
        /* 演算子の場合の処理ここまで↑ */
    
}


/* 小数点より前に値が存在しない場合0.に修正 */
function DecimalPoint_Fix(){

}

/* 値が一つしか存在しないかチェック */
function Number_OneDegit_Check(){

}

/* 入力する値を負数として扱うかチェック */
function Number_Negative_Check(){

}

/* TextBoxの値が0のみかチェック */
function TextBox_Zero_Check(){

}

/* 長押しでClearを行う */
function Delete_Clear(){

}