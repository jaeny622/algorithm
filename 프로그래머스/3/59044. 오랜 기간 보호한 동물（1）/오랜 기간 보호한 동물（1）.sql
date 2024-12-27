SELECT *
FROM (
        SELECT I.NAME, I.DATETIME
        FROM ANIMAL_INS I
        WHERE NOT EXISTS( 
                SELECT *
                FROM ANIMAL_OUTS O
                WHERE I.ANIMAL_ID = O.ANIMAL_ID
        )
        ORDER BY I.DATETIME ASC
    ) J
WHERE ROWNUM <= 3;
     