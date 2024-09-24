import dayjs from 'dayjs';

export function getDayDate(date: string | number): string {
  if (!date) return '--:--';
  const startToday = dayjs().startOf('day').unix();
  const startYesterday = dayjs().subtract(1, 'day').startOf('day').unix();
  const dataItem = typeof date === 'string' ? dayjs(date).unix() : date;

  if (dataItem >= startToday) return dayjs.unix(dataItem).format('HH:mm');

  if (dataItem >= startYesterday && dataItem < startToday)
    return 'yesterday ' + dayjs.unix(dataItem).format('HH:mm');

  return dayjs.unix(dataItem).format('DD-MM HH:mm');
}
