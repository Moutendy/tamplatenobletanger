import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [

  {
    label: 'Actualite',
    icon: 'globe',
    subItems: [
      {
        label: 'actu',
        link: '/',
      },


    ]
  },
  {
    label: 'Appartement',
    icon: 'home',
    subItems: [
      {
        label: 'Login',
        link: '/auth/login',
      },


    ]
  },

  {
    label: 'Utilisateur',
    icon: 'users',
    subItems: [
      {
        label: 'users',
        link: '/users',
      },


    ]
  },

  {
    label: 'Icons',
    icon: 'unlock',
    subItems: [
      {
        label: 'Login',
        link: '/icons',
      },


    ]
  },

  {
    label: 'General',
    icon: 'unlock',
    subItems: [
      {
        label: 'Login',
        link: '/tables',
      },


    ]
  },



  {
    label: 'Deconnexion',
    icon: 'log-in',
    subItems: [
      {
        label: 'Deconnexion',
        link: '/auth/login',
      },


    ]
  },

];
