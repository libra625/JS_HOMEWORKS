# ДЗ 35. Менеджер співбесід
Створіть програму для проведення співбесід з кандидатами на роботу. Програма має включати наступні елементи:

1. Функція створитиКандидата(ім'я, навички): приймає ім'я кандидата та список його навичок. Повертає об'єкт кандидата.

2. Функція додатиВимогу(вимога): додає нову вимогу до списку вимог для кандидатів.

3. Функція провестиСпівбесіду(кандидат, вимоги): приймає об'єкт кандидата та список вимог. Перевіряє, чи відповідає кандидат усім вимогам. Повертає true, якщо кандидат відповідає всім вимогам, інакше - false.

4. Функція заплануватиСпівбесіди(кандидати, вимоги, функціяОцінки): приймає масив кандидатів, список вимог та функцію оцінки. Функція оцінки викликається для кожного кандидата і повинна повертати оцінку від 0 до 100. Функція повертає масив кандидатів, відсортованих за оцінкою, від найвищої до найнижчої