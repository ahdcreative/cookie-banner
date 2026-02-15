// @vitest-environment happy-dom

import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import CookieBanner from './CookieBanner.vue';

describe('CookieBanner', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should be visible on mount if not accepted', async () => {
    const wrapper = mount(CookieBanner);
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.cookie-banner').exists()).toBe(true);
  });

  it('should not be visible on mount if accepted', async () => {
    localStorage.setItem('cookie:accepted', 'true');
    const wrapper = mount(CookieBanner);
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.cookie-banner').exists()).toBe(false);
  });

  it('should close and save to localStorage on accept', async () => {
    const wrapper = mount(CookieBanner);
    await wrapper.vm.$nextTick();
    const button = wrapper.find('button');

    await button.trigger('click');

    expect(localStorage.getItem('cookie:accepted')).toBe('true');
    // Wait for transition if needed, or check visible state bound to isOpen
    // Since transition is involved, we check internal state or element existence after update
    expect(wrapper.vm.isOpen).toBe(false);
  });

  it('should render custom message and button text', async () => {
    const wrapper = mount(CookieBanner, {
      props: {
        message: 'Custom Message',
        buttonText: 'Agree',
      },
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Custom Message');
    expect(wrapper.find('button').text()).toBe('Agree');
  });
});
