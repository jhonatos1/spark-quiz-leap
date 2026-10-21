import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CHECKOUT_URL, getCheckoutUrl } from '../src/lib/checkout.ts';

test('direct visits have no affiliate parameter', () => {
  for (const search of ['', '?utm_source=instagram', '?afid=', '?afid=unknown', '?afid=https://example.com']) {
    assert.equal(getCheckoutUrl(search), CHECKOUT_URL);
  }
});
test('approved affiliate is forwarded to the same product', () => {
  assert.equal(getCheckoutUrl('?afid=GTAv1Ygf'), CHECKOUT_URL + '?afid=GTAv1Ygf');
});
test('other parameters cannot change the destination or leak to checkout', () => {
  assert.equal(getCheckoutUrl('?afid=GTAv1Ygf&utm_source=instagram&redirect=https://example.com'), CHECKOUT_URL + '?afid=GTAv1Ygf');
});
test('ambiguous affiliate identifiers are not forwarded', () => {
  assert.equal(getCheckoutUrl('?afid=GTAv1Ygf&afid=unknown'), CHECKOUT_URL);
});
test('a later direct visit does not inherit an earlier affiliate visit', () => {
  getCheckoutUrl('?afid=GTAv1Ygf');
  assert.equal(getCheckoutUrl(''), CHECKOUT_URL);
});
