const isCancelable = Symbol('isCancelable');

class CancelablePromise extends Promise {
    then(fn){
        super.then(() => !this[isCancelable] && fn());
        return this;
    }

    catch(fn){
        super.then(() => !this[isCancelable] && fn());
        return this;
    }

    cancel(){
        this[isCancelable] = true;
        return this;
    }
}

module.exports = CancelablePromise;