// jest.mock('@/services/api', () => ({
//     fetchData: jest.fn(() => Promise.resolve({ data: 'mocked data' }))
//   }))
  
//   import { mount } from '@vue/test-utils'
//   import MyComponent from '@/components/MyComponent.vue'
//   import { fetchData } from '@/services/api'
  
//   describe('MyComponent.vue', () => {
//     it('fetches data on mount', async () => {
//       const wrapper = mount(MyComponent)
//       await wrapper.vm.$nextTick()
//       expect(fetchData).toHaveBeenCalled()
//       expect(wrapper.vm.data).toBe('mocked data')
//     })
//   })