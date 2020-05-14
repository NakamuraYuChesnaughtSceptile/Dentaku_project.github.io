
//Button押下処理
class Button_Push{
    constructor(TextBox_Value,TextBox_Last){
        this.TextBox_Value = TextBox_Value;
        this.TextBox_Last = TextBox_Last;
        this.Result_Value = Result_Value;
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
        //小数点
        if(TextBox_Slice() == "."){
            Last_type = Dec;
        //数値
        }else if(TextBox_Slice() == number){
            Last_Type = Num;
        //演算子
        }else if(TextBox_Slice() == string){
            Last_Type = Str;
        }
        return Last_Type;
    }
    //TextBox内の値が0のみか
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
//数値を入力した場合の処理
class Number_Click extends Button_Push{
    constructor(){
        super();
    }
    Num_Push(){
        TextBox_Value_Read();
        if(TextBox_Null_Check()){
            //nullなので入力数値追加
            super.TextBox_Value += document.getElementsByName('Number');
        }else{
            switch(TextBox_Last_Check()){
                //TextBox最後尾が数値
                case 'Num' : Switch_Number_Push_N();
                continue;
                //TextBox最後尾が演算子
                case 'Ope' : Switch_Number_Push_O();
                continue;
                //TextBox最後尾が小数点
                case 'Dec' : Switch_Number_Push_D();
                continue;
            }
            return super.TextBox_Value;
        }
    }
    Switch_Number_Push_N(){
        if(TextBox_Zero_Check()){
                super.TextBox_Value = document.getElementsByName('Number');
        }else{
                super.TextBox_Value = TextBox_Value_Read() += document.getElementsByName('Number');
        }
    }
    Switch_Number_Push_O(){
        super.TextBox_Value = TextBox_Value_Read() += document.getElementsByName('Number');
    }
    Switch_Number_Push_D(){
        DecimalPoint_Fix();
        super.TextBox_Value = TextBox_Value_Read() += document.getElementsByName('Number');
    }
}
function Number_Function(number){
    var result = number;
    var Num = new Number_Click(TextBox_Value,TextBox_Last);
    document.getElementById('TextBox_Value') = Num.Num_Push();
}

//演算子を入力した場合の処理
class Operator_Push extends Button_Push{
    constructor(){
        super();
    }
    Ope_Push(){
        //TextBox取得
        TextBox_Value_Read();
        //負数処理
        Number_Negative_Check();
        if(TextBox_Null_Check() != false){
            switch(TextBox_Last_Check()){
                case 'Num' : Switch_Operator_Push_N();
                continue;
                case 'Dec' : Switch_Operator_Push_D();
                continue;
                case 'Ope' : Switch_Operator_Push_O();
                continue;
            }
            return super.TextBox_Value;
        }   
    }
    /* 入力する値を負数として扱うかチェック */
    Number_Negative_Check(){
        if(document.getElementsByName('oprator') == "-" && TextBox_Null_Check()){
            super.TextBox_Value = "-";
        }
    }
    Switch_Operator_Push_N(){
        super.TextBox_Value = super.TextBox_Value += document.getElementsByName('operator');
    }
    Switch_Operator_Push_O(){
        if(TextBox_Value_Read() != "-"){
            super.TextBox_Value = super.TextBox_Value.slice(0,-1) += document.getElementsByName('operator');
        }
    }
    Switch_Operator_Push_D(){
        DecimalPoint_Fix();
        super.TextBox_Value = "不正な式です";
    }
    
}

function Operator_Function(){
    var Operator_Push = new Operator_Push(TextBox_Value,TextBox_Last);
    document.getElementById('TextBox_Value') = Operator_Push.Ope_Push();
}

class Calculation extends Button_Push{
    constructor(){
        super();
    }
    calc(){
        //TextBox内値読み込み
        TextBox_Value_Read();
        Check = TextBox_Null_Check();
        //TextBoxがnull以外で演算処理移行
        if(this.Check != true){
            switch(TextBox_Last_Check()){
                //TextBox最後尾が数値の場合演算処理
                case 'Num': super.Result_Value = eval(TextBox_Value_Read());
                continue;
                //TextBox最後尾が小数点の場合
                case 'Dec' : 
                continue;
                //TextBox最後尾が文字列の場合
                case 'Str' :
                continue;
            }
            return super.Result_Value;
        }
    }
}

function Equal_Function(){
    var Calculation = new Calculation(TextBox_Value,TextBox_Last,Result_Value);
    document.getElementById('TextBox_Value') = Calculation.calc();
}
function Point_Click(){
    document.getElementById('TextBox_Value') += ".";
}