import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VisorNumbers from '../VisorNumbers.vue'

describe('VisorNumbers', () => {
  const wrapper = mount(VisorNumbers, { props: { numbers: [1, 2, 3] } })
  it('renders properly with one button', () => {
    expect(wrapper.findAll('button')).length(1)
  })
  it('renders a form', () => {
    expect(wrapper.find('form').exists()).toBe(true)
  })
})
