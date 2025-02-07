<?php

namespace App\Helpers;

use App\Enum\Calendar;
use App\Models\ScheduleDay as ScheduleDayModel;
use Illuminate\Support\Facades\Auth;

class ScheduleDayHelper
{
    const DAY = 'D';
    const NIGHT = 'N';
    const DAY_OFF = 'O';
    const FULL_DAY_PERIOD = [
        self::DAY => 'Day',
        self::NIGHT => 'Night',
        self::DAY_OFF => 'Day off'
    ];
    const WORK_SCHEDULE = [
        self::DAY, self::DAY, self::DAY,
        self::DAY_OFF, self::DAY_OFF, self::DAY_OFF,
        self::NIGHT, self::NIGHT, self::NIGHT,
        self::DAY_OFF, self::DAY_OFF, self::DAY_OFF,
    ];  

    public static function checkIfToday($day)
    {
        $year = $day->year;
        $month = $day->month > 9 ? $day->month : "0" . $day->month;
        $day = $day->day > 9 ? $day->day : "0" . $day->day;
        $dateToCheck =  $year . "-" . $month . "-" . $day;           '2023-10-04'; // Пример даты для проверки
        $dateTimeToCheck = new \DateTime($dateToCheck);

        $today = new \DateTime();
        
        if ($dateTimeToCheck->format('Y-m-d') === $today->format('Y-m-d')) {
            return true;
        } else {
            return false;
        }        
    }

    public static function isDayPassed($day)
    {
        $year = $day->year;
        $month = $day->month > 9 ? $day->month : "0" . $day->month;
        $day = $day->day > 9 ? $day->day : "0" . $day->day;
        $dateToCheck =  $year . "-" . $month . "-" . $day;           '2023-10-04'; // Пример даты для проверки
        $dateTimeToCheck = new \DateTime($dateToCheck);
        
        // Создаем объект DateTime для текущего времени
        $currentDateTime = new \DateTime();
        
        // Устанавливаем время на начало следующего дня для даты, которую проверяем
        $nextDay = clone $dateTimeToCheck; // Клонируем объект
        $nextDay->setTime(0, 0); // Устанавливаем время на 00:00
        $nextDay->modify('+1 day'); // Переходим к следующему дню
        
        // Проверяем, истек ли день
        if ($currentDateTime >= $nextDay) {
            return true;
        } else {
            return false;
        }
    }


    public static function createMonthSchedule($schedule_data)
    {


        $days_in_month = cal_days_in_month(CAL_GREGORIAN, $schedule_data['month'], $schedule_data['year']);

        $currentShiftTimeIndex = $schedule_data['first_day_shift_index'];

        foreach (range(1, $days_in_month) as $day) {

            $date = new \DateTime($schedule_data['year']."-".$schedule_data['month']."-".$day);

            ScheduleDayModel::create([
                'user_id' => Auth::id(),
                'year' => $schedule_data['year'],
                'month' => $schedule_data['month'],
                'day' => $day,
                'shift_type' => self::WORK_SCHEDULE[$currentShiftTimeIndex],
                'week_day' => $date->format('N'),
                'timestamp' => $date->getTimestamp(),
            ]);

            $currentShiftTimeIndex = self::getNextIndex($currentShiftTimeIndex);
        }
    }

    private static function getNextIndex($currentIndex)
    {
        if ($currentIndex < count(self::WORK_SCHEDULE) - 1) {
            return $currentIndex + 1;
        } else {
            return 0;
        }
    }

    public static function getNextWeekDay($currentWeekDay)
    {
        if ($currentWeekDay < count(Calendar::WEEK_DAYS)) {
            return $currentWeekDay + 1;
        } else {
            return 1;
        }
    }   
    
    public static function formatMonth($month_days)
    {
        $year = $month_days[0]->year;
        $month = $month_days[0]->month;
        $weeks = [];
        $week_number = 1;
        $currentTS = time();

        $work_days_qty = 0;
        $work_nights_qty = 0;
        $days_off_qty = 0;

        foreach ($month_days as $key => $day) {

            foreach ([1,2,3,4,5,6,7] as $week_day) {

                if (!isset($weeks[$week_number][$week_day])) {

                    $weeks[$week_number][$week_day] = [
                        "is_today" => false,
                        "is_gone" => false,
                        "day" => "",
                        "shift_type" => "",
                        "week_day" => $week_day
                    ];
                }
            }

            $keyTS = strtotime($key . '-' . $month . '-' . $year);

            $is_gone = false;
            // timezone shifts
            if ($day["work_shift"] == self::DAY) {

                $is_gone = ($currentTS + 8 * 60 * 60 > $keyTS + 60 * 60 * 24) ? true : false;
                $work_days_qty = $work_days_qty + 1;

            } else if ($day["work_shift"] == self::NIGHT) {

                $is_gone = ($currentTS - 4 * 60 * 60 > $keyTS + 60 * 60 * 24) ? true : false;
                $work_nights_qty = $work_nights_qty + 1;

            } else if ($day["work_shift"] == self::DAY_OFF) {

                $is_gone = ($currentTS + 8 * 60 * 60 > $keyTS + 60 * 60 * 24) ? true : false;
                $days_off_qty = $days_off_qty + 1;
            }

            $is_today = ($currentTS > $keyTS + 60 * 60 * 4 && $currentTS < $keyTS + 60 * 60 * 28) ? true : false;

            $weeks[$week_number][$day['week_day']] = [
                "is_today" => $is_today,
                "is_gone" => $is_gone,
                "day" => $day['day'],
                "shift_type" => $day["shift_type"],
                "week_day" => $day["week_day"],
            ];
            if ($day['week_day'] == 7) {
                $week_number = $week_number + 1;
            }
        }

        return [
            'weeks' => $weeks,
            'additional_data' => [
                "work_days_qty" => $work_days_qty,
                "work_nights_qty" => $work_nights_qty,
                "days_off_qty" => $days_off_qty,
            ]
        ];        
    }
}