import React, { useState } from 'react';

function ProfileDetail() {

    return (
        <div className="profile-detail-section" id="profile-detail">
            <div className="container pad-10">
                <div className="row text-left">
                    <div className="col-lg-2 bold-700">
                        <div className="name">Name</div>
                        <div className="email">Email</div>
                        <div className="phone">Phone</div>
                        <div className="address">Address</div>
                    </div>
                    <div className="col-lg-10">
                        <div className="name">Sandeep</div>
                        <div className="email">johndoe@mail.com</div>
                        <div className="phone">+91-740-625-4748</div>
                        <div className="address">15 BI Lines, Nasirabad, Ajmer</div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ProfileDetail;