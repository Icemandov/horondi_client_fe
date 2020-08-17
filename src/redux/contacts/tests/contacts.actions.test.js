import { setContacts, getContacts, setLoading } from '../contacts.actions';
import { SET_CONTACTS, SET_LOADING, GET_CONTACTS } from '../contacts.types';

describe('Contacts actions test', () => {
  it('Should set contacts to payload property', () => {
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

    const result = {
      type: SET_CONTACTS,
      payload: contactsMock
    };

    expect(setContacts(contactsMock)).toEqual(result);
  });

  it('Should return contacts', () => {
    const result = {
      type: GET_CONTACTS
    };

    expect(getContacts()).toEqual(result);
  });
});

describe('Loading action', () => {
  test('Should enable loading', () => {
    const state = {
      type: SET_LOADING,
      payload: true
    };

    expect(setLoading(true)).toEqual(state);
  });

  test('Should disable loading', () => {
    const state = {
      type: SET_LOADING,
      payload: false
    };

    expect(setLoading(false)).toEqual(state);
  });
});
