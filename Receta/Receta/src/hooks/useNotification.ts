import { toast, ToastOptions } from 'react-toastify'


const useNotification = () => {
  const baseOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light', 
  }
  const notify = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    toast[type](message, baseOptions)
  }

  return { notify }
}

export default useNotification
