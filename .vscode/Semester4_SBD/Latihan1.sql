DELIMITER //
CREATE PROCEDURE luas persegi_panjang(
    IN panjang FLOAT,
    IN lebar FLOAT,
    OUT p_luas FLOAT
)
BEGIN 
    SET p_luas = p_panjang * p_lebar;
END //
DELIMITER ;