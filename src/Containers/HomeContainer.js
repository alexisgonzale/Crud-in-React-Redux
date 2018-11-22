import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import AppFrame from '../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

class HomeContainer extends Component {
    handleOnClick = () => {
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header='Inicio'
                    body={
                        <div>
                            {/* <img src="https://lh6.googleuser"/> */}
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                ></AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);