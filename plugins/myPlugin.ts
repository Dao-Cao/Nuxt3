import { ElLoading } from "element-plus"

export default defineNuxtPlugin(() => {
  const routerLoading = true
  const apiLoading = true
  let _loading: any;
  const show: () => void = () => {
    _loading = ElLoading.service({
      text: '処理中です。しばらくお待ちください。',
      customClass: 'font-default text-center',
    })
  }
  const hide: () => void = () => { _loading.close(); }
  return {
    provide: {
      show,
      hide,
      apiLoading,
      routerLoading
    }
  }
})
