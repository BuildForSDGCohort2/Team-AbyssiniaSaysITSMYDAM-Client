import { InMemoryCache, makeVar } from '@apollo/client';

export const filtersVar = makeVar({
  productName: '',
  uniqueAttributes: {
    geographicalDesignation: '', grade: '', group: '', uniqueName: '', flowerType: '',
  },
});

export const currentUserVar = makeVar({
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  loggedIn: false,
  role: '',
  country: '',
  city: '',
});

export const commentsVar = makeVar({
  comments: [],
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        filters: {
          read() {
            return filtersVar();
          },
        },
        currentuser: {
          read() {
            return currentUserVar();
          },
        },
        comments: {
          read() {
            return commentsVar();
          },
        },
      },
    },
  },
});
