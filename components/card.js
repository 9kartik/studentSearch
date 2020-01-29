import React from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
// let mutableStuds = [...this.props.studs].sort((item1,item2)=> toggleState ? -(item1[type]>item2[type]) : -(item1[type]<item2[type]) );
// function orderStuds(cards, type, toggleState){
//     console.log(type, toggleState)
//     let mutableStuds = cards.sort((item1,item2)=> toggleState ? -(item1[type]>item2[type]) : -(item1[type]<item2[type]) )
//     return mutableStuds
// }

  
const Card = props => {
    let cardList = props.cards || [];
    let sortList = {
        name,
        score : 'totMarks',
        asc : true,
        desc : false
    }
    // if(props){
    //     cardList = orderStuds(cardList, sortList.name, sortList[props.orderName]);
    //     cardList = orderStuds(cardList, sortList.score, sortList[props.orderScore]);
    // }
    return (  
            <Router>
            <div className="flexR fWrap f12 centerFlex">
                {cardList.map(
                        (item, order) => 
                            <Link to={'/'+item.rollNo} key={item.rollNo} className="flexC p1 m1 boxShades w30 pointer tBlack noDec">
                            <div className="" style={{order}}>
                                <div className="flexR">
                                    <div className="f1">{item.name}</div>
                                    <div>{item.class}</div>
                                </div>
                                <div>{item.totMarks}</div>
                            </div>
                            </Link>
                    )}
            </div>
            <Switch>
                <Route path="/:id" children={<Child />} />
            </Switch>
            </Router>
    );
  };
  
  function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }
  
export default Card;