## Описание файлов

task3.ipynb - решение задания  
oulets.sql - изначальный файл sql таблицы  
oulets_update.sql - файл и обновленным внешним ключом outlet_clean_id  
oulets_clean.sql- дедублицированная таблица   

## Описание задания

Вам нужно написать код на python, который сделает дедубликацию торговых точек. Вы можете использовать свой алгоритм и/или сторонние(внешние) сервисы.
Пожалуйста, предоставьте ссылку на репозиторий Github(Bitbucket), где будет находиться Ваш код и конечный результат(SQL таблицы с дедублицированными данными).

SQL таблицы - https://drive.google.com/file/d/0B6nelhokQOrRZkMzWHgzSWFBaUE/view?usp=sharing

Вам нужно будет заполнить таблицу “outlets_clean” и обновить внешний ключ в таблице “outlets”(колонка outlet_clean_id). Для точек в таблице “outlets”, которые Вы не можете дедублицировать, проставьте в колонке outlet_clean_id значение NULL.

