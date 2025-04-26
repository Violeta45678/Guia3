interface LoadingSpinnerProps {
  fullScreen?: boolean
  message?: string
}

const LoadingSpinner = ({ fullScreen = false, message }: LoadingSpinnerProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen ? 'min-h-screen' : 'py-12'
      } bg-transparent`}
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-red-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900"></div>
      </div>
      {message && (
        <p className="mt-4 text-base text-gray-700 dark:text-gray-300 font-medium tracking-wide">
          {message}
        </p>
      )}
    </div>
  )
}

export default LoadingSpinner
