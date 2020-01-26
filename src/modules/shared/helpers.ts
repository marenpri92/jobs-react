import moment from 'moment';

export const dateFormatter = (date: Date) => moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY');