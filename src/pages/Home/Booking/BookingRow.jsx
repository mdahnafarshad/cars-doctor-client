const BookingRow = ({ booking, handleDelete }) => {

    const { _id, dueAmount, img, serviceName, date } = booking;

    


    return (
        <>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className="btn btn-square btn-sm btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceName}</div>
                            <div className="text-sm opacity-50">{date}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost badge-sm">{dueAmount}</span>
                </td>
                <td>{_id}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};

export default BookingRow;