SELECT YEAR(D.DIFFERENTIATION_DATE) AS YEAR, 
       ABS(E.SIZE-D.SIZE_OF_COLONY) AS YEAR_DEV, 
       D.ID
FROM ECOLI_DATA AS D 
    JOIN (
            SELECT MAX(SIZE_OF_COLONY) AS SIZE, 
            YEAR(DIFFERENTIATION_DATE) AS YEAR 
            FROM ECOLI_DATA 
            GROUP BY YEAR(DIFFERENTIATION_DATE)
        ) AS E 
    ON YEAR(D.DIFFERENTIATION_DATE) = E.YEAR
ORDER BY YEAR ASC, YEAR_DEV ASC
