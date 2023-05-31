-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2023 at 02:04 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `megstamiausifilmai`
--

-- --------------------------------------------------------

--
-- Table structure for table `filmai`
--

CREATE TABLE `filmai` (
  `ID` int(10) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Type` varchar(20) NOT NULL,
  `Year` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `filmai`
--

INSERT INTO `filmai` (`ID`, `Name`, `Type`, `Year`) VALUES
(9, 'Harry Potter', 'Fiction', 1997),
(10, 'Scream VI', 'Horror', 2023),
(16, 'The Wolf of Wall Street', 'Drama/Criminal', 2013),
(17, 'John Wick', 'Action', 2014),
(18, 'Tetris', 'Biography', 2023),
(19, 'Spider-Man', 'Action/Fiction', 2002),
(20, 'Peaky Blinders', 'Action', 2013),
(21, 'Breaking Bad', 'Drama', 2008),
(22, 'Joker', 'Psychological ', 2019),
(23, 'Initial D', 'Action', 2005);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `filmai`
--
ALTER TABLE `filmai`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `filmai`
--
ALTER TABLE `filmai`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
