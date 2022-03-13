import { assert } from 'chai';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test suite for utils', () => {

  it('tests getFullYear function returns correct year 2022', () => {
    assert.equal(getFullYear(), '2022', 'getFullYear did not return 2022');
  })

  it('tests getFooterCopy returns based on boolean', () => {
    assert.equal(
      getFooterCopy(true),
      'Holberton School',
      'getFooterCopy did not return the index footer');
    assert.equal(
      getFooterCopy(false),
      'Holberton School main dashboard',
      'getFooterCopy did not return the dashboard footer');
  })

  it('tests getLatestNotification returns html object', () => {
    assert.deepEqual(
      getLatestNotification(),
      { __html: `<strong>Urgent requirement</strong> - complete by EOD` },
      'getLatestNotification did not return html object');
  })
})
