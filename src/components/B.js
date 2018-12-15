import React, { Component } from 'react';
import styles from './B.module.css';

class B extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() { 
        return ( 
            <div className={styles.Bcontainer}>
                <h1>B Container</h1>
            </div>
         );
    }
}
 
export default B;