import React from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Button from '../utils/Button';

class Discount extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            end: 30
        }
    }
    porcentage = () => {
        if(this.state.start < this.state.end){
            this.setState({start: this.state.start + 1})
        }
    }
    componentDidUpdate = () => {
        setTimeout(() => {
            this.porcentage()
        }, 30);
    };
    
    render() {
        return (
            <div className = 'center_wrapper'>
                <div className = 'discount_wrapper'>
                    <Fade onReveal = {()=> this.porcentage()}>
                        <div className = 'discount_porcentage'>
                            <span>{this.state.start}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className = 'discount_description'>
                            <h3>Purchase Ticket before 1st December</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Button text = 'Purchase Tickets' bck = '#ffa800' color = 'white' link = 'https://www.google.com'/>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount