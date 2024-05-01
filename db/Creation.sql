Create database FCIO;

CREATE TABLE `FCIO`.`Fundation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vision` VARCHAR(1000) NOT NULL,
  `history` VARCHAR(10000) NOT NULL,
  `creation_date` DATE NOT NULL,
  `beds` INT NOT NULL,
  `available_beds` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `FCIO`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fundation` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `isAdmin` TINYINT NOT NULL,
  `details` VARCHAR(100) NULL,
  `newsletter` TINYINT NULL,
  `creation_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_idx` (`fundation` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `user_fundation`
    FOREIGN KEY (`fundation`)
    REFERENCES `FCIO`.`Fundation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`Post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` INT NOT NULL,
  `likes` INT NOT NULL,
  `creation_date` DATE NOT NULL,
  `text` VARCHAR(500) NOT NULL,
  `imgPath` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `post_user`
    FOREIGN KEY (`user`)
    REFERENCES `FCIO`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`Comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` INT NOT NULL,
  `text` VARCHAR(200) NOT NULL,
  `creation_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `comment_user_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `comment_user`
    FOREIGN KEY (`user`)
    REFERENCES `FCIO`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`commentXpost` (
  `idComment` INT NOT NULL,
  `idPost` INT NOT NULL,
  PRIMARY KEY (`idComment`, `idPost`),
  INDEX `commentXpost_post_idx` (`idPost` ASC) VISIBLE,
  CONSTRAINT `commentXpost_comment`
    FOREIGN KEY (`idComment`)
    REFERENCES `FCIO`.`Comment` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `commentXpost_post`
    FOREIGN KEY (`idPost`)
    REFERENCES `FCIO`.`Post` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`New` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` INT NOT NULL,
  `post` INT NULL,
  `text` VARCHAR(500) NOT NULL,
  `imgPath` VARCHAR(100) NOT NULL,
  `creation_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `new_user_idx` (`user` ASC) VISIBLE,
  INDEX `new_post_idx` (`post` ASC) VISIBLE,
  CONSTRAINT `new_user`
    FOREIGN KEY (`user`)
    REFERENCES `FCIO`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `new_post`
    FOREIGN KEY (`post`)
    REFERENCES `FCIO`.`Post` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`Images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `path` VARCHAR(100) NOT NULL,
  `details` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `FCIO`.`imageXfundation` (
  `idImagen` INT NOT NULL,
  `idFundation` INT NOT NULL,
  PRIMARY KEY (`idImagen`, `idFundation`),
  INDEX `imageXfundation_image_idx` (`idFundation` ASC) VISIBLE,
  CONSTRAINT `imageXfundation_fundation`
    FOREIGN KEY (`idImagen`)
    REFERENCES `FCIO`.`Images` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `imageXfundation_image`
    FOREIGN KEY (`idFundation`)
    REFERENCES `FCIO`.`Fundation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`Community` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `details` VARCHAR(200) NOT NULL,
  `tribe` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `FCIO`.`Slide` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` INT NOT NULL,
  `text` VARCHAR(100) NOT NULL,
  `details` VARCHAR(100) NOT NULL,
  `creation_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `slide_image_idx` (`image` ASC) VISIBLE,
  CONSTRAINT `slide_image`
    FOREIGN KEY (`image`)
    REFERENCES `FCIO`.`Images` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`slideXcommunity` (
  `idCommunity` INT NOT NULL,
  `idSlide` INT NOT NULL,
  `number` INT NOT NULL,
  PRIMARY KEY (`idCommunity`, `idSlide`),
  INDEX `slideXcommunity_slide_idx` (`idSlide` ASC) VISIBLE,
  CONSTRAINT `slideXcommunity_community`
    FOREIGN KEY (`idCommunity`)
    REFERENCES `FCIO`.`Community` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `slideXcommunity_slide`
    FOREIGN KEY (`idSlide`)
    REFERENCES `FCIO`.`Slide` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`VisitLog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` INT NOT NULL,
  `community` INT NOT NULL,
  `visit_id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `details` VARCHAR(100) NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `visitLog_user_idx` (`user` ASC) VISIBLE,
  INDEX `visitLog_community_idx` (`community` ASC) VISIBLE,
  CONSTRAINT `visitLog_user`
    FOREIGN KEY (`user`)
    REFERENCES `FCIO`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `visitLog_community`
    FOREIGN KEY (`community`)
    REFERENCES `FCIO`.`Community` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`DonationCampaign` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comunity` INT NULL,
  `name` VARCHAR(45) NOT NULL,
  `text` VARCHAR(45) NOT NULL,
  `details` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `DonationCampaign_community_idx` (`comunity` ASC) VISIBLE,
  CONSTRAINT `DonationCampaign_community`
    FOREIGN KEY (`comunity`)
    REFERENCES `FCIO`.`Community` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `FCIO`.`DonationType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `details` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `FCIO`.`Donation` (
  `id` INT NOT NULL,
  `type` INT NOT NULL,
  `user` INT NOT NULL,
  `campaign` INT NULL,
  `details` VARCHAR(45) NOT NULL,
  `ammount` INT NOT NULL,
  `date` DATE NOT NULL,
  `approval` TINYINT NOT NULL,
  `approval_date` DATE NOT NULL,
  `approvedBy` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `donation_type_idx` (`type` ASC) VISIBLE,
  INDEX `donation_campaign_idx` (`campaign` ASC) VISIBLE,
  INDEX `donation_approvedBy_idx` (`approvedBy` ASC) VISIBLE,
  INDEX `donation_user_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `donation_user`
    FOREIGN KEY (`user`)
    REFERENCES `FCIO`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `donation_type`
    FOREIGN KEY (`type`)
    REFERENCES `FCIO`.`DonationType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `donation_campaign`
    FOREIGN KEY (`campaign`)
    REFERENCES `FCIO`.`DonationCampaign` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `donation_approvedBy`
    FOREIGN KEY (`approvedBy`)
    REFERENCES `FCIO`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);