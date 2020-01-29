export default function transformer(cardList){
    let cList = Object.values({...cardList} || [])
    cList.forEach((item, order)=>{
        item.totMarks = Object.values(item.marks).reduce((sum, score)=>sum += score)
    })
    return cList;
}