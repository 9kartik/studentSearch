import React from "react";
import {toggleWrap, debounceWrap} from "../helpers/wrappers";


class SearchBar extends React.Component {
    // onSort = {
    //     props.
    // }
    constructor(props){
        super(props);
        this.studs = props.studs || [];
        this.pState = props.upState || (()=>{});
        this.state = {
            name : 'asc',
            score : 'asc'
        }
        this.stateMap = {
            totMarks :'score',
            name: 'name'
        }
    }
    componentDidMount() {
        this.originalStuds = [...this.props.studs]
        this.orderName = toggleWrap(this.order.bind(this, 'name'))
        this.orderMarks = toggleWrap(this.order.bind(this, 'totMarks'))
        this.filterDebbed = debounceWrap(this.filter.bind(this), 400)
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps.studs, this.originalStuds)
        if(prevProps.studs.length >= this.originalStuds.length)
            this.originalStuds = [...prevProps.studs];
    }

    order(type, toggleState){
        let mutableStuds = [...this.props.studs].sort((item1,item2)=> toggleState ? -(item1[type]>item2[type]) : -(item1[type]<item2[type]) );
        this.setState({[this.stateMap[type]]: toggleState?'asc':'desc'})
        this.pState({SearchBar: this.state, studs: mutableStuds})
        // this.setState({[event.target.dataset.order]: this.stateMap[type] +' '+ (toggleState?'Ascending':'Descending') })
    }

    filter(evt){

        // evt.persist();
        let mutableStuds = (this.originalStuds[0]? this.originalStuds: this.props.studs).filter(item=> item.name.match( new RegExp([...evt.target.value].join('.*'), 'i')))
        this.pState({studs: evt.target.value? mutableStuds : this.originalStuds})
        // console.log('evt', evt)
    }
    render(){
        return (  
            <div className="topSticker flexR bWhite p1 m1">
                <input type="button"  value={'Name ' + this.state.name} data-order="name" className="f1" onClick={this.orderName}/>
                <input type="text" placeholder="Enter Student Name" className="f1" onKeyUp={this.filterDebbed}/>
                <input type="button"  value={'Score ' + this.state.score} data-order="totMarks" className="f1" onClick={this.orderMarks}/> 
            </div>
        )
    }
  }
  
export default SearchBar;