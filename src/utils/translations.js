import store from '../store/configureStore';

export const localize = key => {
   const state = store.getState();

   return state.language.language === 'sr' ?
      translations[key].sr :
      translations[key].en
}

export const translations = {
   contact: {
      en: 'contact',
      sr: 'kontakt'
   },
   emaiReqlResponse: {
      en: 'E-mail is required only if you want my response.',
      sr: 'E-mail je obavezan samo ako želite da vam i odgovorim.'
   },
   jasna: {
      en: 'Jasna Amros-Vukelic',
      sr: 'Jasna Amroš-Vukelić'
   },
   leaveYourMsg: {
      en: 'Leave your messsage and I will reply to you shortly.',
      sr: 'Pošaljite mi poruku i brzo ću vam odgovoriti.'
   },
   message: {
      en: 'message',
      sr: 'poruka'
   },
   psychotherapy: {
      en: 'psychotherapy',
      sr: 'psihoterapija'
   },
};