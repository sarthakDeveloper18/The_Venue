import React from 'react';
import Slide from 'react-reveal/Slide';

class TimeUntil extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'Dec, 16, 2020',
            days: 0,
            hs: 0,
            mins: 0,
            sec: 0
        }
    }
    getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date())
        if(time < 0){
            console.log("Date Passed")
        }
        else{
            const seconds = Math.floor((time/1000)%60)
            const minutes = Math.floor((time/1000/60)%60)
            const hours = Math.floor((time/(1000*60*60))%24)
            const days = Math.floor(time/(1000*60*60*24))
            this.setState({
                days: days,
                hs: hours,
                min: minutes,
                sec: seconds
            })
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            this.getTimeUntil(this.state.deadline)
        }, 1000);
    }
    render() {
        return (
            <Slide left delay = {1000}>
                <div className = 'countdown_wrapper'>
                    <div className = 'countdown_top'>
                        Event Starts In
                    </div>
                    <div className = 'countdown_bottom'>
                        <div className = 'countdown_item'>
                            <div className = 'countdown_time'>
                                {this.state.days}
                            </div>
                            <div className = 'countdown_tag'>
                                Days
                            </div>
                        </div>
                        <div className = 'countdown_item'>
                            <div className = 'countdown_time'>
                                {this.state.hs}
                            </div>
                            <div className = 'countdown_tag'>
                                HS
                            </div>
                        </div>
                        <div className = 'countdown_item'>
                            <div className = 'countdown_time'>
                                {this.state.min}
                            </div>
                            <div className = 'countdown_tag'>
                                Min
                            </div>
                        </div>
                        <div className = 'countdown_item'>
                            <div className = 'countdown_time'>
                                {this.state.sec}
                            </div>
                            <div className = 'countdown_tag'>
                                Sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default TimeUntil