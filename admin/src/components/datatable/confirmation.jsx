
const ConfirmDelete = ({open, message, onConfirm, onCancel}) => {
    if(!open) {
        return null
    }

    return (
    <div className='fixed inset-0 bg-blue-200 opacity-80 z-50 flex items-center justify-center overflow-hidden'>
    <div className="bg-white rounded-xl opacity-100 shadow-lg">
    <h1 className="text-black text-5xl">{message}</h1>

    <div className='flex flex-col'>
        <button onClick={onConfirm} className='bg-red-500 rounded-ml w-20 h-20'>
            Confirm
        </button>
        <button onClick={onCancel} className='bg-blue-500 rounded-ml w-20 h-20'>
            Cancel
        </button>
    </div>
    </div>
    </div>
    )
}

export default ConfirmDelete