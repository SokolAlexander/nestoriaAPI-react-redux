import React from 'react';
import {connect} from 'react-redux';

import './css/showMoreButton.css';

export function ShowMoreButton(props) {
    return (
        <div className="show-more" onClick={props.onShowMoreClick}>Show more</div>
    )
};

// const mapStateToProps = () => ({});

// const mapDispatchToProps = {
//     onShowMore: requestNextPage
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton)