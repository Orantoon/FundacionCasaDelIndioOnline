USE FCIO;

-- Fundation
INSERT INTO Fundation (image, vision, mision, history, infoIdiomas, idioma, creationDateTime) VALUES ('imgs/pruebaFundacion.jpg', 'La Casa del Indio es una Organización no gubernamental que se enfoca en brindarle hogar a indígenas de diferentes zonas del país para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanìas, entre otros tipos de ayuda que se les puedes ofrecer a esta parte de la población.', 'Establecida en el 2013, la Fundación Casa del indio se ha esforzado en crear un ambiente acogedor para recibir y apoyar a los pueblos originarios.  Establecida en Cartago Costa Rica, la fundación busca velar por los intereses de todos los pueblos originarios de Costa Rica.', 'La Fundación Casa del Indio es una Organización No Gubernamental (ONG) que se enfoca en brindarle hogar a indígenas de diferentes zonas para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanías, entre otros tipos de ayuda que se les puede ofrecer a esta parte de la población. Actualmente, la Fundación Casa del Indio carece de un sistema en línea que proporcione información sobre su ubicación, sus actividades , información que se brinda y, lo más importante, cómo colaborar con esta organización no gubernamental que se enfoca en apoyar a comunidades indígenas en Costa Rica. Este proyecto tiene como objetivo desarrollar un sistema de software que le ofrezca a esta ONG la publicación de información de interés y un acceso a la misma desde cualquier lugar.', 'Informacion de los idiomas de Costa Rica.', 0, NOW());
SELECT * FROM Fundation;

-- User
INSERT INTO User (name, email, password, isAdmin, newsletter, creationDateTime, fundation) VALUES ('David', 'david@gmail.com', 'prueba1234', 0, 1, NOW(), 1);
INSERT INTO User (name, email, password, isAdmin, newsletter, creationDateTime, fundation) VALUES ('Alicia', 'alicia@gmail.com', 'prueba1234', 1, 0, NOW(), 1);
SELECT * FROM User;

-- Post
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (1, 'Post Prueba', 'Esta es una publicacion de prueba.', 'imgs/pruebaPost1.jpg', NOW());
SELECT * FROM Post;

-- Comment
INSERT INTO Comment (user, post, text, creationDateTime) VALUES (1, 1, 'Muy buena publicacion!', NOW());
SELECT * FROM Comment;

-- Community
INSERT INTO Community (name, text, tribe) VALUES ('Comunidad Prueba', 'Esta es una comunidad de prueba.', 'Tribu de Prueba');
SELECT * FROM Community;

-- Slide
INSERT INTO Slide (community, image) VALUES (1, 'imgs/pruebaSlide1.jpg');
INSERT INTO Slide (community, image) VALUES (1, 'imgs/pruebaSlide2.jpg');
INSERT INTO Slide (community, image) VALUES (1, 'imgs/pruebaSlide3.jpg');
SELECT * FROM Slide;

-- Visitlog
INSERT INTO Visitlog (user, community, name, details, dateTime) VALUES (2, 1, 'Visita de Comunidad Prueba', 'Log de prueba de una visita de la Comunidad Prueba.', NOW());
SELECT * FROM Visitlog;

-- Donationcampaign
INSERT INTO Donationcampaign (community, name, text, creationDateTime) VALUES (1, 'Campana de Donacion de Comunidad Prueba', 'Esta es una campana de donacion de prueba para la Comunidad Prueba.', NOW());
SELECT * FROM Donationcampaign;

-- Donation
INSERT INTO Donation (user, campaign, details, dateTime, approved, approvalDateTime, approvedBy) VALUES (1, 1, 'Donacion a la campana de prueba.', NOW(), 0, NULL, NULL);
INSERT INTO Donation (user, campaign, details, dateTime, approved, approvalDateTime, approvedBy) VALUES (1, NULL, 'Donacion de prueba', NOW(), 1, NOW(), 2);
SELECT * FROM Donation;