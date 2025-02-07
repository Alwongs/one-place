-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Фев 04 2025 г., 20:14
-- Версия сервера: 5.7.21-20-beget-5.7.21-20-1-log
-- Версия PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `alwong9h_blog`
--

-- --------------------------------------------------------

--
-- Структура таблицы `events`
--
-- Создание: Июн 23 2024 г., 13:56
-- Последнее обновление: Фев 03 2025 г., 13:59
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `event` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `timestamp` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `events`
--

INSERT INTO `events` (`id`, `title`, `description`, `timestamp`, `type`, `user_id`, `created_at`, `updated_at`) VALUES
(67, 'Показания счётчиков', NULL, '1740168000', 'M', 1, NULL, '2025-01-23 13:25:59'),
(72, 'Оплатить Evo интернет', NULL, '1740945600', 'M', 1, NULL, '2025-02-03 10:59:18'),
(74, 'Оплатить кредит ВТБ', NULL, '1738886400', 'M', 1, NULL, '2025-01-10 06:55:27'),
(75, 'Квартплата', NULL, '1739577600', 'M', 1, NULL, '2025-01-18 12:14:53'),
(77, 'Страхование квартиры (ИПОТЕКА)', NULL, '1755806400', 'A', 1, NULL, '2024-08-20 14:47:59'),
(78, 'Оплата налогов', NULL, '1761955200', 'A', 1, NULL, '2024-10-28 08:21:17'),
(79, 'День рождения Оксана Чертёнок', NULL, '1763755200', 'A', 1, NULL, '2024-11-22 07:46:00'),
(80, 'ДР Ксюша Ситник 4 декабря', '4 декабря', '1764806400', 'A', 1, NULL, '2024-12-04 14:40:13'),
(82, 'День рождения Костина Анна', NULL, '1768075200', 'A', 1, NULL, '2025-01-11 09:28:19'),
(83, 'Cтрахование жизни (ИПОТЕКА)', NULL, '1768420800', 'A', 1, NULL, '2025-01-11 09:28:25'),
(84, 'День рождения Пляц', '', '1769893200', 'A', 1, NULL, '2025-02-03 05:17:18'),
(85, 'День рождения Майя Пчёлка', 'День рождения - 6 февраля', '1738789200', 'A', 1, NULL, NULL),
(87, 'День рождения мамы', NULL, '1745798400', 'A', 1, NULL, '2024-05-02 10:36:21'),
(88, 'День рождения Артём Гелунг', NULL, '1747166400', 'A', 1, NULL, '2024-05-16 15:36:02'),
(90, 'День рождения Сэм Гелунг', '12 июня', '1749686400', 'A', 1, NULL, '2024-06-12 09:35:40'),
(101, 'Оплатить ИПОТЕКУ', NULL, '1740686400', 'M', 1, NULL, '2025-01-30 06:02:36'),
(107, 'День рождения Оксана Гелунг', '30 июня', '1751241600', 'A', 1, '2024-06-30 16:21:31', '2024-06-30 16:21:41'),
(153, 'Заказать хвойный бальзам', NULL, '1735430400', 'U', 1, '2024-12-29 12:09:02', '2024-12-29 12:09:02');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `events_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
