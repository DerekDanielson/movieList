let moneyLoaned = {};
moneyLoaned['Bob'] = 150;
moneyLoaned['Susan'] = 700;
moneyLoaned['Janice'] = 1200;
moneyLoaned['Homer'] = undefined;

moneyLoaned['Bob']; //150

moneyLoaned['Bob'] += 10000; //10,150

moneyLoaned['Janice'] -= 300; //400

moneyLoaned //{Bob: 150, Susan: 700, Janice: 1200, Homer: undefined}