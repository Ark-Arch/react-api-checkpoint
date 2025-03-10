import React from 'react'

const KnowMoreTable = ({subject, aboutAddress, aboutCompany}) => {

    return (
        <>
            <table class="table">
                <thead>
                </thead>
                {
                    subject=='company' ? (    
                        <tbody>
                            <tr>
                            <th scope="row">Name</th>
                            <td>{aboutCompany.name}</td>
                            </tr>
                            <tr>
                            <th scope="row">Catch Phrase</th>
                            <td>{aboutCompany.catchPhrase}</td>                    
                            </tr>
                            <tr>
                            <th scope="row">Buzzwords</th>
                            <td>{aboutCompany.bs}</td>
                            </tr>
                        </tbody>
                    ) : (    
                        <tbody>
                            <tr>
                            <th scope="row">City</th>
                            <td>{aboutAddress.city}</td>
                            </tr>
                            <tr>
                            <th scope="row">Zip Code</th>
                            <td>{aboutAddress.zipcode}</td>                    
                            </tr>
                            <tr>
                            <th scope="row">Street</th>
                            <td>{aboutAddress.street}</td>
                            </tr>
                            <tr>
                            <th scope="row">Suite</th>
                            <td>{aboutAddress.suite}</td>
                            </tr>
                            <tr>
                            <th scope="row">Geo Location</th>
                            <td>{`Lat: ${aboutAddress.geo.lat}; Lng: ${aboutAddress.geo.lng}`}</td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </>
    )
}

export default KnowMoreTable