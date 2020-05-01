-- 1
SELECT COUNT(client_id), 
	   MONTH(first_date) as month
FROM (
	SELECT 
		client_id, 
		MIN(purchase_date) as first_date
	FROM orders 
	GROUP BY client_id
	 )  as table1
GROUP BY month
ORDER BY month;


-- 2
SELECT o1.MONTH, COUNT(o1.client_id) FROM (
	SELECT client_id, MONTH(purchase_date) AS MONTH FROM orders GROUP BY client_id, MONTH(purchase_date)
	) AS o1
JOIN
	(
	SELECT client_id, MONTH(purchase_date) AS MONTH FROM orders GROUP BY client_id, MONTH(purchase_date)
	) AS o2
ON o1.client_id=o2.client_id AND o1.MONTH = o2.MONTH + 1
GROUP BY o1.MONTH;

-- 3
SELECT COUNT(o1.client_id), (o1.MONTH) AS month FROM (
	SELECT client_id, MONTH(purchase_date) AS MONTH FROM orders GROUP BY client_id, MONTH(purchase_date)
	) AS o1
LEFT JOIN (
	SELECT client_id, MONTH(purchase_date) AS MONTH FROM orders GROUP BY client_id, MONTH(purchase_date)
	) AS o2
ON o1.client_id = o2.client_id AND o1.MONTH > o2.MONTH + 1
LEFT JOIN (
	SELECT client_id, MONTH(purchase_date) AS MONTH FROM orders GROUP BY client_id, MONTH(purchase_date)
	) AS o3
ON o1.client_id=o3.client_id AND o1.MONTH = o3.MONTH + 1
WHERE o3.client_id IS NULL AND o2.client_id IS NOT NULL
GROUP BY o1.month;	



-- 4
SELECT COUNT(o1.client_id), (o1.MONTH + 1) AS month FROM
	(SELECT client_id, MONTH(purchase_date) AS MONTH FROM orders GROUP BY client_id, MONTH(purchase_date)) AS o1
LEFT JOIN (
	SELECT client_id, MONTH(purchase_date) AS MONTH FROM orders GROUP BY client_id, MONTH(purchase_date)
	) AS o2
ON o1.client_id = o2.client_id AND o1.MONTH + 1 = o2.MONTH
WHERE o2.client_id IS NULL AND o1.MONTH + 1 < 9
GROUP BY o1.MONTH + 1
ORDER BY o1.MONTH + 1;
