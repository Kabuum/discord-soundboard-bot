export function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-4 w-96 shadow-lg flex flex-col gap-4">
                {children}
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 self-end"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
