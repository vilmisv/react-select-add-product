import React from 'react';
import { Component, useState } from 'react';
import Select from 'react-select';

export default class AddProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectOptions: [],
            price: "",
            name: "",
            show: false,
            showEdit: false,
        }
    }


    getOptions() {

        const data = [
            {
                name: "TV",
                price: 140
            },
            {
                name: "Phone",
                price: 150
            },
            {
                name: "Watch",
                price: 140
            },
            {
                name: "Laptop",
                price: 100
            },
        ]
        const options = data.map(d => ({
            "value": d.price,
            "label": d.name
        }))

        this.setState({selectOptions: options})
    }

    handleChange(e) {
        this.setState({price: e.value * (1 + 21 / 100), name: e.label})
    }

    handleChangeTax(e) {
        this.setState({price: this.state.price = e.value}) 
    }

    componentDidMount() {
        this.getOptions()
    }

    render() {
        return (
            <div>
                <Select className='select'
                    options={this.state.selectOptions} 
                    onChange={this.handleChange.bind(this)}
                />
                <button 
                    onClick={() => this.setState({show: !this.state.show})}
                >save
                </button>
                {this.state.show && 
                    <div>   
                        <div>
                            <span>name:</span><span> </span>{ this.state.name}    
                        </div>
                        <div>
                            <span>price: </span><span> </span> {this.state.price}                                 
                        </div>
                        <button>Delete</button>
                        <button 
                            onClick={() => this.setState({showEdit: !this.state.showEdit})}>Edit
                        </button>
                    </div>}
                {this.state.showEdit && 
                    <div>
                        <Select className='select' 
                        onChange={this.handleChange.bind(this)} 
                        options={this.state.selectOptions} 
                        />
                        <button>21% tax</button>
                        <button onClick={this.handleChangeTax.bind(this)}>15% tax</button>
                    </div>}
            </div>
        )
    }
}


