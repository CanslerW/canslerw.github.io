function processData() {
    let data = [];
    for (let i = 0; i < 5; i++) {
        let row = [];
        for (let j = 0; j < 4; j++) {
            const inputValue = document.getElementById(`num${i}-${j}`).value;
            if (inputValue) {
                row.push(Number(inputValue));
            }
        }
        data.push(row);
    }

    const selectedNumbers = findUniqueNumbers(data);
    if (selectedNumbers.length === 4) {
        document.getElementById("output").innerText = selectedNumbers.join(", ");
    } else {
        document.getElementById("output").innerText = "Не удалось найти нужные числа";
    }
}

function findUniqueNumbers(data) {
    for (let a = 0; a < data.length; a++) {
        for (let b = 0; b < data.length; b++) {
            for (let c = 0; c < data.length; c++) {
                for (let d = 0; d < data.length; d++) {
                    const potentialNumbers = [data[a][3], data[b][2], data[c][1], data[d][0]];
                    if (allUnique(potentialNumbers) && usesAllDigits(potentialNumbers)) {
                        return potentialNumbers.reverse();  // Reverse to maintain the original order
                    }
                }
            }
        }
    }
    return [];
}

function allUnique(numbers) {
    const seenDigits = new Set();
    for (let num of numbers) {
        for (let digit of String(num)) {
            if (seenDigits.has(digit)) {
                return false;
            }
            seenDigits.add(digit);
        }
    }
    return true;
}

function usesAllDigits(numbers) {
    const seenDigits = new Set();
    for (let num of numbers) {
        for (let digit of String(num)) {
            seenDigits.add(digit);
        }
    }
    return seenDigits.size === 10; 
}