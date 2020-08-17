import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import { handleContactsLoad } from '../contacts.sagas';
import { setContacts, setLoading } from '../contacts.actions';
import { setError } from '../../error/error.actions';
import getItems from '../../../utils/client';

describe('Should get contacts saga', () => {
  it('Should fetches contacts', () => {
    const contactsMock = {
      data: {
        getAllcontacts: {
          contacts: [
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
                    value: 'Місто'
                  },
                  {
                    lang: 'en',
                    value: 'City'
                  }
                ],
                postalCode: 79000,
                street: [
                  {
                    lang: 'ua',
                    value: 'Вулиця'
                  },
                  {
                    lang: 'en',
                    value: 'Street'
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
          ]
        }
      }
    };

    return expectSaga(handleContactsLoad)
      .provide([[matchers.call.fn(getItems), contactsMock]])
      .put(setLoading(true))
      .put(setContacts(contactsMock.data.getAllcontacts))
      .put(setLoading(false))
      .run();
  });
});

it('Should handles errors', () => {
  const e = new Error('Contacts not found');

  return expectSaga(handleContactsLoad)
    .provide([[matchers.call.fn(getItems), throwError(e)]])
    .put(setLoading(true))
    .put(setLoading(false))
    .put(setError({ e }))
    .run();
});
