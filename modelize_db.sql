-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2020 at 04:34 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `modelize_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `avatar`
--

CREATE TABLE `avatar` (
  `id` int(11) NOT NULL,
  `avatar_path` varchar(300) NOT NULL,
  `model_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `id_model` int(11) NOT NULL,
  `filename` varchar(300) NOT NULL,
  `image_path` varchar(300) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `id_model`, `filename`, `image_path`, `date`) VALUES
(23, 3, '3-IMG-2020826-599.jpg', 'http://192.168.1.145:8080/uploads/3-IMG-2020826-599.jpg', '2020-08-25 23:31:23'),
(25, 3, '3-IMG-2020826-808.jpg', 'http://192.168.1.145:8080/uploads/3-IMG-2020826-808.jpg', '2020-08-26 01:24:19');

-- --------------------------------------------------------

--
-- Table structure for table `models`
--

CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(400) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `color` varchar(10) DEFAULT NULL,
  `hair` varchar(25) DEFAULT NULL,
  `height` varchar(10) DEFAULT NULL,
  `avatar_path` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `models`
--

INSERT INTO `models` (`id`, `username`, `password`, `first_name`, `last_name`, `phone`, `color`, `hair`, `height`, `avatar_path`) VALUES
(1, 'berze', '$2b$10$cji9UtM6uMTOM6LBG4uLQOIQn/aXZTu7ZbSU30GyhZ8VoV6VjUDPm', NULL, NULL, '+50938576453', NULL, NULL, NULL, NULL),
(2, 'willio', '$2b$10$fhii74MAgnsq0JPq.q3oeeOGPQ1KlIbGJwZ/.cSQwSn4/NsfOqX4W', NULL, NULL, '+50938576452', NULL, NULL, NULL, 'http://192.168.43.109:8080/uploads/avatar/test.jpg'),
(3, 'hans', '$2b$10$4K4l23BEPQr4XAlqHmBnWOVUgPM3TtZacl/mxS4toeA7YS85DJpBO', NULL, NULL, '+50944102233', NULL, NULL, NULL, 'http://192.168.1.130:8080/uploads/avatar/test.jpg'),
(4, 'hacker', '$2b$10$7OOtfifTY6hQAf5rkpTG0.jqYAQiFFexFu2APaBceJ3cTKkClj0Am', NULL, NULL, '+50940000000', NULL, NULL, NULL, 'http://192.168.1.130:8080/uploads/avatar/test.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avatar`
--
ALTER TABLE `avatar`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avatar`
--
ALTER TABLE `avatar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
