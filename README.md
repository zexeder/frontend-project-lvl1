[![Maintainability](https://api.codeclimate.com/v1/badges/bb8d61816eb72faa3da2/maintainability)](https://codeclimate.com/github/zexeder/frontend-project-lvl1/maintainability)

![Node.js CI](https://github.com/zexeder/frontend-project-lvl1/workflows/Node.js%20CI/badge.svg)
# Игры разума
Данный пакет представляет собой набор из 5 консольных игр. 

* [brain-even ("Проверка на четность")](#brain-even)
* [brain-calc ("Калькулятор")](#brain-calc)
* [brain-gcd ("Наибольший общий делитель")](#brain-gcd)
* [brain-progression ("Арифметическая прогрессия")](#brain-progression)
* [brain-prime "Простое ли число?"](#brain-prime)

## Для запуска игры необходим nodejs (не ниже 13 версии)

## Зависимости
- readline-sync v1.4+

## Установка
npm install

npm link

## Удаление
npm unlink

## Описание игры
Игры состоят из 3 раундов. При каждомо запуске игры, у игрока запрашивается имя. После того, как он введет свое имя, игроку задается по одному вопросу. Если игрок правильно отвечает на все 3 вопроса - он побеждает. Если ошибается, игра моментально заканчивается.
Пустой ответ, также считается за ошибку.

### brain-even
Игра "Проверка на четность". Игроку показывается случайное число. Ему нужно ответить yes, если число чётное, или no — если нечётное.
[![asciicast](https://asciinema.org/a/AzE3hXRJ98rmjkiY4a0lkJ8pb.svg)](https://asciinema.org/a/AzE3hXRJ98rmjkiY4a0lkJ8pb?t=8)

### brain-calc
Игра "Калькулятор". Игроку показывается случайное математическое выражение, например 72 + 5, которое нужно вычислить и записать правильный ответ.
[![asciicast](https://asciinema.org/a/7DW6ywdSxZEtT9Hem0CABqeNA.svg)](https://asciinema.org/a/7DW6ywdSxZEtT9Hem0CABqeNA?t=8)

### brain-gcd
Игра "Наибольший общий делитель". Игроку показывается два случайных числа, например, 15 30. Игрок должен вычислить и ввести наибольший общий делитель этих чисел.
[![asciicast](https://asciinema.org/a/vlq1UQjeXeydNUclNsGHFfsQZ.svg)](https://asciinema.org/a/vlq1UQjeXeydNUclNsGHFfsQZ)

### brain-progression
Игра "Арифметическая прогрессия". Игроку показывается ряд чисел, образующий арифметическую прогрессию. Одно из чисел заменено двуя точкми. Игрок должен определить это число.
[![asciicast](https://asciinema.org/a/5rzaFNO8zzuI1sykkXbsqM5lZ.svg)](https://asciinema.org/a/5rzaFNO8zzuI1sykkXbsqM5lZ)

### brain-prime
Игра "Простое ли число?" Игроку показывается случайное число. Ему нужно ответить yes, если число простое, иначе - no.
[![asciicast](https://asciinema.org/a/kOPl1YJYcbsqy1kjthrT754Th.svg)](https://asciinema.org/a/kOPl1YJYcbsqy1kjthrT754Th)