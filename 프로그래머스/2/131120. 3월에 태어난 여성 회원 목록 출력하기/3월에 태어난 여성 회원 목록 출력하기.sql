SELECT MEMBER_ID, MEMBER_NAME, GENDER, TO_CHAR(DATE_OF_BIRTH,'YYYY-MM-DD') AS DATE_OF_BIRTH
FROM MEMBER_PROFILE
WHERE TO_CHAR(DATE_OF_BIRTH,'MM') IN ('03') AND GENDER IN ('W') AND TLNO IS NOT NULL
ORDER BY MEMBER_ID ASC