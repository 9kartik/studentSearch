export function toggleWrap(func){
    var currentFlag = true;
    // console.log('wrapper', func)
    return function(){
        currentFlag = !currentFlag;
        func.apply(this, [currentFlag])
    }
}

export function debounceWrap(func, delay){
    var timeoutid = '';
    return function(){
        // console.log('arg2', arguments[0].target)
        if(timeoutid)
            clearTimeout(timeoutid)

        var args = arguments[0]
        args.persist()
        var context = this
        timeoutid = setTimeout(func.bind(context, args), delay)
    }
}