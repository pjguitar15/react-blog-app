const TopProgressBar = ({ uploadProgress }: { uploadProgress: number }) => {
  return (
    <>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div
          style={{ width: `${uploadProgress}%` }}
          className={`h-1 bg-green-400 absolute inset-0`}
        ></div>
      )}
    </>
  )
}

export default TopProgressBar
