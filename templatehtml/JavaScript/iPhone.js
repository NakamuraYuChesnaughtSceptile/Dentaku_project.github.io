var previousButton; //前に押下したボタンを保存するグローバル変数
var numArray = [];
var arithArray = [];

//  ↓呼び出す処理↓
function numberClick(num){
    var number = new Number(num);
    var digit = new Digit();

    //画面に対応した桁数は超えていないか
    if(digit.DigitProcess()){
        number.NumberProcess();
    }
    
    previousButton　= "number";
}
function clearClick(){
    var clear = new Clear();
    clear.ClearProcess();

    previousButton　= "clear";
}
function pmClick(){
    var pmProcess = new PlusMinus();
    pmProcess.plusMinusProcess();

    previousButton　= "plusminus";
}
function percentClick(){
    var percent = new Percent();    
    percent.PercentProcess();

    previousButton　= "percent";
}
function arithClick(arith){
    $('.arithmetic').removeClass('active');
    $(this).toggleClass('active');

    var arithmetic = new Arithmetic(arith);
    arithmetic.arithmeticProcess();
    previousButton　= "arithmetic";
}
function equalClick(){
    var equal = new Calculation();
    equal.calculationProcess();

    previousButton　= "equal";
}
//  ↑呼び出す処理ここまで↑

//全体の処理,格納
class Main{
    number = [];
    arithmetic = [];

    //配列に数字を追加
    setNumber(num){
        numArray.push(num);
        console.log(numArray[0]);
    }
    
    //配列に演算子を追加
    setArithmetic(arith){
        arithArray.push(arith);
        console.log(arithArray[0]);
    }

    getNumberLast(){
        return numArray[numArray.length - 1];
    }

    getArithmeticLast(){
        console.log(arithArray[(arithArray).length - 1]);
        console.log(arithArray.length - 1);
        return arithArray[arithArray.length - 1];
    }
}

//数字キー処理
class Number{
    constructor(keynum){
        this.keyNumber = keynum.value;
    }
    NumberProcess(){
        console.log(previousButton);
        var window = new displayWindow();
        var result = window.getResult();
        var clear = new Clear();

        //押下されたのが0以外の数字か判定
        if(this.keyNumber!=="0"){
            clear.setC();
        }

        if(this.keyNumber == "."){
            window.setResult(`${result}.`);
        }else if(result == "-0"){
            window.setResult(`-${this.keyNumber}`);

                 //↓表示されているのが0または、前に押されたのが演算子か=か％かを判定↓
        }else if(result == "0"　||previousButton == "percent"||previousButton=="equal"||previousButton=="arithmetic"){
            window.setResult(this.keyNumber);
        }else{
            window.setResult(result+this.keyNumber);
        }
    }
}

//桁数判定処理
class Digit{
    constructor(){
        this.windowHeight = window.innerHeight;//画面の縦を取得
        this.windowWidth = window.innerWidth;//画面の横を取得
    }
    DigitProcess(){
        var window = new displayWindow();
        var result = window.getResult();
        var resultMolding = result.replace(/[^0-9]/g, '');//－や小数点を排除し、数字のみに置き換える
        
        //画面サイズの判定
        if(this.windowHeight > this.windowWidth){
            //縦画面時の桁数判定
            if(resultMolding.length < 9){
                return true;
            }else{
                return false;
            }
        }else{
            //横画面時の桁数判定
            if(resultMolding.length < 16){
                return true;
            }else{
                return false;
            }
        }
    }
}

//演算子キー処理
class Arithmetic{
    constructor(keyArith){
        this.keyArithmetic = keyArith;
    }
    arithmeticProcess(){
        var window = new displayWindow();
        var main = new Main();
        var calculation = new Calculation();

        var result = window.getResult();
        var lastArith = main.getArithmeticLast();

        main.setNumber(result);

        if(this.keyArithmetic == "*"||this.keyArithmetic == "/"){
            if(lastArith == "*" || lastArith == "/"){
                calculation.calculationProcess();
            }
        }else if((numArray).length >= 2&&previousButton !== "equal"){
            console.log("koko");
            calculation.calculationProcess();
        }
        //配列にセット
        main.setArithmetic(this.keyArithmetic);
    }
}

//±キー処理
class PlusMinus{
    plusMinusProcess(){
        var window = new displayWindow();
        var result = window.getResult();

        if(result.indexOf("-") !== -1){
            window.setResult(result.replace("-",""));
        }else{
            window.setResult(`-${result}`);
        }
    }
}

//%キー処理
class Percent{
    PercentProcess(){
        var window = new displayWindow();
        var result = window.getResult();

        var percentNum = result/100;
        window.setResult(percentNum);
    }
}

//AC・Cキー処理
class Clear{
    constructor(){
        var clearData = document.getElementById( "clear" );
        this.clear = clearData.value;
    }
    ClearProcess(){
        //ボタンの字の判定
        if(this.clear == "AC"){
            numArray = [];
            arithArray = [];
            result.value = 0;//表示窓の初期化
        }else{
            result.value = 0;
            this.setAC();
        }
    }
    setC(){
        $('#clear').val('C');
    }
    setAC(){
        $('#clear').val('AC');
    }
}

//計算処理
class Calculation{
    formula = "";
    answer = "";
    calculationProcess(){
        var main = new Main();
        var window = new displayWindow();
        var lastnum = window.getResult();

        if(previousButton == "equal"){
            this.formula = this.formula + main.getArithmeticLast() + main.getNumberLast();
            answer = eval(this.formula);
            window.setResult(this.answer);
        }else{
            console.log("aaaaaaaaa")
            for(var i=0;i < arithArray.length;i++){
                this.formula = this.formula + numArray[i] + arithArray[i];
                console.log("a");
            }
            this.formula = this.formula + lastnum;
            this.answer = eval(this.formula);
            window.setResult(this.answer);
        }
    }
    formulaClear(){
        formula = "";
    }
    answerClear(){
        answer = "";
    }
}



//表示窓の値取得
class displayWindow{
    constructor(){
        this.displayResult = result.value;
    }
    //表示されている値を返す
    getResult(){
        return this.displayResult;
    }

    //値を設定
    setResult(num){
        result.value = num;
    }
}
