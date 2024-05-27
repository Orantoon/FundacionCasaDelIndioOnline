USE FCIO;

-- Fundation
INSERT INTO Fundation (image, vision, mision, history, infoIdiomas, idioma, creationDateTime) VALUES ('./banner.jpg', 'La Fundación Casa del Indio es una Organización no gubernamental que se enfoca en brindarle hogar a indígenas de diferentes zonas de Costa Rica para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanìas, entre otros tipos de ayuda que se les puedes ofrecer a esta parte de la población.', 'Establecida en el 2013, La Fundación Casa del Indio se ha esforzado en crear un ambiente acogedor para recibir y apoyar a los pueblos originarios. Establecida en Cartago, Costa Rica, la fundación busca velar por los intereses de todos los pueblos originarios de Costa Rica.', 'La Fundación Casa del Indio es una Organización No Gubernamental (ONG) que se enfoca en brindarle hogar a indígenas de diferentes zonas para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanías, entre otros tipos de ayuda que se les puede ofrecer a esta parte de la población. Actualmente, La Fundación Casa del Indio carece de un sistema en línea que proporcione información sobre su ubicación, sus actividades , información que se brinda y, lo más importante, cómo colaborar con esta organización no gubernamental que se enfoca en apoyar a comunidades indígenas en Costa Rica. Este proyecto tiene como objetivo desarrollar un sistema de software que le ofrezca a esta ONG la publicación de información de interés y un acceso a la misma desde cualquier lugar.', 'Informacion de los idiomas de Costa Rica.', 0, NOW());
INSERT INTO Fundation (image, vision, mision, history, infoIdiomas, idioma, creationDateTime) VALUES ('./banner.jpg', 'La Fundación Casa del Indio is a non-governmental organization that focuses on providing a home to indigenous people from different areas of Costa Rica so that they have a home in case they have to visit Cartago or nearby, among other types of help that can be offered to them. this part of the population.', 'Established in 2013, La Fundación Casa del Indio has strived to create a welcoming environment to welcome and support indigenous peoples. Established in Cartago, Costa Rica, the foundation seeks to safeguard the interests of all the indigenous people of Costa Rica.', 'La Fundación Casa del Indio is a Non-Governmental Organization (ONG) that focuses on providing a home to indigenous people from different areas so that they have a home in case they have to visit Cartago or nearby, among other types of help that can be offered to this part of the population. Currently, La Fundación Casa del Indio lacks an online system that provides information about its location, its activities, information provided and, most importantly, how to collaborate with this non-governmental organization that focuses on supporting indigenous communities in Costa Rica. This project aims to develop a software system that offers this ONG to publish information of interest and access to it from anywhere.', 'Information regarding the different languages in Costa Rica.', 1, NOW());
INSERT INTO Fundation (image, vision, mision, history, infoIdiomas, idioma, creationDateTime) VALUES ('./banner.jpg', '(Bribri) La Fundación Casa del Indio es una Organización no gubernamental que se enfoca en brindarle hogar a indígenas de diferentes zonas de Costa Rica para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanìas, entre otros tipos de ayuda que se les puedes ofrecer a esta parte de la población.', '(Bribri) Establecida en el 2013, La Fundación Casa del Indio se ha esforzado en crear un ambiente acogedor para recibir y apoyar a los pueblos originarios. Establecida en Cartago, Costa Rica, la fundación busca velar por los intereses de todos los pueblos originarios de Costa Rica.', '(Bribri) La Fundación Casa del Indio es una Organización No Gubernamental (ONG) que se enfoca en brindarle hogar a indígenas de diferentes zonas para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanías, entre otros tipos de ayuda que se les puede ofrecer a esta parte de la población. Actualmente, La Fundación Casa del Indio carece de un sistema en línea que proporcione información sobre su ubicación, sus actividades , información que se brinda y, lo más importante, cómo colaborar con esta organización no gubernamental que se enfoca en apoyar a comunidades indígenas en Costa Rica. Este proyecto tiene como objetivo desarrollar un sistema de software que le ofrezca a esta ONG la publicación de información de interés y un acceso a la misma desde cualquier lugar.', '(Bribri) Informacion de los idiomas de Costa Rica.', 2, NOW());
INSERT INTO Fundation (image, vision, mision, history, infoIdiomas, idioma, creationDateTime) VALUES ('./banner.jpg', '(Cabecar) La Fundación Casa del Indio es una Organización no gubernamental que se enfoca en brindarle hogar a indígenas de diferentes zonas de Costa Rica para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanìas, entre otros tipos de ayuda que se les puedes ofrecer a esta parte de la población.', '(Cabecar) Establecida en el 2013, La Fundación Casa del Indio se ha esforzado en crear un ambiente acogedor para recibir y apoyar a los pueblos originarios. Establecida en Cartago, Costa Rica, la fundación busca velar por los intereses de todos los pueblos originarios de Costa Rica.', '(Cabecar) La Fundación Casa del Indio es una Organización No Gubernamental (ONG) que se enfoca en brindarle hogar a indígenas de diferentes zonas para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanías, entre otros tipos de ayuda que se les puede ofrecer a esta parte de la población. Actualmente, La Fundación Casa del Indio carece de un sistema en línea que proporcione información sobre su ubicación, sus actividades , información que se brinda y, lo más importante, cómo colaborar con esta organización no gubernamental que se enfoca en apoyar a comunidades indígenas en Costa Rica. Este proyecto tiene como objetivo desarrollar un sistema de software que le ofrezca a esta ONG la publicación de información de interés y un acceso a la misma desde cualquier lugar.', '(Cabecar) Informacion de los idiomas de Costa Rica.', 3, NOW());
SELECT * FROM Fundation;

-- User
INSERT INTO User (name, email, password, isAdmin, newsletter, creationDateTime, fundation) VALUES ('David', 'david@gmail.com', 'prueba1234', 0, 1, NOW(), 1);
INSERT INTO User (name, email, password, isAdmin, newsletter, creationDateTime, fundation) VALUES ('Alicia', 'alicia@gmail.com', 'prueba1234', 1, 0, NOW(), 1);
SELECT * FROM User;

-- Post
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (2, 'Post Prueba 1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', './Casa2.png', NOW());
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (2, 'Post Prueba 2', 'Esta es una publicacion de prueba 2.', './casa1.png', NOW());
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (2, 'Post Prueba 3', 'Esta es una publicacion de prueba 3.', './Card1.png', NOW());
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (2, 'Post Prueba 4', 'Esta es una publicacion de prueba 4.', './Card2.png', NOW());
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (2, 'Post Prueba 5', 'Esta es una publicacion de prueba 5.', './Card3.jpg', NOW());
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (2, 'Post Prueba 6', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', './Casa2.png', NOW());
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (2, 'Post Prueba 7', 'Esta es una publicacion de prueba 7.', './casa1.png', NOW());
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (2, 'Post Prueba 8', 'Esta es una publicacion de prueba 8.', './Card1.png', NOW());
INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (2, 'Post Prueba 9', 'Esta es una publicacion de prueba 9.', './Card2.png', NOW());
SELECT * FROM Post;

-- Comment
INSERT INTO Comment (user, post, text, creationDateTime) VALUES (1, 1, 'Muy buena publicacion!', NOW());
SELECT * FROM Comment;

-- Community
INSERT INTO Community (name, text, tribe) VALUES ('Comunidad Prueba 1', 'Esta es una comunidad de prueba 1.', 'Tribu de Prueba');
INSERT INTO Community (name, text, tribe) VALUES ('Comunidad Prueba 2', 'Esta es una comunidad de prueba 2.', 'Tribu de Prueba');
INSERT INTO Community (name, text, tribe) VALUES ('Comunidad Prueba 3', 'Esta es una comunidad de prueba 3.', 'Tribu de Prueba');
INSERT INTO Community (name, text, tribe) VALUES ('Comunidad Prueba 4', 'Esta es una comunidad de prueba 4.', 'Tribu de Prueba');
INSERT INTO Community (name, text, tribe) VALUES ('Comunidad Prueba 5', 'Esta es una comunidad de prueba 5.', 'Tribu de Prueba');
SELECT * FROM Community;

-- Slide
INSERT INTO Slide (community, image) VALUES (1, './Casa2.png');
INSERT INTO Slide (community, image) VALUES (1, './Card1.png');
INSERT INTO Slide (community, image) VALUES (1, './casa1.png');

INSERT INTO Slide (community, image) VALUES (2, './casa1.png');
INSERT INTO Slide (community, image) VALUES (2, './Card1.png');

INSERT INTO Slide (community, image) VALUES (3, './Card1.png');
INSERT INTO Slide (community, image) VALUES (3, './casa1.png');

INSERT INTO Slide (community, image) VALUES (4, './Card2.png');
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