SELECT O.PRODUCT_ID, P.PRODUCT_NAME, SUM(P.PRICE*O.AMOUNT) TOTAL_SALES
FROM FOOD_PRODUCT P INNER JOIN FOOD_ORDER O ON P.PRODUCT_ID = O.PRODUCT_ID
WHERE TO_CHAR(O.PRODUCE_DATE,'YYYYMM') IN ('202205')
GROUP BY O.PRODUCT_ID, P.PRODUCT_NAME
ORDER BY TOTAL_SALES DESC, O.PRODUCT_ID ASC