import React, {Component} from 'react';

class NoMatch extends Component {
    render() {
        return (
            <div style={{
                padding: '20px auto',
                textAlign: 'center',
                color: '#1DA57A',
            }}>
                404 Not Pages
                <p>This Page is Not Exist !</p>
            </div>
        );
    }
}

export default NoMatch;