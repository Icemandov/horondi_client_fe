import contactsReducer from '../contacts.reducer';
import { setContacts, getContacts, setLoading } from '../contacts.actions';

describe('Contacts reducer test', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      loading: true,
      contacts: []
    };
  });

  const contactsMock = [
    {
      phoneNumber: '380123123123',
      openHours: [
        {
          lang: 'ua',
          value: 'ПН-ПТ'
        },
        {
          lang: 'en',
          value: 'Mon - fri'
        }
      ],
      address: {
        city: [
          {
            lang: 'ua',
            value: '2'
          },
          {
            lang: 'en',
            value: '2'
          }
        ],
        postalCode: 79000,
        street: [
          {
            lang: 'ua',
            value: '2'
          },
          {
            lang: 'en',
            value: '2'
          }
        ],
        buildingNumber: [
          {
            lang: 'ua',
            value: '2'
          },
          {
            lang: 'en',
            value: '2'
          }
        ]
      }
    }
  ];

  it('Should return default state', () => {
    expect(contactsReducer(initialState, {})).toEqual(initialState);
  });

  it('Should return contacts state', () => {
    const state = {
      loading: true,
      contacts: contactsMock
    };

    expect(contactsReducer(state, setContacts(contactsMock))).toEqual(state);
  });

  it('should return state with contacts', () => {
    const state = {
      loading: true,
      list: contactsMock,
      activeArticle: null
    };

    expect(contactsReducer(state, getContacts())).toEqual(state);
  });

  it('Should enable loading', () => {
    const state = {
      ...initialState,
      loading: false
    };

    expect(contactsReducer(initialState, setLoading(false))).toEqual(state);
  });

  it('Should disable loading', () => {
    const state = {
      ...initialState,
      loading: false
    };

    expect(contactsReducer(initialState, setLoading(true))).toEqual(state);
  });
});
