import Observer from "./Observer";

export default interface Subject<T> {
    observers:Observer<T>[];
    registerObserver(o: Observer<T>):void;
    removeObserver(o: Observer<T>):void;
    notifyObserver(parameter:T):void;
}