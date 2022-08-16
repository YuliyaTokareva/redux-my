import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { cityDataSelector } from './weather.selectors.js'
import * as cityActions from './weather.actions.js'

class Weather extends Component {
    state = {
        cityData: [],
    }
    componentDidMount() {
        const res = this.props.getWatherData()
        this.setState({
            cityData: res,
        })
    }

    render() {
        console.log(res)
        return (
            <main className="weather">
                <h1 className="weather__title">Weather data</h1>
                <ul className="cities-list">
                    {this.state.cityData.map((city) => {
                        return (
                            <li className="city" key={city.id}>
                                <span className="city__name">{city.name}</span>
                                <span className="city__temperature">{city.temperature}</span>
                            </li>
                        )
                    })}
                </ul>
            </main>
        )
    }
}
Weather.propTypes = {
    getWatherData: PropTypes.func.isRequired,
}
const mapDispatch = {
    getWatherData: cityActions.getWatherData,
}
const mapState = (state) => {
    return {
        cityDataSelector: cityDataSelector(state),
    }
}

export default connect(mapState, mapDispatch)(Weather)
