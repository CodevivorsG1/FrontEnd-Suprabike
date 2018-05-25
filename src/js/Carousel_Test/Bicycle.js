import React, { Component } from 'react';
import '../../css/bicycle.css';

class Bicycle extends Component {
    constructor(props){
        super(props)
        this.state={
            wheelStyle: "",
            tireStyle: "",
            forkStyle: "",
            frameStyle: "",
            seatStyle: "",
            handlebarStyle: ""
        }
    }
    loadChooserWheel = () =>{
        this.props.loadChooser("wheels")
        this.setState({wheelStyle: "after-wheels"})
    }
    loadChooserTyre = () =>{
        this.props.loadChooser("tires")
        this.setState({tireStyle: "after-tyres"})
    }
    loadChooserForks = () =>{
        this.props.loadChooser("forks")
        this.setState({forkStyle: "after-forks"})
    }
    loadChooserFrames = () =>{
        this.props.loadChooser("frames")
        this.setState({frameStyle: "after-frames"})
    }
    loadChooserSeats = () =>{
        this.props.loadChooser("sillas")
        this.setState({seatStyle: "after-seats"})
    }
    loadChooserHandlebar = () =>{
        this.props.loadChooser("manubrios")
        this.setState({handlebarStyle: "after-handlebar"})
    }
    render() {
        return (
            <div className = "container">
                
                
                <div class="bike">
                <div class="bike__cranks">
                    <div class="bike__crank"></div>
                </div>
                <div class="wheel wheel--back">
                    <div  onClick={this.loadChooserWheel}
                    className={`${this.state.wheelStyle} wheel__tyre bike__tyres`}>
                    </div>
                    <div class="wheel__spin">
                    <div className={`${this.state.tireStyle} wheel__rim bike__wheel`} onClick={this.loadChooserTyre}></div>
                    <div class="wheel__hub bike__wheel"></div>
                    <div class="wheel__spokes bike__wheel">
                        <div class="wheel__spoke bike__wheel"></div>
                        <div class="wheel__spoke bike__wheel"></div>
                        <div class="wheel__spoke bike__wheel"></div>
                        <div class="wheel__spoke bike__wheel"></div>
                        <div class="wheel__spoke bike__wheel"></div>
                    </div>
                    </div>
                </div>
                <div class="wheel wheel--front">
                    <div onClick={this.loadChooserWheel}
                    className={`${this.state.wheelStyle} wheel__tyre bike__tyres`}></div>
                    <div class="wheel__spin">
                    <div className={`${this.state.tireStyle} wheel__rim bike__wheel`} onClick={this.loadChooserTyre}></div>
                    <div class="wheel__hub bike__wheel"></div>
                    <div class="wheel__spokes bike__wheel">
                        <div class="wheel__spoke bike__wheel"></div>
                        <div class="wheel__spoke bike__wheel"></div>
                        <div class="wheel__spoke bike__wheel"></div>
                        <div class="wheel__spoke bike__wheel"></div>
                        <div class="wheel__spoke bike__wheel"></div>
                    </div>
                    </div>
                </div>
                <div class="forks bike__forks">
                    <div className={`${this.state.forkStyle} forks__steerer bike__forks`} onClick={this.loadChooserForks}></div>
                    <div className={`${this.state.forkStyle} forks__leg bike__forks`} onClick={this.loadChooserForks}></div>
                    <div className={`${this.state.forkStyle} forks__dropout bike__forks`} onClick={this.loadChooserForks}></div>
                </div>
                <div class="frame bike__frame">
                    <div className={`${this.state.frameStyle} frame__toptube frame__tube bike__frame`} onClick={this.loadChooserFrames}></div>
                    <div class={`${this.state.frameStyle} frame__chainstay frame__tube bike__frame`} onClick={this.loadChooserFrames}></div>
                    <div class={`${this.state.frameStyle} frame__seattube frame__tube bike__frame`} onClick={this.loadChooserFrames}></div>
                    <div class="frame__bottombracket frame__tube bike__frame"></div>
                    <div class={`${this.state.frameStyle} frame__seatstay frame__tube bike__frame`} onClick={this.loadChooserFrames}></div>
                    <div class="frame__dropout frame__tube bike__frame"></div>
                    <div class={`${this.state.frameStyle} frame__downtube frame__tube bike__frame`} onClick={this.loadChooserFrames}></div>
                </div>
                <div className={`${this.state.seatStyle} bike__seat`} onClick={this.loadChooserSeats}></div>
                <div class="bike__cranks bike__cranks--foreground">
                    <div class="bike__crank"></div>
                </div>
                <div class="bike__stem"></div>
                <div className={`${this.state.handlebarStyle} bike__handlebars`} onClick={this.loadChooserHandlebar}></div>
                <div class="bike__basket"></div>
                </div>
            </div>
        );
    }
}

export default Bicycle;