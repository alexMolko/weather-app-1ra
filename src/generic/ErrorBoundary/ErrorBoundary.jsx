import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends PureComponent {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }

    componentDidCatch (error,errorInfo){
        console.log("DA: ", errorInfo)
    }
    static getDerivedStateFromError(error){
        return { hasError : true}
    }
    render() {
        return (
           this.state.hasError?
           <h1>Hubo un error</h1>
           : 
           this.props.children 
        )
    }
}

export default ErrorBoundary
