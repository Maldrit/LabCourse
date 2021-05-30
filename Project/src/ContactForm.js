import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddContactFormModal} from './AddContactFormModal';

export class ContactForm extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'ContactForm')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    // deleteDep(depid){
    //     if(window.confirm('Are you sure?')){
    //         fetch(process.env.REACT_APP_API+'ContactForm/'+depid,{
    //             method:'DELETE',
    //             header:{'Accept':'application/json',
    //         'Content-Type':'application/json'}
    //         })
    //     }
    // }
    render(){
        const {deps, depid,depname}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(ContactForm=>
                            <tr key={ContactForm.Id}>
                                <td>{ContactForm.Id}</td>
                                <td>{ContactForm.Name}</td>
                                <td>{ContactForm.Email}</td>
                                <td>{ContactForm.message}</td>
                              
                                <td>
{/* <ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        depid:dep.DepartmentId,depname:dep.DepartmentName})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDep(dep.DepartmentId)}>
            Delete
        </Button>

        <EditDepModal show={this.state.editModalShow}
        onHide={editModalClose}
        depid={depid}
        depname={depname}/>
</ButtonToolbar> */}

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add ContactForm</Button>

                    <AddContactFormModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}