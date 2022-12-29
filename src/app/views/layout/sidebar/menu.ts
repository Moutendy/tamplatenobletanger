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
        label: 'Ajouter Appartement',
        link: '/appartements/ajouterappartement',
      },

      {
        label: 'Ville',
        link: '/appartements/ville',
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
      {
        label: 'visiteur',
        link: '/users/visiteur',
      },


    ]
  },

  {
    label: 'Films',
    icon: 'film',
    subItems: [
      {
        label: 'ciné',
        link: '/video',
      },


    ]
  },

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
