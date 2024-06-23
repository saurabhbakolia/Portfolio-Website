import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
    const rootElement = document.getElementById('portal-root');

    // Create the root element if it doesn't exist
    if (!rootElement) {
        const newRootElement = document.createElement('div');
        newRootElement.id = 'portal-root';
        document.body.appendChild(newRootElement);
    }

    // Use ReactDOM.createPortal to render the children outside the DOM hierarchy
    return ReactDOM.createPortal(children, rootElement);
};

export default Portal;
