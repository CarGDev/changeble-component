import React from 'react';

function RenderContent (Content: typeof React.Component, variables: any) {
    return <Content {...variables}/>;
}

export default RenderContent;
