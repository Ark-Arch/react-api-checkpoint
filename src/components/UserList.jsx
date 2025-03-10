import React, {useState, useEffect} from 'react'
import axios from 'axios'
import KnowMore from './KnowMore'

const UserList = () => {
    const [listOfUsers, setList] = useState([])

    useEffect(()=>{
        getUsers()
    }, [])

    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
                const persons = res.data
                console.log(persons)
                const data = persons.map((person, index) => (
                    <tr key={index}>
                        <th scope="row">{person.id}</th>
                        <td>{person.username}</td>
                        <td>{person.name.split(' ')[0]}</td>
                        <td>{person.name.split(' ')[1]}</td>
                        <td>{person.email}</td>
                        <td>{person.phone}</td>
                        <td>{person.website}</td>
                        <td>{person.company.name}<br/>
                            <KnowMore key={`company-${index}`} username={person.username} subject={'company'} aboutCompany={person.company}/>
                        </td>
                        <td>{person.address.city}<br/>
                            <KnowMore key={`address-${index}`} username={person.username} subject={'address'} aboutAddress={person.address}/>
                        </td>
                    </tr>
                ))
                setList(data)
            })
            .catch(err=>console.log(err))
    }

    return(
        <>
            <table className="table table-hover text-center">
                <thead>
                    <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">UserName</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Second Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone number</th>
                    <th scope='col'>Website</th>
                    <th scope="col">company</th>
                    <th scope="col">address</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfUsers}
                </tbody>
            </table>
        </>
    )
}

export default UserList