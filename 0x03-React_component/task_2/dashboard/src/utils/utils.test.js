import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test suite for utils', () => {

  it('tests getFullYear function returns correct year 2022', () => {
    expect(getFullYear()).toBe(2022);
  })

  it('tests getFooterCopy returns based on boolean', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  })

  it('tests getLatestNotification returns html object', () => {
    expect(getLatestNotification()).toStrictEqual({ __html: `<strong>Urgent requirement</strong> - complete by EOD` });
  })
})
