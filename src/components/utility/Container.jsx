import PropTypes from "prop-types";

export default function Container({ children, className }) {
    return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
