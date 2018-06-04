-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2018 at 08:45 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timer_ticker`
--

-- --------------------------------------------------------

--
-- Table structure for table `book_time`
--

CREATE TABLE `book_time` (
  `id` int(11) NOT NULL,
  `clock_in` datetime NOT NULL,
  `clock_out` datetime NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `book_time`
--

INSERT INTO `book_time` (`id`, `clock_in`, `clock_out`, `description`) VALUES
(9, '2018-05-23 00:00:05', '2018-05-23 19:07:51', 'Fugiat exercitation non elit consectetur aliquip commodo esse labore amet culpa reprehenderit. Officia sit cupidatat esse consectetur quis aute pariatur occaecat nisi officia. Irure mollit tempor id dolore pariatur consectetur ea commodo occaecat enim aute ipsum.'),
(23, '2018-05-25 00:03:13', '2018-05-25 08:19:33', 'Adding search feature'),
(24, '2018-05-25 00:12:04', '2018-05-25 19:51:06', 'hello'),
(54, '2018-05-18 08:46:00', '2018-05-18 12:56:00', 'from APP :) 13'),
(57, '2018-06-01 00:00:22', '2018-06-01 09:23:44', 'new 1');

-- --------------------------------------------------------

--
-- Table structure for table `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migration_versions`
--

INSERT INTO `migration_versions` (`version`) VALUES
('20180517080727');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book_time`
--
ALTER TABLE `book_time`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book_time`
--
ALTER TABLE `book_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
