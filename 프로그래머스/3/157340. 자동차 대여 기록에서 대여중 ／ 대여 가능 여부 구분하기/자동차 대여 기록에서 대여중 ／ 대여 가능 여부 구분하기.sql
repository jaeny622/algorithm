SELECT CAR_ID, 
CASE 
WHEN CAR_ID IN 
    (
     SELECT CAR_ID 
     FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY 
     WHERE '20221016' BETWEEN TO_CHAR(START_DATE,'YYYYMMDD') AND TO_CHAR(END_DATE,'YYYYMMDD')
    ) 
THEN '대여중' 
ELSE '대여 가능' 
END 
"AVAILABILITY"
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
ORDER BY CAR_ID DESC