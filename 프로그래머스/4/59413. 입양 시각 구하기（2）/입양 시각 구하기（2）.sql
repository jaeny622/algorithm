SELECT H.HOUR, NVL(O.COUNT,0) COUNT
FROM 
    (
    SELECT LEVEL-1 HOUR FROM DUAL CONNECT BY LEVEL <= 24
    ) H,
    (SELECT TO_NUMBER(TO_CHAR(DATETIME,'HH24')) HOUR, COUNT(DATETIME) COUNT
     FROM ANIMAL_OUTS
     GROUP BY TO_NUMBER(TO_CHAR(DATETIME,'HH24')) 
     ORDER BY HOUR
     ) O
WHERE O.HOUR(+) = H.HOUR
ORDER BY H.HOUR ASC