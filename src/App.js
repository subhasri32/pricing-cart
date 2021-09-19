import React from "react";

class App extends React.Component{

    render()
    {
        return (
            <div className="container">
                <div class="card-container">
                <p className="type" >{this.props.a}</p>
                <p className="price"><span>{this.props.b[0]}</span>{this.props.b[1]}</p>
                 <div className="list">
                     <div><i className={this.props.c[0]}></i><span>{this.props.c[1]}</span></div>
                      <div><i className={this.props.d[0]}></i><span>{this.props.d[1]}</span></div>
                      <div><i className={this.props.e[0]}></i><span>{this.props.e[1]}</span></div>
                      <div><i className={this.props.f[0]}></i><span>{this.props.f[1]}</span></div>
                      <div><i className={this.props.g[0]}></i><span>{this.props.g[1]}</span></div>
                      <div><i className={this.props.h[0]}></i><span>{this.props.h[1]}</span></div>
                      <div><i className={this.props.i[0]}></i><span>{this.props.i[1]}</span></div>
                      <div><i className={this.props.j[0]}></i><span>{this.props.j[1]}</span></div>
                 </div>
                 <div>
                     <button>Button</button>
                 </div>
                 </div>
            </div>
        );
    }
}

export default App;