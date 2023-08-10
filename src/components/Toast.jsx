const Toast = ({ data }) => {
    return data?.status ? (
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-4 bg-green-500 text-white px-4 py-2 rounded shadow">
            <p className="text-sm">{data.message}</p>
        </div>
    ) : null
}

export default Toast
