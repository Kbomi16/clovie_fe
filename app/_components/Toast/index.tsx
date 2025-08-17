import { ReactNode } from 'react'
import { HiCheckCircle, HiXCircle, HiExclamationCircle } from 'react-icons/hi'
import { ToastContainer, ToastPosition, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const option = {
  position: 'top-center' as ToastPosition,
  autoClose: 3000,
  hideProgressBar: true,
  closeButton: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
}

export const notify = (
  type: 'success' | 'error' | 'info',
  message: ReactNode,
) => {
  const icons = {
    success: <HiCheckCircle className="text-primary h-5 w-5" />,
    error: <HiXCircle className="h-5 w-5 text-red-500" />,
    info: <HiExclamationCircle className="h-5 w-5 text-yellow-400" />,
  }
  const toastClass = {
    success: 'toast-success',
    error: 'toast-error',
    info: 'toast-info',
  }
  toast(
    <div className="flex gap-4">
      <span>{icons[type]}</span>
      <div className="flex">{message}</div>
    </div>,
    {
      ...option,
      className: toastClass[type],
    },
  )
}

export default function Toast() {
  return <ToastContainer {...option} />
}
