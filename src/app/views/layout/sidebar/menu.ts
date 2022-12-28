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
      {
        label: 'ajouter Actualite',
        link: '/dashboard/ajouterpost',
      },

    ]
  },
  {
    label: 'Appartement',
    icon: 'home',
    subItems: [
      {
        label: 'Appartements',
        link: '/appartements',
      },

      {
        label: 'ajouter Appartement',
        link: '/appartements/ajouterappartement',
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

  // {
  //   label: 'Icons',
  //   icon: 'unlock',
  //   subItems: [
  //     {
  //       label: 'Login',
  //       link: '/icons',
  //     },


  //   ]
  // },

  // {
  //   label: 'General',
  //   icon: 'unlock',
  //   subItems: [
  //     {
  //       label: 'Login',
  //       link: '/tables',
  //     },


  //   ]
  // },



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
