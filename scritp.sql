CREATE TABLE `payfast`.`pagamentos` (
  `idnew_table` INT NOT NULL,
  `forma_de_pagamento` VARCHAR(45) NULL,
  `valor` DECIMAL(10,2) NULL,
  `moeda` VARCHAR(3) NULL,
  `descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`idnew_table`));