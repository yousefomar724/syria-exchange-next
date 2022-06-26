import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale";
import i18next from 'i18next';

export default (date) => format(date, "eeee     dd/MM/yyyy   hh:mm ", {
  locale: i18next.language === "ar" ? ar : enUS,
})