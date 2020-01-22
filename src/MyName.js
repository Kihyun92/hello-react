import React from 'react';

// class MyName extends Component {
//     static defaultProps = {
//         name: 'User'
//     }

//     render() {
//         return (
//             <div>
//                 Hello! My name is <b>{this.props.name}</b>.
//             </div>
//         );
//     }
// }

const MyName = ({name}) => {
    return <div>Hello! My name is {name}.</div>;
};

export default MyName;
