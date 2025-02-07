<?php

namespace App\Helpers;

class DateHelper
{
    const TIMEZONE = 'Europe/Ulyanovsk';
    const MONTHS_WITH_31_DAYS = [1, 3, 5, 7, 8, 10, 12];
    const MONTHS_WITH_30_DAYS = [4, 6, 9, 11];
    const MONTH_IS_FEBRUARY = 2;

    public static function isLeap($year)
    {
        return date("L", mktime(0,0,0, 7,7, $year));
    }

    public static function isCorrectMonth($month)
    {
        if ($month >= 1 && $month <= 12) {
            return 1;
        }
    }

    public static function validateDate($date)
    {
        $isLeap = self::isLeap($date['year']);

        if ($date['year'] < 0) {
            return false;
        }
        
        if ($date['month'] < 1 || $date['month'] > 12) {
            return false;
        }

        if (
            $date['month'] == self::MONTH_IS_FEBRUARY
            && (
                ($isLeap && $date['day'] > 29)
                || (!$isLeap && $date['day'] > 28)
            )
        ) {
            return false;
        }

        if (
            $date['day'] >= 1 
            && (
                (in_array($date['month'], self::MONTHS_WITH_31_DAYS) && $date['day'] <= 31)
                || (in_array($date['month'], self::MONTHS_WITH_30_DAYS) && $date['day'] <= 30)
            )
        ) {
            return true;
        }

        return true;
    }

    public function dateToTimestamp($date)
    {
        if (is_array($date)) {
            $day = $date['day'];
            $month = $date['month'];
            $year = $date['year'];
        } else {
            $day = $date->day;
            $month = $date->month;
            $year = $date->year;            
        }

        $timestamp = strtotime("{$month}/{$day}/{$year}");
        return $timestamp;
    }   

    public static function convertTimestampToDate($timestamp) {
        $date = new \DateTime();
        $date->setTimestamp($timestamp);
        return $date;
    }

    public static function getCurrentDate() 
    {
        $now = new \DateTime();
        $now->settime(0,0);
        $timezone = new \DateTimeZone(self::TIMEZONE); // needs to make setting by localization
        $now->setTimezone($timezone);
        return $now;
    }

    public static function getDiffDate($nowDate, $compare_date)
    {
        $difference = $nowDate->diff($compare_date)->format('%R%a');
        return $difference;
    }
}