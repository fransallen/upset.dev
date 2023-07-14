"use client";

import { useEffect, useState } from "react";

interface DateInRealtimeProps {
  targetDate: Date;
}

const DateInRealtime: React.FC<DateInRealtimeProps> = ({ targetDate }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateDateInRealtime = () => {
    const difference = currentTime.getTime() - targetDate.getTime();

    const millisecondsInSecond = 1000;
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;
    const daysInMonth = 30;
    const monthsInYear = 12;

    const secondstime = Math.floor(difference / millisecondsInSecond);
    const minutestime = Math.floor(secondstime / secondsInMinute);
    const hourstime = Math.floor(minutestime / minutesInHour);
    /* const daysPassed = Math.floor(hourstime / hoursInDay); */

    const remainingHours = hourstime % hoursInDay;
    const remainingMinutes = minutestime % minutesInHour;
    const remainingSeconds = secondstime % secondsInMinute;

    const totalDaystime = Math.floor(
      difference /
        (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay),
    );
    const monthstime = Math.floor(totalDaystime / daysInMonth);

    const targetMonth = targetDate.getMonth();
    const targetDay = targetDate.getDate();

    let yearstime = currentTime.getFullYear() - targetDate.getFullYear();
    if (
      currentTime.getMonth() < targetMonth ||
      (currentTime.getMonth() === targetMonth &&
        currentTime.getDate() < targetDay)
    ) {
      yearstime--;
    }

    const adjustedDaystime = totalDaystime % daysInMonth;
    const adjustedMonthstime = monthstime % monthsInYear;

    const timeString = `${adjustedDaystime} days, ${adjustedMonthstime} months, ${yearstime} years, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;
    return timeString;
  };

  const timeString = calculateDateInRealtime();

  return <span suppressHydrationWarning>{timeString}</span>;
};

export default DateInRealtime;
