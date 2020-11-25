import { getRandomArepa } from '../src';

describe('getRandomArepa', () => {
  it('returns a random arepa', () => {
    const arepa = getRandomArepa();
    expect(arepa.name).toBeDefined();
  });
  it('returns arepas colombianas when the origin option is set to Colombia', () => {
    const arepa = getRandomArepa({ origin: 'Colombia' });
    expect(arepa.origin).toBe('Colombia');
  });
  it('returns arepas venezolanas when the origin option is set to Venezuela', () => {
    const arepa = getRandomArepa({ origin: 'Venezuela' });
    expect(arepa.origin).toBe('Venezuela');
  });
});
