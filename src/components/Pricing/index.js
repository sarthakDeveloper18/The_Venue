import React from 'react';
import Button from '../utils/Button';
import Zoom from 'react-reveal/Zoom';

class Pricing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            prices: [100, 150, 250],
            position: ['Balcony', 'Medium', 'Star'],
            desc: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry", "Lorem Ipsum is simply dummy text of the printing and typesetting industry", "Lorem Ipsum is simply dummy text of the printing and typesetting industry"],
            delay: [500, 0, 500]
        }
    }
    showBoxes = () => (
        this.state.prices.map((p, i)=>(
            <Zoom key = {i} delay = {this.state.delay[i]}>
                <div className = 'pricing_item'>
                    <div className = 'pricing_inner_wrapper'>
                        <div className = 'pricing_title'>
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.position[i]}</span>
                        </div>
                        <div className = 'pricing_description'>
                            <span>{this.state.desc[i]}</span>
                        </div>
                        <div className = 'pricing_buttons'>
                            <Button text = 'Purchase' bck = '#ffa800' color = 'white'/>
                        </div>
                    </div>
                </div>
            </Zoom>
        ))   
    )
    render() {
        return (
            <div className = 'bck_black'>
                <div className = 'center_wrapper pricing_section'>
                    <h2>Pricing</h2>
                    <div className = 'pricing_wrapper'>
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing