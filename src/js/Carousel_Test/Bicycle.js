import React, { Component } from 'react';
import '../../css/bicycle.css';

class Bicycle extends Component {
    render() {
        return (
            <div className = "container">
                
                <input class="colorizer" type="color"/>
                <div class="bike">
                <div class="bike__cranks">
                    <div class="bike__crank"></div>
                </div>
                <div class="wheel wheel--back">
                    <div class="wheel__tyre bike__tyres" onClick={() => this.props.loadChooser("wheels")}></div>
                    <div class="wheel__spin">
                    <div class="wheel__rim bike__wheel" onClick={() =>  this.props.loadChooser("tires")}></div>
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
                    <div class="wheel__tyre bike__tyres" onClick={() => this.props.loadChooser("wheels")}></div>
                    <div class="wheel__spin">
                    <div class="wheel__rim bike__wheel" onClick={() =>  this.props.loadChooser("tires")}></div>
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
                    <div class="forks__steerer bike__forks"></div>
                    <div class="forks__leg bike__forks" onClick={() =>this.props.loadChooser("forks")}></div>
                    <div class="forks__dropout bike__forks"></div>
                </div>
                <div class="frame bike__frame">
                    <div class="frame__toptube frame__tube bike__frame" onClick={() => this.props.loadChooser("frames")}></div>
                    <div class="frame__chainstay frame__tube bike__frame" onClick={() => this.props.loadChooser("frames")}></div>
                    <div class="frame__seattube frame__tube bike__frame" onClick={() => this.props.loadChooser("frames")}></div>
                    <div class="frame__bottombracket frame__tube bike__frame"></div>
                    <div class="frame__seatstay frame__tube bike__frame" onClick={() => this.props.loadChooser("frames")}></div>
                    <div class="frame__dropout frame__tube bike__frame"></div>
                    <div class="frame__downtube frame__tube bike__frame" onClick={() => this.props.loadChooser("frames")}></div>
                </div>
                <div class="bike__seat" onClick={() => this.props.loadChooser("sillas")}></div>
                <div class="bike__cranks bike__cranks--foreground">
                    <div class="bike__crank"></div>
                </div>
                <div class="bike__stem"></div>
                <div class="bike__handlebars" onClick={() => this.props.loadChooser("manubrios")}></div>
                <div class="bike__basket"></div>
                </div>
            </div>
        );
    }
}

export default Bicycle;