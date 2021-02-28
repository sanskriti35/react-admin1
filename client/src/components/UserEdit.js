import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

function UserEdit(props) {
    return (
        <Edit title = 'Edit user' {...props}>
            <SimpleForm>
                <TextInput source = 'name'/>
                <TextInput source = 'email'/>
                <TextInput multiline source = 'body'/>
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit
