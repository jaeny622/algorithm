SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE LOWER(NAME) LIKE '%el%' AND ANIMAL_TYPE IN ('Dog')
ORDER BY NAME ASC