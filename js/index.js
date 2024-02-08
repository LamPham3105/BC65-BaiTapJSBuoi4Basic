/*--------BÀI TẬP 1--------*/
/*
Bước 1: Xác định đầu vào
- Nhập vào 3 số (numberOne, numberTwo, numberThree)
- Danh sách chứa 3 số đã sắp xếp

Bước 2: Xác định bước xử lý
- Lưu ba số vào 1 mảng số
- Lặp và sắp xếp 3 số

Bước 3: In kết quả ra màn hình
*/

document.getElementById("hanldeSwap").onclick = function() {
    var arrNumber = [];
    var numberOne = document.getElementById("numberOne").value;
    arrNumber.push(numberOne);
    var numberTwo = document.getElementById("numberTwo").value;
    arrNumber.push(numberTwo);
    var numberThree = document.getElementById("numberThree").value;
    arrNumber.push(numberThree);

    var result = "", bgResult;

    for (let i = 0; i < arrNumber.length; i++){
        let number = parseFloat(arrNumber[i]);
        if (isNaN(number))
        {
            result = "Vui lòng nhập đủ 3 số";
            bgResult = "red";
            break;
        } 
    }

    var isEnoughtNumber = result == "";
    if (isEnoughtNumber)
    {
        arrNumber.sort((a, b) => a - b);

        for (let i = 0; i < arrNumber.length; i++){
            result += arrNumber[i] + " ";
        }

        bgResult = "#35a22c";
    }

    document.getElementById("swapResult").innerHTML = result;
    document.getElementById("swapResult").style.cssText = `background: ${bgResult}; color: white; padding: 20px; margin-top: 30px; width: 50%; `;
}

/*--------BÀI TẬP 2--------*/
/*
Bước 1: Xác định đầu vào
- Chọn người dùng đang sử dụng máy

Bước 2: Xác định bước xử lý
- Dựa vào data chọn rùi đưa ra lời chào

Bước 3: In kết quả ra màn hình
*/
document.getElementById("hanldeHi").onclick = function() {
    var person = document.getElementById("person").value;
    var name;

    switch (person) {
        case "B":
            name = "bố";
            break;
        case "M":
            name = "Mẹ";
            break;
        case "A":
            name = "Anh trai";
            break;     
        case "E":
            name = "Em gái";
            break;       
        default:
            name = "";
            break;
    }

    var result = "Vui lỏng chọn bạn là ai";
    var bgResult = "red";

    if (name != "")
    {
        result = "Chào " + name;
        bgResult = "#35a22c";
    }

    document.getElementById("hiResult").innerHTML = result;
    document.getElementById("hiResult").style.cssText = `background: ${bgResult}; color: white; padding: 20px; margin-top: 30px; width: 50%; `;
}

/*--------BÀI TẬP 3--------*/
/*
Bước 1: Xác định đầu vào
- Nhập vào 3 số (numberOne, numberTwo, numberThree)
- Tổng số chẵn: countEven
- Tổng số lẻ: countOld

Bước 2: Xác định bước xử lý
- Kiểm tra số chẵn: number % 2 = 0

Bước 3: In kết quả ra màn hình
*/
document.getElementById("hanldeCount").onclick = function() {
    var arr = [];
    var numberOne = document.getElementById("numberOneCount").value;
    arr.push(numberOne);
    var numberTwo = document.getElementById("numberTwoCount").value;
    arr.push(numberTwo);
    var numberThree = document.getElementById("numberThreeCount").value;
    arr.push(numberThree);

    var arrNumber = [];
    for (let i = 0; i < arr.length; i++){
        let number = parseFloat(arr[i]);
        if (!isNaN(number))
            arrNumber.push(number);
    }

    var resultEven = "Không có số chẵn nào";
    var resultOdd = "Không có số lẻ nào";
    var bgResultEven = "red";
    var bgResultOdd = "red";

    var countEven = 0, countOld = 0, lstEven = "", lstOdd = "";
    if (arrNumber.length != 0)
    {
        for (let i = 0; i < arrNumber.length; i++){
            if (arrNumber[i] % 2 == 0)
            {
                countEven++;
                lstEven += arrNumber[i] + " ";
            }
            else   
            {
                countOld++;
                lstOdd += arrNumber[i] + " ";
            }
        }

        if (countEven != 0)
        {
            resultEven = `Tổng số chẳn ${countEven}, bao gồm: ${lstEven}`;
            bgResultEven = "#35a22c";
        }

        if (countOld != 0)
        {
            resultOdd = `Tổng số lẻ ${countOld}, bao gồm: ${lstOdd}`;
            bgResultOdd = "#35a22c";
        }
    }

    document.getElementById("countResultEven").innerHTML = resultEven;
    document.getElementById("countResultEven").style.cssText = `background: ${bgResultEven}; color: white; padding: 20px; margin-top: 30px; width: 50%; `;

    document.getElementById("countResultOdd").innerHTML = resultOdd;
    document.getElementById("countResultOdd").style.cssText = `background: ${bgResultOdd}; color: white; padding: 20px; margin-top: 30px; width: 50%; `;
}

/*--------BÀI TẬP 4--------*/
/*
Bước 1: Xác định đầu vào
- Nhập vào 3 cạnh tam giác (edgeOne, edgeTwo, edgeThree)

Bước 2: Xác định bước xử lý
- Nếu có 3 cạnh bằng nhau => tam giác đều
- Nếu có 2 cạnh bằng nhau => tam giác cân
- Áp dụng định lý pytago: 
  + edgeOne * edgeOne = edgeTwo * edgeTwo + edgeThree * edgeThree
  + edgeTwo * edgeTwo = edgeOne * edgeOne + edgeThree * edgeThree
  + edgeThree * edgeThree = edgeOne * edgeOne + edgeTwo * edgeTwo
- Ngược lại tam giác thường

Bước 3: In kết quả ra màn hình
*/
document.getElementById("hanldeTriangle").onclick = function() {
    var edgeOne = document.getElementById("edgeOne").value;
    edgeOne = parseFloat(edgeOne);
    var edgeTwo = document.getElementById("edgeTwo").value;
    edgeTwo = parseFloat(edgeTwo);
    var edgeThree = document.getElementById("edgeThree").value;
    edgeThree = parseFloat(edgeThree);

    var result = "Vui lòng nhập đủ 3 số";
    var bgResult = "red";

    if (!isNaN(edgeOne) && !isNaN(edgeTwo) && !isNaN(edgeThree))
    {
        bgResult = "#35a22c";
        if (edgeOne == edgeTwo && edgeTwo == edgeThree)
            result = "Tam giác đều";
        else if (edgeOne == edgeTwo || edgeTwo == edgeThree || edgeOne == edgeThree)
            result = "Tam giác cân";
        else if (rightTriangle(edgeOne, edgeTwo, edgeThree))
            result = "Tam giác vuông";
        else 
            result = "Tam giác thường";
    }

    document.getElementById("triangleResult").innerHTML = result;
    document.getElementById("triangleResult").style.cssText = `background: ${bgResult}; color: white; padding: 20px; margin-top: 30px; width: 50%; `;
}

function rightTriangle(edgeOne, edgeTwo, edgeThree){
    var powEdgeOne = Math.pow(edgeOne, 2);
    var powEdgeTwo = Math.pow(edgeTwo, 2);
    var powEdgeThree = Math.pow(edgeThree, 2);

    return powEdgeOne == powEdgeTwo + powEdgeThree || powEdgeTwo == powEdgeOne + powEdgeThree || powEdgeThree == powEdgeOne + powEdgeTwo;
}