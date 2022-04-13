import { shallowMount } from '@vue/test-utils';
import LText from '@/components/LText';
import { textDefaultProps } from '@/defaultProps'

describe('LText.vue', () => {
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        href: ''
      }
    })
  })
  afterEach(() => {
    window.location = location
  })
  it('default LText render', () => {
    const msg = 'test'
    const props = {
      ...textDefaultProps,
      text: msg
    }
    const wrapper = shallowMount(LText, { props })
    // should have the right text
    expect(wrapper.text()).toBe(msg)
    // should be default div tag
    expect(wrapper.element.tagName).toBe('DIV')
    // should have certian css attr
    const style = wrapper.attributes().style
    expect(style.includes('font-size')).toBeTruthy()
    // should not have prop has be filtered
    expect(style.includes('actionType')).toBeFalsy()
  })
  it('LText with actionType and URL should trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      tag: 'h2'
    }
    const wrapper = shallowMount(LText, { props })
    expect(wrapper.element.tagName).toBe('H2')
    await wrapper.trigger('click')
    expect(window.location.href).toBe(props.url)
  })
  it('LText with isEditing should not trigger location change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      isEditing: true
    }
    const wrapper = shallowMount(LText, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe(props.url)
  })
})
