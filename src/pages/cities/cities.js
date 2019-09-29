import React, { Component } from 'react';
import styles from './cities.module.scss';
import { NavBar, Icon } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import axios from "axios"

class CitiesComponent extends Component {
    state = {
        guessCity: {},
        hotCities: null,
        groupCities: null
    }
    render() {
        let { guessCity, hotCities, groupCities } = this.state;
        return (
            // js 中 横杠不支持 可以用key的形式
            <div className={styles['cities-wrap']} >
                <NavBar mode="dark">城市选择</NavBar>
                <div className={styles.guess}>
                    <div>
                        当前定位城市
                    </div>
                    <div>
                        <NavLink to={`/city/${guessCity.id}/${guessCity.name}`}><span>{guessCity && guessCity.name}</span></NavLink>

                        <Icon type="right" />
                    </div>
                </div>
                {/* guess - end */}
                <div className={styles.hot}>
                    <ul>
                        {hotCities && hotCities.map((city) => {
                            return (
                                <li key={city.id}>
                                    <NavLink to={`/city/${city.id}/${city.name}`}>
                                        {city.name}
                                    </NavLink>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                {/* hot - end */}
                <div className={styles.group}>

                    {groupCities && Object.keys(groupCities).map((key) => {

                        return (
                            <div key={key}>
                                <p className={styles.title}>{key}</p>
                                <ul>
                                    {groupCities[key].map((city) => {
                                        return (
                                            <li key={city.id}>
                                                <NavLink to={`/city/${city.id}/${city.name}`}>
                                                    {city.name}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                        )

                    })}

                </div>
                {/* group - end */}
            </div >
        )
    }
    //定位城市
    requestCities(type) {
        return axios.get(`https://elm.cangdu.org/v1/cities?type=${type}`)
    }
    //排序group_cities
    sortGroupCity(unordered) {
        const ordered = {};
        Object.keys(unordered).sort().forEach(function (key) {
            ordered[key] = unordered[key];
        });
        return ordered;
    }

    componentDidMount() {
        let { guessCity } = this.state;
        if (guessCity.id) return;
        let guess = this.requestCities("guess");
        let hot = this.requestCities("hot");
        let group = this.requestCities("group");
        axios.all([guess, hot, group]).then((res) => {
            console.log(res);
            this.setState({
                guessCity: res[0].data,
                hotCities: res[1].data,
                groupCities: this.sortGroupCity(res[2].data),
            })
            console.log(this.state);

        })
    }
}
export default CitiesComponent;
