// import React from 'react'

// const Notification = () => {
//   return (
//     <div>
//         <div className="notficationWrapper">

//         </div>
//     </div>
//   )
// }

// export default Notification


'use client';
import React, { useState, useRef, useEffect } from 'react';
import { GoBell } from "react-icons/go";


const notifications = [
    { id: 1, message: 'New comment on your post' },
    { id: 2, message: 'You have a new follower' },
    { id: 3, message: 'System update available' },
];

export default function NotificationDropdown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setOpen(!open);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="notification-wrapper" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="bell-button">
                <GoBell />
                {notifications.length > 0 && (
                    <span className="notification-badge">{notifications.length}</span>
                )}
            </button>

            {open && (
                <div className="notification-dropdown">
                    {notifications.length === 0 ? (
                        <div className="notification-item empty">No new notifications</div>
                    ) : (
                        notifications.map((notif) => (
                            <div key={notif.id} className="notification-item">
                                {notif.message}
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
