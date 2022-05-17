-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: happy_cogind
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carproducts`
--

DROP TABLE IF EXISTS `carproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carproducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_products` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carproducts_FK` (`id_products`),
  CONSTRAINT `carproducts_FK` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carproducts`
--

LOCK TABLES `carproducts` WRITE;
/*!40000 ALTER TABLE `carproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `name` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES ('T-Shirt',1),('Socks',2),('Bags',3),('Hoodies',4),('Hats',5);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `id_categorie` int(11) DEFAULT NULL,
  `trend` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`id_categorie`),
  CONSTRAINT `products_FK` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Purple T-shirt',600,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?\"','Purple-T-shirt.png',1,0),(3,'Crazy Socks',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','Socks-1.png',2,1),(4,'Normal Socks',400,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?\"','socks-2.png',2,0),(5,'Bag student',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','bag1.png',3,1),(6,'Bag Party',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','bag2.png',3,0),(7,'Hoodies Party',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','hoodie1.png',4,1),(8,'Hoodies Party',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','hoodie2.png',4,0),(9,'Hat man',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','hat1.png',5,1),(10,'Hat Palm tree ',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','hat2.png',5,0),(31,'Bue T-shirt',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','image-1649000507165.png',1,NULL),(32,'Negative T-shirt',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','image-1649000722190.png',1,NULL),(33,'Cats Socks',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','image-1649001106206.png',2,NULL),(34,'Casual Socks',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','image-1649001711701.png',2,NULL),(35,'Minecraft Socks',500,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?','image-1649001854071.png',2,NULL),(54,'Strenger Bags',200,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam deleniti accusantium cupiditate, laudantium eum nobis quos, quisquam consequatur, dolore nisi maxime eligendi et nemo quo optio maiores rem unde?\"	','image-1651456413049.png',3,NULL),(58,'nombre',2134,'qwerfdgvreswfargwresdfadesfrg','image-1652667471728.PNG',1,NULL),(59,'nombre',123,'asdfvas','image-1652671903737.GIF',1,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipousuarios`
--

DROP TABLE IF EXISTS `tipousuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipousuarios` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipousuarios`
--

LOCK TABLES `tipousuarios` WRITE;
/*!40000 ALTER TABLE `tipousuarios` DISABLE KEYS */;
INSERT INTO `tipousuarios` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `tipousuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userlogins`
--

DROP TABLE IF EXISTS `userlogins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userlogins` (
  `id` int(11) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pass1` varchar(100) DEFAULT NULL,
  `pass2` varchar(100) DEFAULT NULL,
  `token` varchar(400) DEFAULT NULL,
  `id_tipoUsuario` int(11) DEFAULT NULL,
  `admin` varchar(100) DEFAULT NULL,
  KEY `userlogins_FK` (`id_tipoUsuario`),
  CONSTRAINT `userlogins_FK` FOREIGN KEY (`id_tipoUsuario`) REFERENCES `tipousuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userlogins`
--

LOCK TABLES `userlogins` WRITE;
/*!40000 ALTER TABLE `userlogins` DISABLE KEYS */;
/*!40000 ALTER TABLE `userlogins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pass1` varchar(100) DEFAULT NULL,
  `pass2` varchar(100) DEFAULT NULL,
  `id_tipoUsuario` int(11) DEFAULT NULL,
  `admin` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`id_tipoUsuario`),
  CONSTRAINT `users_FK` FOREIGN KEY (`id_tipoUsuario`) REFERENCES `tipousuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,'santiagogo','santiagogo1993@gmail','$2a$10$1XofnZ2hJOdcxz16RCmk/uBMO8clCD4d8G.zEw1B8ML4c4XbUomKK','123',NULL,'0'),(9,'admin','santiagogo1993@gmail.com','$2a$10$0CdYuxk..nUqZAdfM0TMd.tsKJzLA79XNOpXfieFGOPPyTK8CzX0O','123',NULL,'1'),(13,'andres','hola@gmail.com','$2a$10$U03q26EHmrIF6TjxEzclTOVVH5rOvJt3qjHHuiGn0YZ8tG8A.AkPe','123',NULL,'0'),(14,'mazo','hola@gmail.com','$2a$10$y0FVSbNdzjPPmEu0dWwgv.i0fODJbfniXl6CxqsR06YLATUM5klJW','1234',NULL,'0'),(15,'mazpo','hola@gmail.com','$2a$10$s7DSTWKJT1i3aHTD0tp7sOuCqY2GfmXdg.4uPOLUzqUgj3XPT6MRG','123',NULL,'0'),(16,'mama','asdfasdf@gmail.com','$2a$10$XpA0AjrYPJ1BMvUgz0wmwOEpvq0/xL2tovwE1Y25XFWWhtkkN/uuq','asdf',NULL,'0'),(17,'santiagogo','hola@gmail.com','$2a$10$uWnGcaj8VHoEkoMTZ3qphugVRq2yANaxQ5Smo8IXfzUHS3ehkqmRC','123',NULL,'0'),(18,'santiagogo','hola@gmail.com','$2a$10$DXzbnvdVAXmJMuX4CoQdUe3DRP4KbBk9zmzurEMxkbpx.Jzi51Fvi','asdf',NULL,'0'),(19,'asdfasdf','hola@gmail.com','$2a$10$AMxBy8VKdD0rXNnSHrAfG.AuHfBYD3zdjQS/aNjsaJDyPCoTEJNNS','123',NULL,'0'),(20,'asdfasdf','hola@gmail.com','$2a$10$Lo3MeUjFnkje1vXeu4KTru.qP.cUhdirOp9FzqeXjg3ljlvSEq1Ji','123',NULL,'0'),(21,'asdfasdf','hola@gmail.com','$2a$10$1jnGhBLGcTAPAF5TpTglxuiJJXmRvtCTy977Ni5bOlDNHwRRF9wXO','123',NULL,'0'),(22,'santiagogo','hola@gmail.com','$2a$10$XerqfCfpGbPGJLK0yvGttebkp1mffaio6CApSmafdswj72ieXEeaS','123',NULL,'0'),(23,'santiagogo','hola@gmail.com','$2a$10$ClB2bs.RmaFEgqVbzM4wzOOPvhKmaoW2gThc1gaGdyC0tyWOrxlBi','123',NULL,'0'),(24,'santiagogo','hola@gmail.com','$2a$10$sm8IqHkJAj6kdEGp8Q0Rreqf.V.Lfaqhmw10fG6vnQMr3.IZ6oqgS','123',NULL,'0'),(25,'santiagogo','hola@gmail.com','$2a$10$XpAHb0BrRLA.8yNch4n8lOQbO6LWw.KkeRpiTIYgS60epcNfIk3bK','123',NULL,'0'),(26,'santiagogo','hola@gmail.com','$2a$10$VQzw/7B6rZsuSIIba7yk4OmSk00COVCm7JKb9XBLNWX0RNNvEKfZW','123',NULL,'0'),(27,'santiagogo','hola@gmail.com','$2a$10$GZYAaCdWnPcNAgceFkSrbe3qO3q245skJxLBe9DQ8..WpIYp7lOK.','123',NULL,'0'),(28,'santiagogo','hola@gmail.com','$2a$10$kQzrNpyqf1jLNL7gIito8ubRCH/94z3jfAAjNp/YawlaU0rpUt2Lm','123',NULL,'0'),(29,'santiagogo1993','hola@gmail.com','$2a$10$6NfGIYI/lg3aE5/NFbhi0.MPEijh4c2xbID9RrFowz.Eteoqqe6wy','123',NULL,'0'),(30,'santiagogo','hola@gmail.com','$2a$10$jMyJhGIqHnHYODozj.HlcuUdgSrZwJE.Lwn/KZ1pS3p0R4SzUEneO','123',NULL,'0'),(31,'santiagogo','hola@gmail.com','$2a$10$omCDfJdjU6jlBX6lF74mwuiyRWCtjN.bVjEkXjGxz6rXHIueFidFy','123',NULL,'0'),(32,'santiagogo','hola@gmail.com','$2a$10$..KI3eXGyPuimVycR753cewaKTXj9xVMZOVZhDWIjxFfh1PUdZKQG','123',NULL,'0'),(33,'santiagogo','hola@gmail.com','$2a$10$DlSjuFhLfBkP4O6dDxeM2.pjU2PDKWs8RafGCNxceQ3Mbrr4J30aO','123',NULL,'0'),(34,'santiagogo','hola@gmail.com1','$2a$10$.2yq0i7XSr2tcqHh6o.Kk.1ElYWF/couh0nj98HdwK44f.vp5avW6','123',NULL,'0'),(35,'santiagogo','hola@gmail.com1','$2a$10$6fozOUsRyNlz4QpPab90QeE/Xv80lwrf0AavWri0gj4CO6Z6WyDFK','123',NULL,'0'),(36,'santiagogo','hola@gmail.com','$2a$10$ptPPvCzqqlz6i/f5QcfDP.ipgATPM0TqJpMOTGdmI2XTUJBm4k2La','123',NULL,'0'),(37,'santiagogo','hola@gmail.com','$2a$10$hO9E9inDczyrSXmvgbsyQe/zWc6oxCD3jwngNUaaKIOYkppYDO6vC','123',NULL,'0'),(38,'santiagogo','hola@gmail.com','$2a$10$eLSgkq/7CP1hSvcDUNdjBuY6N6bgA88jOa6i8NQOR0iIvdBpp039G','123',NULL,'0'),(39,'santiagogo','hola@gmail.com','$2a$10$P5yo/AnmbIf8CzRr.CUxD.MuvA2X3vwpR/OgcxUmMbbt07ZK7AKpm','123',NULL,'0'),(40,'123','hola@gmail.com','$2a$10$f99G53MnJ4hTwqDWegPO3uDJPhXLQihS/.F2USpDEDakvf8Y/VYr2','123',NULL,'0'),(41,'aaaaaaa','hola@gmail.com','$2a$10$9m9dH0NOozdVhGehUVIQN.YfffB6crbeMacF3zM3SXMLFLXQcNiRa','123',NULL,'0'),(42,'159','hola@gmail.com','$2a$10$56XhyljzlmjIQATGKp404OUG6O2RMbxR4dqGgXvau/q.yhdRgNR9i','123',NULL,'0'),(43,'santiagogo123','santiagogo1993@gmail.com','$2a$10$KM0n.ZSoIxOnvqqxBHF9ReE.Lj0SCFgIM7HcRjLX.4Hk4LkvmIFsm','123',NULL,'0'),(44,'santiagogo','hola@gmail.com','$2a$10$qJ4Tv3I2ILqWG3yjRMGIa.J9/8DJf.M0cUfK3LIMUF1vFMycUgYrC','123',NULL,'0'),(45,'santiagogo321','hola@gmail.com','$2a$10$5zUm2wTXTTJrsLguvQjUve5LeAzXTHJIehCxy6HmGXnkQjuHdv8G6','123',NULL,'0'),(46,'santiagogo321','santiagogo1993@gmail.com','$2a$10$dwBffaXe5eKr85PqGzcskOo6wL7btR/fxnWbvLJyQJOWPaYjoZcK.','123',NULL,'0'),(47,'santiagogo2','hola@gmail.com','$2a$10$akcichjDj2y7a2o0A1QjO.iv2lw811QgULWIsgj5RLe2Nq8ixhrCu','123',NULL,'0'),(48,'santiagogo3','hola@gmail.com','$2a$10$XGQZ7l5bdtApCKhw0VGTk.JAfOfibsaP44g2XhU7YHVxvPeIszuBK','123',NULL,'0'),(49,'santiagogo','hola@gmail.com','$2a$10$3Yvo1LEGsEgPDiYe9gXqfOaVx5g1LlNsLMxWD8LmM8OND08ddgI5O','123',NULL,'0'),(50,'santiagogo54','hola@gmail.com','$2a$10$U.HzMZjlKMgNm5jLgx77SecNNE32Z1NX/y03he9MEwy/uGNL3f5fG','123',NULL,'0'),(51,'santiagogo452','hola@gmail.com','$2a$10$syCoblPhlHqh735ZjzHGCuY7qhVhKs/R8Babp8lMCQQvcArECC12.','123',NULL,'0'),(52,'santiagogo543','hola@gmail.com','$2a$10$1qEDL17uYAIscc9PZ9MUvuZgQHrr6zRIzA1yX7AUxhhnKA0WppyT2','123',NULL,'0'),(53,'santiagogo0','hola@gmail.com','$2a$10$.HqyxLFFefrXHloXS6R4OeyDH2ih21h1CQIEZInAj6BWCQ4VZNlHW','123',NULL,'0'),(54,'santiagogo','hola@gmail.com','$2a$10$MBmnRt6ZCNiaPNWEQ4hw2.KHMKoJ4mJIIVZ0/LKezyhu60gLDF23.','123',NULL,'0');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userscars`
--

DROP TABLE IF EXISTS `userscars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userscars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_users` int(11) DEFAULT NULL,
  `id_userscar` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userscar_FK` (`id_users`),
  KEY `userscar_FK_1` (`id_userscar`),
  CONSTRAINT `userscar_FK` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`),
  CONSTRAINT `userscar_FK_1` FOREIGN KEY (`id_userscar`) REFERENCES `carproducts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userscars`
--

LOCK TABLES `userscars` WRITE;
/*!40000 ALTER TABLE `userscars` DISABLE KEYS */;
/*!40000 ALTER TABLE `userscars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'happy_cogind'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-16 19:32:45
