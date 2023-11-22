import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TitleApp from '../TitleApp.vue'

describe('TitleApp', () => {
  it('renders properly', () => {
    const wrapper = mount(TitleApp, { props: { title: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
