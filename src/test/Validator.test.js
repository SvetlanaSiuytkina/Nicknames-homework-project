import Validator from '../Validator';

let validator;

beforeEach(() => {
  validator = new Validator();
});

test('correct user name', () => {
  expect(validator.validateUsername('frontend-ninja')).toBe(true);
  expect(validator.validateUsername('Mag_javascript')).toBe(true);
  expect(validator.validateUsername('compiler123wizard')).toBe(true);
});

test('no string passes validation', () => {
  expect(validator.validateUsername(777)).toBe(false);
  expect(validator.validateUsername(undefined)).toBe(false);
  expect(validator.validateUsername(null)).toBe(false);
});

test('an empty string does not pass verification', () => {
  expect(validator.validateUsername('')).toBe(false);
});

test('a name with invalid characters fails the check', () => {
  expect(validator.validateUsername('console@Hacker')).toBe(false);
  expect(validator.validateUsername('hero#commit')).toBe(false);
  expect(validator.validateUsername('Rescuer%from*undefined')).toBe(false);
});

test('a name with numbers at the beginning does not pass the check', () => {
  expect(validator.validateUsername('999max')).toBe(false);
});

test('a name with numbers at the end does not pass the check', () => {
  expect(validator.validateUsername('max999')).toBe(false);
});

test('a name with an underscore at the beginning does not pass the check', () => {
  expect(validator.validateUsername('_max')).toBe(false);
});

test('a name with an underscore at the end does not pass the check', () => {
  expect(validator.validateUsername('max_')).toBe(false);
});

test('a name with a dash at the beginning does not pass the check', () => {
  expect(validator.validateUsername('-max')).toBe(false);
});

test('a name with a dash at the end does not pass the check', () => {
  expect(validator.validateUsername('max-')).toBe(false);
});

test('a name with 4 consecutive digits fails the check', () => {
  expect(validator.validateUsername('max1234max')).toBe(false);
});
