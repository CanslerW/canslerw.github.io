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
    document.getElementById("output").innerText =
      "Не удалось найти нужные числа";
  }
}

function findUniqueNumbers(data) {
  for (let a = 0; a < data.length; a++) {
    for (let b = 0; b < data.length; b++) {
      for (let c = 0; c < data.length; c++) {
        for (let d = 0; d < data.length; d++) {
          const potentialNumbers = [
            data[a][3],
            data[b][2],
            data[c][1],
            data[d][0],
          ];
          if (allUnique(potentialNumbers) && usesAllDigits(potentialNumbers)) {
            return potentialNumbers.reverse(); // Reverse to maintain the original order
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

document.addEventListener("DOMContentLoaded", function() {
  // Получаем все элементы ввода
  const inputElements = document.querySelectorAll("input[type='text']");

  // Добавляем обработчик события нажатия клавиши Enter для каждого поля ввода
  inputElements.forEach((input, index) => {
      input.addEventListener("keydown", function(event) {
          if (event.key === "Enter") {
              // Определяем текущий индекс строки и столбца
              const currentRow = Math.floor(index / 4); // Здесь 4 - количество столбцов
              const currentColumn = index % 4;

              // Определяем следующий индекс строки и столбца (вниз)
              let nextRow = currentRow + 1;
              let nextColumn = currentColumn;

              // Если достигнут конец таблицы, переходим к следующему столбцу или строке
              if (nextRow === 5) {
                  nextRow = 0;
                  nextColumn += 1;
              }

              // Если достигнут конец последнего столбца, вернуться к первому столбцу следующей строки
              if (nextColumn === 4) {
                  nextColumn = 0;
              }

              // Определяем индекс следующего поля ввода
              const nextIndex = nextRow * 4 + nextColumn;

              // Устанавливаем фокус на следующем поле ввода
              const nextInput = inputElements[nextIndex];
              if (nextInput) {
                  nextInput.focus();
              }

              // Предотвращаем стандартное поведение клавиши Enter (подтверждение формы)
              event.preventDefault();
          }
      });
  });
});

