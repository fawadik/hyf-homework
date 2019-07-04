-- Schema cph_cricket_club_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cph_cricket_club_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `cph_cricket_club_db` ;

-- -----------------------------------------------------
-- Table `cph_cricket_club_db`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cph_cricket_club_db`.`status` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `cph_cricket_club_db`.`matches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cph_cricket_club_db`.`matches` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL,
  `winner` VARCHAR(255) NOT NULL,
  `looser` VARCHAR(255) NOT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `status_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_status` (`status_id` ASC) VISIBLE,
  CONSTRAINT `fk_status`
    FOREIGN KEY (`status_id`)
    REFERENCES `cph_cricket_club_db`.`status` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `cph_cricket_club_db`.`teams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cph_cricket_club_db`.`teams` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `division` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `cph_cricket_club_db`.`players`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cph_cricket_club_db`.`players` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `team_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_team` (`team_id` ASC) VISIBLE,
  CONSTRAINT `fk_team`
    FOREIGN KEY (`team_id`)
    REFERENCES `cph_cricket_club_db`.`teams` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `cph_cricket_club_db`.`points_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cph_cricket_club_db`.`points_table` (
  `match_id` INT(10) UNSIGNED NOT NULL,
  `team_id` INT(10) UNSIGNED NOT NULL,
  `points` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`match_id`, `team_id`),
  INDEX `fk_team_match_team` (`team_id` ASC) VISIBLE,
  CONSTRAINT `fk_match_team_match`
    FOREIGN KEY (`match_id`)
    REFERENCES `cph_cricket_club_db`.`matches` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_team_match_team`
    FOREIGN KEY (`team_id`)
    REFERENCES `cph_cricket_club_db`.`teams` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
