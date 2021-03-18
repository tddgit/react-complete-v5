import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        throw new Error('lol');
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000);
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/'} />;
        }
        if (this.state.hasError) {
            return (
                <h1>
                    There was an error with this listing.
                    <Link to={'/'}>Click me</Link> to go back to the home page
                    or wait five seconds
                </h1>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
